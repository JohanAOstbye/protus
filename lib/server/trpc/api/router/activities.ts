import { z } from 'zod'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export const activitiesRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).optional().default(20),
        cursor: z.string().optional(),
        filter: z.object({
          query: z.string().optional(),
          type: z.array(z.enum(['Challenge', 'Exercise'])),
          courses: z.array(
            z.object({
              chapters: z.array(z.string()),
              name: z.string(),
            })
          ),
        }),
      })
    )
    .query(async ({ ctx, input }) => {
      const { limit, cursor, filter } = input

      const items = await ctx.prisma.activity.findMany({
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: { updatedAt: 'desc' },
        where: {
          type: filter.type.length > 0 ? { in: filter.type } : undefined,
          Chapter:
            filter.courses.length > 0
              ? {
                  OR: filter.courses.reduce(
                    (acc: { name?: string; courseName: string }[], course) =>
                      course.chapters && course.chapters.length > 0
                        ? acc.concat(
                            course.chapters.map((chapter) => {
                              return { name: chapter, courseName: course.name }
                            })
                          )
                        : acc.concat([{ courseName: course.name }]),
                    []
                  ),
                }
              : undefined,
        },
      })

      let nextCursor: typeof cursor | undefined = undefined
      if (items.length > limit) {
        const nextItem = items.pop()
        nextCursor = nextItem!.id
      }

      return {
        items,
        nextCursor,
      }
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
