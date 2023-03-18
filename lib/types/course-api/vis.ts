import { z } from "zod";

const paramGroup = z.record(z.string(), z.boolean().or(z.string())).transform(record => Object.keys(record).map((key) => {
    return {
        key,
        value: record[key],
    }
}))

const user = z.object({})

const color = z.object({
    binCount: z.number(),
    value2color: z.string()
})

const params = z.object({
    group: paramGroup,
    user: user,
})

const ui = z.object({
    params: params
})

const vis = z.object({
    topicSizeAttr: z.array(z.string()),
    color: color,
    userManual: z.string(),
    ui: ui,
})

export default vis