import { z } from 'zod'

export const user = z.object({
  id: z.string().uuid(),
  email: z.string().optional(),
  emailVerified: z.string().datetime().optional(),
  image: z.string().optional(),
})

export type userType = z.infer<typeof user>
