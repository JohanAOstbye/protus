import { z } from 'zod'

const contextGroup = z.object({
  id: z.string(),
  name: z.string(),
})

export const context = z.object({
  learnerId: z.string(),
  group: contextGroup,
})
