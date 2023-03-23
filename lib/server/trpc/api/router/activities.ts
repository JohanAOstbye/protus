import { z } from 'zod'
import dJSON from 'dirty-json'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { response } from 'lib/types/course-api'
import { activityType } from 'lib/types/course-api/topic'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

export const activitiesRouter = createTRPCRouter({
  getAll: publicProcedure
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

  getByID: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activity.findUnique({ where: { id: input.id } })
    }),
})

export type activitiesRouter = typeof activitiesRouter

export type activitiesRouterInput = inferRouterInputs<activitiesRouter>
export type activitiesRouterOutput = inferRouterOutputs<activitiesRouter>
