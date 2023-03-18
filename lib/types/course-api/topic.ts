import { z } from "zod";

const timeline = z.object({
    covered: z.boolean(),
    current: z.boolean(),
})

const activityCategory = z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
    kcs: z.array(z.any())
})

const activities = z.object({
    examples: z.array(activityCategory),
    challenges: z.array(activityCategory),
    coding: z.array(activityCategory)
})

const topic = z.object({
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

export default topic