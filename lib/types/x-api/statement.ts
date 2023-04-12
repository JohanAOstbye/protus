import {
  Prisma,
  Statement,
  Actor,
  XapiAccount,
  Verb,
  Object,
  Context,
} from '@prisma/client'
import { Session } from 'next-auth'

import { z } from 'zod'
import {
  actor,
  actorType,
  actorToPrisma,
  actorFromPrisma,
  actorInclude,
  actorSelect,
} from './actor'
import {
  attachment,
  attachmentToPrisma,
  attachmentFromPrisma,
  attachmentSelect,
} from './attachments'
import {
  authority,
  authorityFromPrisma,
  authorityToPrisma,
  authorityType,
} from './authority'
import {
  context,
  contextToPrisma,
  contextFromPrisma,
  contextInclude,
  contextSelect,
} from './context'
import {
  object,
  objectToPrisma,
  objectFromPrisma,
  objectSelect,
} from './object'
import {
  result,
  resultToPrisma,
  resultFromPrisma,
  resultSelect,
} from './result'
import { verb, verbToPrisma, verbFromPrisma, verbSelect } from './verb'

export const statement = z.object({
  id: z.string().uuid().optional(),
  actor: actor,
  verb: verb,
  object: object,
  result: result.optional(),
  context: context.optional(),
  timestamp: z.string().datetime().optional(),
  stored: z.string().datetime().optional(),
  authority: authority.optional(),
  version: z.string().default('1.0.0').optional(),
  attachments: z.array(attachment).optional(),
})

export type statementType = z.infer<typeof statement>

export const statementToPrisma = (
  statement: statementType,
  authority: authorityType,
  user?: Session['user']
) => {
  const prismaStatment: Prisma.StatementCreateInput = {
    id: statement.id,
    actor: {
      connectOrCreate: {
        where: {
          id: statement.actor.id,
        },
        create: actorToPrisma({
          ...statement.actor,
          userId: user ? user.id : undefined,
        }),
      },
    },
    verb: {
      connectOrCreate: {
        where: {
          id: statement.verb.id,
        },
        create: verbToPrisma(statement.verb),
      },
    },
    object: {
      connectOrCreate: {
        where:
          statement.object.objectType == 'Activity'
            ? {
                id: statement.object.id,
              }
            : {},
        create: objectToPrisma(statement.object),
      },
    },
    result: statement.result ? resultToPrisma(statement.result) : undefined,
    context: statement.result
      ? { create: contextToPrisma(statement.result) }
      : undefined,

    authority: statement.authority
      ? authorityToPrisma(statement.authority)
      : authorityToPrisma(authority),
    version: statement.version,
    attachments: statement.attachments
      ? statement.attachments.map((attachment) =>
          attachmentToPrisma(attachment)
        )
      : undefined,
  }
  return prismaStatment
}

export type PrismaStatement = Statement & {
  object?: Object | undefined
  actor?:
    | Actor
    | (Actor & {
        account?: XapiAccount | undefined
      })
    | undefined
  verb?: Verb | undefined
  context?: Context | null | undefined
  authority?:
    | Actor
    | (Actor & {
        account?: XapiAccount | undefined
      })
    | undefined
  _count?: Prisma.StatementCountOutputType | undefined
  contextref?: Context[] | undefined
  objectref?:
    | (Object & { Statement?: PrismaStatement | undefined })[]
    | undefined
}

export const statementFromPrisma = (
  prismaStatement: PrismaStatement
): statementType => {
  if (
    !prismaStatement.actor ||
    !prismaStatement.verb ||
    !prismaStatement.object
  )
    throw new Error('No actor')
  const statementObject: statementType = {
    ...prismaStatement,
    actor: actorFromPrisma(prismaStatement.actor),
    verb: verbFromPrisma(prismaStatement.verb),
    object: objectFromPrisma(prismaStatement.object),
    context:
      prismaStatement.context && prismaStatement.context !== null
        ? contextFromPrisma(prismaStatement.context)
        : undefined,
    result:
      prismaStatement.result && prismaStatement.result !== null
        ? resultFromPrisma(prismaStatement.result)
        : undefined,
    authority: prismaStatement.authority
      ? authorityFromPrisma(prismaStatement.authority)
      : undefined,
    attachments: prismaStatement.attachments.map((attachment) =>
      attachmentFromPrisma(attachment)
    ),
    timestamp:
      prismaStatement.timestamp === null
        ? undefined
        : prismaStatement.timestamp.toISOString(),
    stored:
      prismaStatement.stored === null
        ? undefined
        : prismaStatement.stored.toISOString(),
    version:
      prismaStatement.version === null ? undefined : prismaStatement.version,
  }
  const result = statement.safeParse(statementObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid statement')
  }
  return result.data
}

export const statementInclude: Prisma.StatementInclude = {
  actor: { include: actorInclude },
  verb: true,
  object: true,
  context: {
    include: contextInclude,
  },
  authority: { include: actorInclude },
}

export function statementSelect(depth: number): Prisma.StatementSelect {
  if (depth === 0) {
    return {
      id: true,
      actor: { select: actorSelect },
      verb: { select: verbSelect },
      object: { select: objectSelect },
      result: { select: resultSelect },
      context: { select: contextSelect },
      timestamp: true,
      stored: true,
      authority: { select: actorSelect },
      version: true,
      attachments: { select: attachmentSelect },
    }
  }
  return {
    id: true,
    actor: { select: actorSelect },
    verb: { select: verbSelect },
    object: { select: objectSelect },
    result: { select: resultSelect },
    context: { select: contextSelect },
    timestamp: true,
    stored: true,
    authority: { select: actorSelect },
    version: true,
    attachments: { select: attachmentSelect },
    objectref: {
      select: {
        Statement: {
          select: statementSelect(depth - 1),
        },
      },
    },
  }
}

export function statementSelectWithoutAttachments(
  depth: number
): Prisma.StatementSelect {
  if (depth === 0) {
    return {
      id: true,
      actor: { select: actorSelect },
      verb: { select: verbSelect },
      object: { select: objectSelect },
      result: { select: resultSelect },
      context: { select: contextSelect },
      timestamp: true,
      stored: true,
      authority: { select: actorSelect },
      version: true,
    }
  }
  return {
    id: true,
    actor: { select: actorSelect },
    verb: { select: verbSelect },
    object: { select: objectSelect },
    result: { select: resultSelect },
    context: { select: contextSelect },
    timestamp: true,
    stored: true,
    authority: { select: actorSelect },
    version: true,
    attachments: { select: attachmentSelect },
    objectref: {
      select: {
        Statement: {
          select: statementSelectWithoutAttachments(depth - 1),
        },
      },
    },
  }
}
