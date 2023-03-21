import { z } from 'zod'
import Resource from './resource'
import ReportLevel from './reportLevel'
import Learner from './learner'
import { group } from './group'
import Context from './context'
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
  context: Context,
  reportLevels: z.array(ReportLevel),
  resources: z.array(Resource),
  topics: z.array(topic),
  learners: z.array(Learner),
  groups: z.array(group),
  vis: Vis,
  configprops: configProps,
  logs: z.array(z.any()),
  ownBadges: z.array(z.any()),
  rmcCount: rmcCount,
})
