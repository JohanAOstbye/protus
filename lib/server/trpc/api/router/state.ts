import { z } from 'zod'
import dJSON from 'dirty-json'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { response } from 'lib/types/course-api'
import { activityType } from 'lib/types/course-api/topic'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

type activityLocalType = activityType & {
  type: 'Exercise' | 'Challenge' | 'Example'
  chapter: string
  course: string
}

export const stateRouter = createTRPCRouter({
  //TODO: fix auth og sett alle til protected
  get: publicProcedure.query(async ({ ctx }) => {
    const url =
      apiUrl +
      new URLSearchParams({
        grp: 'NorwayFall2022a',
        sid: 'TEST',
        cid: '352',
        mod: 'all',
      })

    const res = await fetch(url)
    const shittyAPIjson = await res.text()
    try {
      const cleanedJSON = dJSON.parse(
        shittyAPIjson.replace(
          ',value2color:function (x) { var y = Math.log(x)*0.25 + 1;  return (y < 0 ? 0 : y); }',
          ''
        )
      )
      const parsed = response.safeParse(cleanedJSON)
      if (!parsed.success) throw new Error(parsed.error.message)
      const topics = parsed.data.topics
      let activities: activityLocalType[] = topics.reduce<activityLocalType[]>(
        (acc, topic) => {
          if (topic.activities.Challenges) {
            acc = [
              ...acc,
              ...topic.activities.Challenges.map<activityLocalType>((act) => {
                return {
                  ...act,
                  type: 'Challenge',
                  chapter: topic.name,
                  course: 'Java',
                }
              }),
            ]
          }
          if (topic.activities.Coding) {
            acc = [
              ...acc,
              ...topic.activities.Coding.map<activityLocalType>((act) => {
                return {
                  ...act,
                  type: 'Exercise',
                  chapter: topic.name,
                  course: 'Java',
                }
              }),
            ]
          }
          if (topic.activities.Examples) {
            acc = [
              ...acc,
              ...topic.activities.Examples.map<activityLocalType>((act) => {
                return {
                  ...act,
                  type: 'Example',
                  chapter: topic.name,
                  course: 'Java',
                }
              }),
            ]
          }

          return acc
        },
        []
      )

      console.log('inserting activivies')
      let existingActivityUrls: string[] = []
      try {
        existingActivityUrls = (
          await ctx.prisma.activity.findMany({ select: { url: true } })
        ).map((url) => url.url)
        activities = activities.filter(
          (act) => !existingActivityUrls.includes(act.url)
        )
      } catch (error) {
        console.log("prisma error, couldn't get existing activity urls")
      }
      if (activities.length > 0) {
        const queries: any[] = []

        const existingCourses = (
          await ctx.prisma.course.findMany({ select: { name: true } })
        ).map((course) => course.name)

        const newCourses = activities
          .reduce<string[]>((acc, act) => {
            if (!acc.includes(act.course)) acc.push(act.course)
            return acc
          }, [])
          .filter((course) => !existingCourses.includes(course))
          .map((course) => {
            return { name: course }
          })
        console.log('newCourses: ', newCourses.length)
        if (newCourses.length > 0) {
          const coursesQuery = ctx.prisma.course.createMany({
            data: newCourses,
          })
          queries.push(coursesQuery)
        }

        const existingChapters: { name: string; courseName: string }[] =
          await ctx.prisma.chapter.findMany({
            select: { name: true, courseName: true },
          })

        const newChapters = activities
          .reduce<{ name: string; course: string }[]>((acc, act) => {
            if (
              !acc.find(
                (ch) => ch.name === act.chapter && ch.course === act.course
              )
            )
              acc.push({ name: act.chapter, course: act.course })
            return acc
          }, [])
          .filter(
            (chapter) =>
              !existingChapters.some(
                (ch) =>
                  ch.name === chapter.name && ch.courseName === chapter.course
              )
          )
          .map((chapter) => {
            return {
              name: chapter.name,
              courseName: chapter.course,
            }
          })

        console.log('newChapters: ', newChapters.length)

        if (newChapters.length > 0) {
          const chaptersQuery = ctx.prisma.chapter.createMany({
            data: newChapters,
          })
          queries.push(chaptersQuery)
        }

        console.log('activities: ', activities.length)

        if (activities.length > 0) {
          const activitiesQuery = activities.map((activity) =>
            ctx.prisma.activity.create({
              data: {
                url: activity.url,
                name: activity.name,
                type: activity.type,
                Chapter: {
                  connect: {
                    name_courseName: {
                      name: activity.chapter,
                      courseName: activity.course,
                    },
                  },
                },
              },
            })
          )
          queries.push(...activitiesQuery)
        }

        // await ctx.prisma.$transaction(queries)
        queries[0].then(() =>
          queries[1].then(async () => await Promise.all(queries.slice(2)))
        )

        console.log('done inserting activities')
      } else {
        console.log('no new activities')
      }

      return parsed.data
    } catch (error) {
      console.log(error)

      throw new Error('json parsing failed:/')
    }
  }),
})

export type stateRouter = typeof stateRouter

export type stateRouterInput = inferRouterInputs<stateRouter>
export type stateRouterOutput = inferRouterOutputs<stateRouter>
