import { z } from "zod";
import State from './state'



const learner = z.object({
    id: z.string(),
    name: z.string(),
    isHidden: z.boolean(),
    state: State,
    preferences: z.array(z.any()),
})

export default learner