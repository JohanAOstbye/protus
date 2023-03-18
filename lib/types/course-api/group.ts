import { z } from "zod";
import State from './state'


const group = z.object({
    name: z.string(),
    state: State,
    learnerIds: z.array(z.string()),
})

export default group