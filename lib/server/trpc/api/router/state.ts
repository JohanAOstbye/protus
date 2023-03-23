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
      const activities = topics.reduce<activityLocalType[]>((acc, topic) => {
        if (topic.activities.Challenges)
          acc.concat(
            topic.activities.Challenges.map((act) => {
              return {
                ...act,
                type: 'Challenge',
                chapter: topic.name,
                course: 'Java',
              }
            })
          )
        if (topic.activities.Coding)
          acc.concat(
            topic.activities.Coding.map((act) => {
              return {
                ...act,
                type: 'Exercise',
                chapter: topic.name,
                course: 'Java',
              }
            })
          )
        if (topic.activities.Examples)
          acc.concat(
            topic.activities.Examples.map((act) => {
              return {
                ...act,
                type: 'Example',
                chapter: topic.name,
                course: 'Java',
              }
            })
          )

        return acc
      }, [])

      console.log('inserting activivies')

      await ctx.prisma.$transaction(
        activities.map((activity) =>
          ctx.prisma.activity.upsert({
            where: { url: activity.url },
            create: {
              url: activity.url,
              name: activity.name,
              type: activity.type,
              Chapter: {
                connectOrCreate: {
                  where: {
                    name_courseName: {
                      name: activity.name,
                      courseName: activity.course,
                    },
                  },
                  create: {
                    name: activity.chapter,
                    Course: {
                      connectOrCreate: {
                        where: {
                          name: activity.name,
                        },
                        create: { name: activity.name },
                      },
                    },
                  },
                },
              },
            },
            update: {
              url: activity.url,
              name: activity.name,
              type: activity.type,
              Chapter: {
                connectOrCreate: {
                  where: {
                    name_courseName: {
                      name: activity.name,
                      courseName: activity.course,
                    },
                  },
                  create: {
                    name: activity.chapter,
                    Course: {
                      connectOrCreate: {
                        where: {
                          name: activity.name,
                        },
                        create: { name: activity.name },
                      },
                    },
                  },
                },
              },
            },
          })
        )
      )

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
