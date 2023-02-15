import { z } from 'zod'
import { verb, verbToPrisma } from './verb'
import { actor, actorToPrisma, actorType } from './actor'
import { object, objectToPrisma } from './object'
import { context, contextToPrisma } from './context'
import { result, resultToPrisma } from './result'
import { authority, authorityToPrisma } from './authority'
import { attachment, attachmentsToPrisma } from './attachments'
import { Prisma } from '@prisma/client'
import { Session } from 'next-auth'

export const IRI = z.string().url()
export const IRL = z.string().url()

export const languageTag = z.string() //TODO: restrict to the correct codes
export const languageMap = z.map(languageTag, z.string())

export const extensions = z.map(z.string(), z.any())

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
  authority: actorType,
  user?: Session['user']
) => {
  const prismaStatment: Prisma.StatementCreateInput = {
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
          attachmentsToPrisma(attachment)
        )
      : undefined,
  }
  return prismaStatment
}

export const mapToArray = (map: Map<string, any>) => {
  return Array.from(map, ([key, value]) => ({ key, value }))
}
