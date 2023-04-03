import { z } from 'zod'
import {
  actor,
  actorInclude,
  group,
  actorFromPrisma,
  groupFromPrisma,
  actorSelect,
} from './actor'
import { languageTag, extensions, recordToPrismaArray } from '.'
import { Actor, Context, Prisma, XapiAccount } from '@prisma/client'

import { objectInclude, objectSelect } from './object'

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
                if (!Array.isArray(value)) {
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
    extensions: context.extensions
      ? recordToPrismaArray(context.extensions)
      : undefined,
  }
  return prismaStatment
}

export const contextFromPrisma = (
  prismacontext: Context & {
    object?: Object | undefined
    instructor?: Actor | undefined
    team?:
      | (Actor & {
          account?: XapiAccount | undefined
          member?: (Actor & {
            account?: XapiAccount | undefined
          })[]
        })
      | undefined
  }
): contextType => {
  const contextObject: contextType = {
    ...prismacontext,
    instructor: prismacontext.instructor
      ? actorFromPrisma(prismacontext.instructor)
      : undefined,
    team: prismacontext.team ? groupFromPrisma(prismacontext.team) : undefined,
    revision:
      prismacontext.revision === null ? undefined : prismacontext.revision,
    platform:
      prismacontext.platform === null ? undefined : prismacontext.platform,
    language:
      prismacontext.language === null ? undefined : prismacontext.language,
    statement: prismacontext.statementId,
  }
  const result = context.safeParse(contextObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid context')
  }
  return result.data
}

export const contextInclude: Prisma.ContextInclude = {
  instructor: { include: actorInclude },
  team: { include: actorInclude },
  contextActivities: {
    include: {
      value: {
        include: {
          object: { include: objectInclude },
        },
      },
    },
  },
}

export const contextSelect: Prisma.ContextSelect = {
  registration: true,
  revision: true,
  platform: true,
  language: true,
  statementId: true,
  extensions: true,
  instructor: { select: actorSelect },
  team: { select: actorSelect },
  contextActivities: {
    select: {
      value: {
        select: {
          object: { select: objectSelect },
        },
      },
    },
  },
}
