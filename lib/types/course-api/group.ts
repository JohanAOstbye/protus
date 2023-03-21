import { z } from 'zod'
import { state } from './state'

export const group = z.object({
  name: z.string(),
  state: state,
  learnerIds: z.array(z.string()),
})
