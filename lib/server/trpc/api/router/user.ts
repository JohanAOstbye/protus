import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '../trpc'

import { inferRouterInputs, inferRouterOutputs } from '@trpc/server'

export const userRouter = createTRPCRouter({
  update: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        image: z.string().url().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: input,
      })
    }),
  new: protectedProcedure
    .input(
      z.object({
        code: z.string(),
        ntnuStudent: z.string(),
        studyProgram: z.string(),
        experience: z.number(),
        mainDevice: z.string(),
        additionalDevices: z.array(z.string()),
        interest: z.number(),
      })
    )

    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.user.update({
        where: { id: ctx.session.user.id },
        data: {
          code: input.code,
          userDetails: {
            upsert: {
              create: {
                ntnuStudent: input.ntnuStudent,
                studyProgram: input.studyProgram,
                experience: input.experience,
                mainDevice: input.mainDevice,
                additionalDevices: input.additionalDevices,
                interest: input.interest,
              },
              update: {
                ntnuStudent: input.ntnuStudent,
                studyProgram: input.studyProgram,
                experience: input.experience,
                mainDevice: input.mainDevice,
                additionalDevices: input.additionalDevices,
                interest: input.interest,
              },
            },
          },
        },
      })
    }),
})

export type userRouter = typeof userRouter

export type userRouterInput = inferRouterInputs<userRouter>
export type userRouterOutput = inferRouterOutputs<userRouter>
