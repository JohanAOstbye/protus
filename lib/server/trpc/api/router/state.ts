import { z } from 'zod'
import dJSON from 'dirty-json'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { response } from 'lib/types/course-api'
import { activityType } from 'lib/types/course-api/topic'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

type activityLocalType = activityType & {
  apiId: string
  type: 'Exercise' | 'Challenge' | 'Example'
  chapter: string
  course: string
}

export const stateRouter = createTRPCRouter({
  getUser: protectedProcedure.query(async ({ ctx }) => {
    const { prisma, session } = ctx
    const state = await prisma.userState.findUnique({
      where: { userId: session.user.id },
      select: {
        courseState: {
          select: {
            course: true,
            chapterState: {
              select: {
                chapter: true,
                activityStates: {
                  select: {
                    activity: true,
                    state: true,
                  },
                },
                examples: true,
                challenges: true,
                exercises: true,
              },
            },
          },
        },
      },
    })

    return state
  }),
  getCourse: protectedProcedure
    .input(z.object({ course: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx
      const state = await prisma.courseState.findFirst({
        where: {
          userState: { userId: session.user.id },
          course: { name: input.course },
        },
        select: {
          course: true,
          chapterState: {
            select: {
              chapter: true,
              activityStates: {
                select: {
                  activity: true,
                  state: true,
                },
              },
              examples: true,
              challenges: true,
              exercises: true,
            },
          },
        },
      })

      return state
    }),
  getChapter: protectedProcedure
    .input(z.object({ course: z.string(), chapter: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx
      const state = await prisma.chapterState.findFirst({
        where: {
          chapter: { name: input.chapter },
          courseState: {
            userState: { userId: session.user.id },
            course: { name: input.course },
          },
        },
        select: {
          chapter: true,
          examples: true,
          challenges: true,
          exercises: true,
        },
      })

      return state
    }),
  getActivity: protectedProcedure
    .input(
      z.object({
        course: z.string(),
        chapter: z.string(),
        activity: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { prisma, session } = ctx
      const value = await prisma.activityState.findFirst({
        where: {
          activity: { name: input.activity },
          chapterState: {
            chapter: { name: input.chapter },
            courseState: {
              userState: { userId: session.user.id },
              course: { name: input.course },
            },
          },
        },
        select: {
          activity: true,
          state: true,
        },
      })

      return value
    }),

  update: protectedProcedure.mutation(async ({ ctx }) => {
    const { prisma, session } = ctx

    const url =
      apiUrl +
      new URLSearchParams({
        grp: 'NorwayFall2022a',
        sid: 'TEST', //TODO oppdater disse med riktig data
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
                  apiId: act.id,
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
                  apiId: act.id,
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
                  apiId: act.id,
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

      let existingActivityUrls: string[] = []
      try {
        existingActivityUrls = (
          await ctx.prisma.activity.findMany({ select: { url: true } })
        ).map((url) => url.url)
        activities = activities.filter(
          (act) => !existingActivityUrls.includes(act.url)
        )
      } catch (error) {}
      const queries: any[] = []
      if (activities.length > 0) {
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
          const coursesQuery = prisma.course.createMany({
            data: newCourses,
          })
          queries.push(coursesQuery)
        }

        const existingChapters: { name: string; courseName: string }[] =
          await prisma.chapter.findMany({
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

        if (newChapters.length > 0) {
          const chaptersQuery = prisma.chapter.createMany({
            data: newChapters,
          })
          queries.push(chaptersQuery)
        }

        if (activities.length > 0) {
          const activitiesQuery = activities.map((activity) =>
            prisma.activity.create({
              data: {
                url: activity.url,
                name: activity.name,
                type: activity.type,
                apiId: activity.course + activity.apiId,
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
      }

      const state = parsed.data.learners[0].state

      const deleteState = prisma.userState.upsert({
        where: { userId: session.user.id },
        create: {
          user: {
            connect: {
              id: session.user.id,
            },
          },
        },
        update: {
          courseState: {
            deleteMany: {
              courseName: 'Java',
            },
          },
        },
      })
      queries.push(deleteState)

      const createState = prisma.courseState.create({
        data: {
          userState: {
            connectOrCreate: {
              where: { userId: session.user.id },
              create: {
                user: {
                  connect: {
                    id: session.user.id,
                  },
                },
              },
            },
          },
          course: {
            connect: {
              name: 'Java',
            },
          },
          chapterState: {
            create: state.map((chapter) => {
              return {
                chapter: {
                  connect: {
                    name_courseName: {
                      name: chapter.name,
                      courseName: 'Java',
                    },
                  },
                },
                examples: chapter.example,
                challenges: chapter.challenges,
                exercises: chapter.exercise,
                state: chapter.state,
                activityStates: chapter.activities
                  ? {
                      create: chapter.activities.map((activity) => {
                        return {
                          state: activity.state,
                          activity: {
                            connect: {
                              apiId: 'Java' + activity.name,
                            },
                          },
                        }
                      }),
                    }
                  : undefined,
              }
            }),
          },
        },
      })
      queries.push(createState)

      await prisma.$transaction(queries)

      return parsed.data
    } catch (error) {
      throw new Error('json parsing failed:/')
    }
  }),
})

export type stateRouter = typeof stateRouter

export type stateRouterInput = inferRouterInputs<stateRouter>
export type stateRouterOutput = inferRouterOutputs<stateRouter>
