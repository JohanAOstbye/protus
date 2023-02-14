import { z } from 'zod'
import { actor, group } from './actor'
import { activityObject } from './object'
import { languageTag, extensions, mapToArray } from '.'
import { Prisma } from '@prisma/client'
import { isArray } from 'sanity'

const contextActivitiesObject = z.map(
  z
    .literal('Parent')
    .or(z.literal('Grouping'))
    .or(z.literal('Category'))
    .or(z.literal('Other')),
  z.object({ id: z.string() }).or(z.array(z.object({ id: z.string() })))
)

export const context = z.object({
  registration: z.string().uuid().optional(),
  instructor: actor.optional(),
  team: group.optional(),
  contextActivities: contextActivitiesObject.optional(),
  revision: z.string().optional(),
  platform: z.string().optional(),
  language: languageTag.optional(),
  statement: z.string().uuid().optional(),
  extensions: extensions.optional(),
})

export type contextType = z.infer<typeof context>

export const contextToPrisma = (context: contextType) => {
  const prismaStatment: Prisma.ContextCreateInput = {
    instructor: context.instructor
      ? { connect: { id: context.instructor.id } }
      : undefined,
    team: context.team ? { connect: { id: context.team.id } } : undefined,
    contextActivities:
      context.contextActivities && context.contextActivities.size > 0
        ? {
            createMany: {
              data: Array.from(context.contextActivities, ([key, value]) => {
                if (!value)
                  return {
                    key: 'skip',
                  }
                if (!isArray(value)) {
                  value = [value]
                }
                return {
                  key,
                }
              }).filter((val) => val.key !== 'skip'),
            },
          }
        : undefined,
    revision: context.revision,
    platform: context.platform,
    language: context.language,
    statement: context.statement
      ? { connect: { id: context.statement } }
      : undefined,
    extensions: context.extensions ? mapToArray(context.extensions) : undefined,
  }
  return prismaStatment
}
