import { z } from "zod";

const reportLevel = z.object({
    id: z.string(),
    name: z.string()
})

export default reportLevel