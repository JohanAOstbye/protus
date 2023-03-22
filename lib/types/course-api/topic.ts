import { z } from 'zod'

const timeline = z.object({
  covered: z.boolean(),
  current: z.boolean(),
})

const activity = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  kcs: z.array(z.any()),
})

const activities = z.object({
  Examples: z.array(activity).optional(),
  Challenges: z.array(activity).optional(),
  Coding: z.array(activity).optional(),
})

export const topic = z.object({
  id: z.string(),
  name: z.string(),
  difficulty: z.number(),
  importance: z.number(),
  order: z.number(),
  concepts: z.array(z.any()),
  isVisible: z.boolean(),
  timeline: timeline,
  activities: activities,
})

export type activityType = z.infer<typeof activity>
