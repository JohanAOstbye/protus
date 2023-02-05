import { z } from 'zod'
import { extensions } from '.'

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

const duration = z.object({})

export const result = z.object({
  score: score.optional(),
  success: z.boolean().optional(),
  completion: z.boolean().optional(),
  response: z.string().optional(),
  duration: duration.optional(),
  extensions: extensions.optional(),
})
