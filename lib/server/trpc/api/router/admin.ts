import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '../trpc'

import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { statementSelect } from 'lib/types/x-api/statement'

type timeType = {
  actorid: string
  durations: string[]
  devices: {
    mobile: {
      total: string[]
      page: { course: string[]; chapter: string[]; activity: string[] }
    }
    tablet: {
      total: string[]
      page: { course: string[]; chapter: string[]; activity: string[] }
    }
    desktop: {
      total: string[]
      page: { course: string[]; chapter: string[]; activity: string[] }
    }
  }
}[]

const getDevice = (platform: string) => {
  if (platform.includes('Android') || platform.includes('IPhone'))
    return 'mobile'
  if (platform.includes('iPad') || platform.includes('compatible'))
    return 'tablet'
  return 'desktop'
}

export const adminRouter = createTRPCRouter({
  test: publicProcedure.query(async ({ input, ctx }) => {
    const chapters = await ctx.prisma.object.updateMany({
      where: {
        id: {
          startsWith: `https://protus.no/c/java/`,
        },
      },
      data: {
        definition: {
          type: 'http://adlnet.gov/expapi/activities/chapter',
        },
      },
    })
    const courses = await ctx.prisma.object.updateMany({
      where: {
        id: `https://protus.no/c/java`,
      },
      data: {
        definition: {
          type: 'http://adlnet.gov/expapi/activities/course',
        },
      },
    })
    const activities = await ctx.prisma.object.findMany({
      where: {
        id: {
          not: {
            startsWith: `https://protus.no/c/java`,
          },
        },
      },
    })
    return { chapters, courses, activities }
  }),
  statements: publicProcedure.query(async ({ input, ctx }) => {
    const results = await ctx.prisma.statement.findMany({
      select: statementSelect(),
    })

    const times = results.reduce((acc, { actor, result, context, object }) => {
      if (!result || !result.duration || !actor) return acc
      const index = acc.findIndex((a) => a.actorid === actor.id)
      const device = context?.platform && getDevice(context.platform)
      if (index === -1) {
        acc.push({
          actorid: actor.id,
          durations: [result.duration],
          devices: {
            mobile:
              device === 'mobile'
                ? {
                    total: [result.duration],
                    page: {
                      course:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/course'
                          ? [result.duration]
                          : [],
                      chapter:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/chapter'
                          ? [result.duration]
                          : [],
                      activity: object?.definition?.type?.startsWith(
                        'http://adlnet.gov/expapi/activities/exersice'
                      )
                        ? [result.duration]
                        : [],
                    },
                  }
                : {
                    total: [],
                    page: {
                      course: [],
                      chapter: [],
                      activity: [],
                    },
                  },
            tablet:
              device === 'tablet'
                ? {
                    total: [result.duration],
                    page: {
                      course:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/course'
                          ? [result.duration]
                          : [],
                      chapter:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/chapter'
                          ? [result.duration]
                          : [],
                      activity: object?.definition?.type?.startsWith(
                        'http://adlnet.gov/expapi/activities/exersice'
                      )
                        ? [result.duration]
                        : [],
                    },
                  }
                : {
                    total: [],
                    page: {
                      course: [],
                      chapter: [],
                      activity: [],
                    },
                  },
            desktop:
              device === 'desktop'
                ? {
                    total: [result.duration],
                    page: {
                      course:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/course'
                          ? [result.duration]
                          : [],
                      chapter:
                        object?.definition?.type ===
                        'http://adlnet.gov/expapi/activities/chapter'
                          ? [result.duration]
                          : [],
                      activity: object?.definition?.type?.startsWith(
                        'http://adlnet.gov/expapi/activities/exersice'
                      )
                        ? [result.duration]
                        : [],
                    },
                  }
                : {
                    total: [],
                    page: {
                      course: [],
                      chapter: [],
                      activity: [],
                    },
                  },
          },
        })
      } else {
        acc[index].durations.push(result.duration)
        if (device === 'mobile') {
          acc[index].devices.mobile.total.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/course'
          )
            acc[index].devices.mobile.page.course.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/chapter'
          )
            acc[index].devices.mobile.page.chapter.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/activity'
          )
            acc[index].devices.mobile.page.activity.push(result.duration)
        }
        if (device === 'tablet') {
          acc[index].devices.tablet.total.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/course'
          )
            acc[index].devices.tablet.page.course.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/chapter'
          )
            acc[index].devices.tablet.page.chapter.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/activity'
          )
            acc[index].devices.tablet.page.activity.push(result.duration)
        }
        if (device === 'desktop') {
          acc[index].devices.tablet.total.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/course'
          )
            acc[index].devices.tablet.page.course.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/chapter'
          )
            acc[index].devices.tablet.page.chapter.push(result.duration)
          if (
            object?.definition?.type ===
            'http://adlnet.gov/expapi/activities/activity'
          )
            acc[index].devices.tablet.page.activity.push(result.duration)
        }
      }
      return acc
    }, [] as timeType)
    return times
  }),
})

export type adminRouter = typeof adminRouter

export type adminRouterInput = inferRouterInputs<adminRouter>
export type adminRouterOutput = inferRouterOutputs<adminRouter>
