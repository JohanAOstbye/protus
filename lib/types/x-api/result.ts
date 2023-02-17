import { Prisma, Result } from '@prisma/client'
import { z } from 'zod'
import { extensions, recordFromPrismaArray, recordToPrismaArray } from '.'

const score = z
  .object({
    scaled: z.number().max(1).min(-1),
    raw: z.number().optional(),
    min: z.number().optional(),
    max: z.number().optional(),
  })
  .refine((data) => {
    let { raw, min, max } = data
    if (raw) {
      if (min && raw < min) {
        return false
      }
      if (max && raw > max) {
        return false
      }
    }

    return true
  })

const duration = z.string()

export const result = z.object({
  score: score.optional(),
  success: z.boolean().optional(),
  completion: z.boolean().optional(),
  response: z.string().optional(),
  duration: duration.optional(),
  extensions: extensions.optional(),
})

export type resultType = z.infer<typeof result>

export const resultToPrisma = (result: resultType) => {
  const prismaStatment: Prisma.ResultCreateInput = {
    ...result,
    extensions: result.extensions ? recordToPrismaArray(result.extensions) : [],
  }
  return prismaStatment
}

export const resultFromPrisma = (prismaResult: Result): resultType => {
  const resultObject: resultType = {
    ...prismaResult,
    score:
      prismaResult.score == null
        ? undefined
        : {
            ...prismaResult.score,
            raw:
              prismaResult.score.raw == null
                ? undefined
                : prismaResult.score.raw,
            min:
              prismaResult.score.min == null
                ? undefined
                : prismaResult.score.min,
            max:
              prismaResult.score.max == null
                ? undefined
                : prismaResult.score.max,
          },
    success: prismaResult.success == null ? undefined : prismaResult.success,
    completion:
      prismaResult.completion == null ? undefined : prismaResult.completion,
    response: prismaResult.response == null ? undefined : prismaResult.response,
    duration: prismaResult.duration == null ? undefined : prismaResult.duration,
    extensions: recordFromPrismaArray(prismaResult.extensions),
  }
  const res = result.safeParse(resultObject)
  if (!res.success) {
    console.error(res.error)
    throw new Error('Invalid result')
  }
  return res.data
}

export const resultSelect: Prisma.ResultSelect = {
  score: {
    select: {
      scaled: true,
      raw: true,
      min: true,
      max: true,
    },
  },
  success: true,
  completion: true,
  response: true,
  duration: true,
  extensions: true,
}
