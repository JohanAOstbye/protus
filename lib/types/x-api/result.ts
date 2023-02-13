import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { extensions, mapToArray } from '.'

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
    extensions: result.extensions ? mapToArray(result.extensions) : [],
  }
  return prismaStatment
}
