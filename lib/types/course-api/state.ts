import { z } from 'zod'

export const overall = z.object({
  k: z.number(),
  p: z.number(),
})

export const values = z.object({
  k: z.number(),
  p: z.number(),
  a: z.number().optional(),
  s: z.number().optional(),
  t: z.number().optional(),
  n: z.number().optional(),
})

export const chapterActivitiesState = z
  .object({
    Examples: z
      .record(z.string(), z.object({ values: values }))
      .transform((value) =>
        Object.keys(value).map((key) => {
          return { name: key, ...value[key] }
        })
      ),
    Challenges: z
      .record(z.string(), z.object({ values: values }))
      .transform((value) =>
        Object.keys(value).map((key) => {
          return { name: key, ...value[key] }
        })
      ),
    Coding: z
      .record(z.string(), z.object({ values: values }))
      .transform((value) =>
        Object.keys(value).map((key) => {
          return { name: key, ...value[key] }
        })
      ),
  })
  .transform((cas) => {
    return { ...cas.Challenges, ...cas.Coding, ...cas.Examples }
  })

export const topic = z.object({
  values: z.object({
    Examples: values,
    Challenges: values,
    Coding: values,
  }),
  overall: overall,
})

export const state = z
  .object({
    topics: z.record(z.string(), topic).transform((value) =>
      Object.keys(value).map((key) => {
        return { name: key, ...value[key] }
      })
    ),
    activities: z
      .record(z.string(), chapterActivitiesState)
      .transform((value) =>
        Object.keys(value).map((key) => {
          return { name: key, ...value[key] }
        })
      ),
  })
  .transform((state) => {
    return state.topics.map((topic) => {
      return {
        name: topic.name,
        state: topic.overall,
        example: topic.values.Examples,
        challenges: topic.values.Examples,
        exercise: topic.values.Coding,
        activities: state.activities.find(
          (activities) => activities.name === topic.name
        ),
      }
    })
  })
