import { z } from 'zod'
import { resource } from './resource'
import { reportLevel } from './reportLevel'
import { learner } from './learner'
import { group } from './group'
import { context } from './context'
import Vis from './vis'
import { topic } from './topic'

const configProps = z
  .record(z.string(), z.boolean().or(z.string()).or(z.number()))
  .transform((value) =>
    Object.keys(value).map((key) => {
      return { name: key, value: value[key] }
    })
  )

const rmcCount = z.object({})

export const response = z.object({
  version: z.string(),
  context: context,
  reportLevels: z.array(reportLevel),
  resources: z.array(resource),
  topics: z.array(topic),
  learners: z.array(learner),
  groups: z.array(group),
  vis: Vis,
  configprops: configProps,
  logs: z.array(z.any()),
  ownBadges: z.array(z.any()),
  rmcCount: rmcCount,
})
