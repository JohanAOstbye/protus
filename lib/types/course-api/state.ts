import { z } from "zod";

const overall = z.object({
    k: z.number(),
    p: z.number(),
})

const values = z.object({
    values: z.object({
        k: z.number(),
        p: z.number(),
        a: z.number().optional(),
        s: z.number().optional(),
        t: z.number().optional(),
        n: z.number().optional(),
    }),
    overall: overall.optional(),
})

const objectValues = z.record(z.string(), z.record(z.string(), values).transform(record => Object.keys(record).map((key) => {
    return {
        key,
        ...record[key],
    }
}))).transform(record => Object.keys(record).map((key) => {
    return {
        key,
        ...record[key],
    }
}))

const chapterActivitiesState = z.object({
    Examples: objectValues,
    Challenges: objectValues,
    Coding: objectValues
})

const state = z.object({
    topics: objectValues,
    activities: z.record(z.string(), chapterActivitiesState).transform(record => Object.keys(record).map((key) => {
        return {
            key,
            ...record[key],
        }
    })),
})

export default state