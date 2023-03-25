import { z } from 'zod'

const dim = z.object({
  w: z.number(),
  h: z.number(),
})

const updateStateOn = z.object({
  done: z.boolean(),
  winClose: z.boolean(),
  winCloseIfAct: z.boolean(),
})

export const resource = z.object({
  id: z.string(),
  name: z.string(),
  dim: dim,
  updateStateOn: updateStateOn,
})
