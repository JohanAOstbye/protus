import { z } from 'zod'

export const document = z.object({
  id: z.string().uuid(),
  updated: z.string().datetime().default(new Date().toISOString()),
  contents: z.any().transform((val) => JSON.stringify(val)),
})
