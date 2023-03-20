import { response } from 'lib/types/course-api'
import { z } from 'zod'
const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'

export const courseRouter = createTRPCRouter({
  //TODO: fix auth og sett alle til protected
  get: publicProcedure.query(async (ctx) => {
    const res = await fetch(
      apiUrl +
        new URLSearchParams({
          grp: 'NorwayFall2022a',
          sid: 'TEST',
          cid: '352',
          mod: 'all',
        })
    )
    try {
      const parsed = JSON.parse(await res.json())
      const data = response.parse(parsed)
      return data
    } catch (error) {
      throw new Error('json parsing failed:', await res.json())
    }
  }),
  getAllActivities: publicProcedure
    .input(
      z.object({
        type: z.enum(['Example', 'Challenge', 'Exercise']).optional(),
        Chapter: z
          .object({
            Course: z.object({ name: z.string() }),
            name: z.string().optional(),
          })
          .optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activity.findMany({
        where: input,
      })
    }),

  getActivityByID: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.activity.findUnique({ where: { id: input.id } })
    }),
})
