import { z } from "zod";
import Resource from "./resource"
import ReportLevel from "./reportLevel"
import Topic from './topic'
import Learner from "./learner"
import Group from "./group"
import Context from "./context"
import Vis from "./vis"



const configProps = z.record(z.string(), z.boolean().or(z.string()).or(z.number()))

const rmcCount = z.object({})

export const response = z.object({
    version: z.string(),
    context: Context,
    reportLevels: z.array(ReportLevel),
    resources: z.array(Resource),
    topics: z.array(Topic),
    learners: z.array(Learner),
    groups: z.array(Group),
    vis: Vis,
    configprops: configProps,
    logs: z.array(z.any()),
    ownBadges: z.array(z.any()),
    rmcCount: rmcCount,
})