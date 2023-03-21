import { z } from 'zod'
import dJSON from 'dirty-json'
import { createTRPCRouter, publicProcedure, protectedProcedure } from '../trpc'
import { response } from 'lib/types/course-api'

const apiUrl = `http://adapt2.sis.pitt.edu/aggregate2/GetContentLevels?`

export const activitiesRouter = createTRPCRouter({
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
      else {
        return parsed.data
      }
    } catch (error) {
      console.log(error)

      throw new Error('json parsing failed:/')
    }
  }),
  getAllActivities: publicProcedure
    .input(
      z.object({
        type: z.enum(['Challenge', 'Exercise']).optional(),
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
