import { z } from 'zod'

export const reportLevel = z.object({
  id: z.string(),
  name: z.string(),
})
