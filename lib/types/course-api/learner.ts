import { z } from 'zod'
import { state } from './state'

const learner = z.object({
  id: z.string(),
  name: z.string(),
  isHidden: z.boolean(),
  state: state,
  preferences: z.array(z.any()),
})

export default learner
