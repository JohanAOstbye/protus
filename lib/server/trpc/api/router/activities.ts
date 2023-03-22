import { z } from 'zod'
import dJSON from 'dirty-json'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { response } from 'lib/types/course-api'
import { activityType } from 'lib/types/course-api/topic'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

export const activitiesRouter = createTRPCRouter({
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
      console.log(cleanedJSON.topics)

      const parsed = response.safeParse(cleanedJSON)
      if (!parsed.success) throw new Error(parsed.error.message)

      const topics = parsed.data.topics
      const chapters = topics.map((topic) => {
        const activities: {
          activity: activityType
          type: 'Exercise' | 'Challenge' | 'Example'
        }[] = []
        if (topic.activities.Challenges)
          activities.concat(
            topic.activities.Challenges.map((act) => {
              return { activity: act, type: 'Challenge' }
            })
          )
        if (topic.activities.Coding)
          activities.concat(
            topic.activities.Coding.map((act) => {
              return { activity: act, type: 'Exercise' }
            })
          )
        if (topic.activities.Examples)
          activities.concat(
            topic.activities.Examples.map((act) => {
              return { activity: act, type: 'Example' }
            })
          )

        return {
          where: {
            name_courseName: { name: topic.name, courseName: 'Java' },
          },
          create: {
            name: topic.name,
            activities: {
              connectOrCreate: activities.map((activity) => {
                return {
                  where: {
                    url: activity.activity.url,
                  },
                  create: {
                    ...activity.activity,
                    type: activity.type,
                  },
                }
              }),
            },
          },
        }
      })
      await ctx.prisma.course.upsert({
        where: { name: 'Java' },
        update: {
          chapters: {
            connectOrCreate: chapters,
          },
        },
        create: {
          name: 'Java',
          chapters: {
            connectOrCreate: chapters,
          },
        },
      })
      return parsed.data
    } catch (error) {
      console.log(error)

      throw new Error('json parsing failed:/')
    }
  }),
  getAllActivities: publicProcedure
    .input(
      z.object({
        type: z.array(z.enum(['Challenge', 'Exercise'])),
        courses: z.array(
          z.object({
            chapters: z.array(z.string()),
            name: z.string(),
          })
        ),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activity.findMany({
        where: {
          type: {
            in: input.type,
          },
          Chapter: {
            OR: input.courses.reduce(
              (acc: { name?: string; courseName: string }[], course) =>
                course.chapters
                  ? acc.concat(
                      course.chapters.map((chapter) => {
                        return { name: chapter, courseName: course.name }
                      })
                    )
                  : acc.concat([{ courseName: course.name }]),
              []
            ),
          },
        },
      })
    }),

  getActivityByID: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activity.findUnique({ where: { id: input.id } })
    }),
})

export type ActivitiesRouter = typeof activitiesRouter

export type ActivitiesRouterInput = inferRouterInputs<ActivitiesRouter>
export type ActivitiesRouterOutput = inferRouterOutputs<ActivitiesRouter>
