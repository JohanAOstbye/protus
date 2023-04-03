import { z } from 'zod'
import { state } from './state'

export const learner = z
  .object({
    id: z.string(),
    name: z.string(),
    isHidden: z.boolean(),
    state: state,
    preferences: z.array(z.any()),
  })
  .transform((learner) => {
    return { code: learner.id, name: learner.name, state: learner.state }
  })

export type learnerType = z.infer<typeof learner>
