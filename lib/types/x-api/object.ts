import { z } from 'zod'
import { verb, verbFromPrisma, verbSelect } from './verb'
import {
  actor,
  actorFromPrisma,
  actorSelect,
  actorToPrisma,
  agent,
  agentFromPrisma,
  group,
  groupFromPrisma,
  inverseFunctionalIdentifier,
} from './actor'
import { IRI, languageMap, recordFromPrismaArray, recordToPrismaArray } from '.'
import { Actor, Prisma, Verb, Object } from '@prisma/client'

const objectBase = z.object({
  mongoid: z.string().uuid().optional(),
})

const definition = z.object({
  name: languageMap.optional(),
  description: languageMap.optional(),
  type: IRI.optional(),
  moreInfo: IRI.optional(),
  extensions: z.map(IRI.or(z.string()), z.unknown()).optional(),
})

export const interactionTypes = z.enum([
  'true-false',
  'choice',
  'fill-in',
  'long-fill-in',
  'matching',
  'performance',
  'sequencing',
  'likert',
  'numeric',
  'other',
])

export const interactionDefinition = z
  .object({
    name: languageMap.optional(),
    description: languageMap.optional(),
    type: IRI.optional(),
    moreInfo: IRI.optional(),
    extensions: z.record(IRI.or(z.string()), z.unknown()).optional(),
    interactionType: interactionTypes
      .transform((value) => {
        switch (value) {
          case 'true-false':
            return 'trueFalse'
          case 'fill-in':
            return 'fillIn'
          case 'long-fill-in':
            return 'longFillIn'
          default:
            return value
        }
      })
      .optional(),
    correctResponsesPattern: z.array(z.string()).optional(),
    choices: z.array(z.string()).optional(),
    scale: z.array(z.string()).optional(),
    source: z
      .array(z.object({ id: z.string(), description: languageMap }))
      .optional(),
    target: z
      .array(z.object({ id: z.string(), description: languageMap }))
      .optional(),
    steps: z
      .array(z.object({ id: z.string(), description: languageMap }))
      .optional(),
  })

  .refine((data) => {
    let keys = Object.keys(data)
    let interactionComponentLists = [
      'choices',
      'scale',
      'source',
      'target',
      'steps',
    ]
    return (
      interactionComponentLists.filter((key) => keys.includes(key)).length <= 1
    )
  })

export const activityObject = objectBase.extend({
  id: IRI,
  objectType: z.literal('Activity'),
  definition: interactionDefinition.or(definition).optional(),
})

const statementObject = objectBase.extend({
  objectType: z.literal('StatementRef'),
  id: z.string().uuid(),
})

const agentObject = objectBase
  .extend({
    objectType: z.literal('Agent'),
  })
  .and(agent)

const groupObject = objectBase
  .extend({
    objectType: z.literal('Group'),
  })
  .and(group)

const nestedObject = activityObject
  .or(statementObject)
  .or(agentObject)
  .or(groupObject)
const subStatementObject = z.object({
  objectType: z.literal('SubStatement'),
  actor: actor,
  verb: verb,
  object: nestedObject,
})

export const object = activityObject
  .or(statementObject)
  .or(subStatementObject)
  .or(agentObject)
  .or(groupObject)

export type objectType = z.infer<typeof object>

export const nestedobjectToPrisma = (object: objectType) => {
  let prismaObject: Prisma.ObjectCreateInput
  if (object.objectType == 'StatementRef') {
    prismaObject = {
      objectType: 'StatementRef',
      statement: {
        connect: {
          id: object.id,
        },
      },
    }
  } else {
    prismaObject = {
      objectType: 'Activity',
    }
  }
  return prismaObject
}

export const objectToPrisma = (object: objectType) => {
  let prismaObject: Prisma.ObjectCreateInput
  if (object.objectType == 'StatementRef') {
    prismaObject = {
      objectType: 'StatementRef',
      statement: {
        connect: {
          id: object.id,
        },
      },
    }
  } else if (object.objectType == 'SubStatement') {
    prismaObject = {
      objectType: object.objectType,
      actor: {
        connectOrCreate: {
          create: actorToPrisma(object.actor),
          where: {
            id: object.actor.id,
          },
        },
      },
      object: object.object
        ? {
            connectOrCreate: {
              create: nestedobjectToPrisma(object.object),
              where:
                object.object.objectType == 'Activity'
                  ? { id: object.object.id }
                  : {},
            },
          }
        : undefined,
      verb: object.verb
        ? {
            connect: {
              id: object.verb.id,
            },
          }
        : undefined,
    }
  } else if (object.objectType == 'Agent') {
    prismaObject = {
      objectType: 'Agent',
      objectActor: {
        connectOrCreate: {
          create: actorToPrisma(object),
          where: inverseFunctionalIdentifier.parse(object),
        },
      },
    }
  } else if (object.objectType == 'Group') {
    prismaObject = {
      objectType: 'Group',
      objectActor: {
        connectOrCreate: {
          create: actorToPrisma(object),
          where: inverseFunctionalIdentifier.parse(object),
        },
      },
    }
  } else {
    const def = interactionDefinition.safeParse(object.definition)
    if (def.success) {
      prismaObject = {
        objectType: 'Activity',
        id: object.id,
        definition: object.definition
          ? {
              name: object.definition.name
                ? recordToPrismaArray(object.definition.name)
                : undefined,
              description: object.definition.description
                ? recordToPrismaArray(object.definition.description)
                : undefined,
              type: object.definition.type ? object.definition.type : undefined,
              moreInfo: object.definition.moreInfo
                ? object.definition.moreInfo
                : undefined,
              extensions: object.definition.extensions
                ? recordToPrismaArray(object.definition.extensions)
                : undefined,
              interactionType: def.data.interactionType
                ? def.data.interactionType
                : undefined,
              correctResponsesPattern: def.data.correctResponsesPattern
                ? def.data.correctResponsesPattern
                : undefined,
              choices: def.data.choices ? def.data.choices : undefined,
              scale: def.data.scale ? def.data.scale : undefined,
              source: def.data.source
                ? def.data.source.map(
                    (value: { id: any; description: Record<string, any> }) => {
                      return {
                        id: value.id,
                        description: recordToPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
              target: def.data.target
                ? def.data.target.map(
                    (value: { id: any; description: Record<string, any> }) => {
                      return {
                        id: value.id,
                        description: recordToPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
              steps: def.data.steps
                ? def.data.steps.map(
                    (value: { id: any; description: Record<string, any> }) => {
                      return {
                        id: value.id,
                        description: recordToPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
            }
          : undefined,
      }
    } else {
      prismaObject = {
        objectType: 'Activity',
        id: object.id,
        definition: object.definition
          ? {
              name: object.definition.name
                ? recordToPrismaArray(object.definition.name)
                : undefined,
              description: object.definition.description
                ? recordToPrismaArray(object.definition.description)
                : undefined,
              type: object.definition.type ? object.definition.type : undefined,
              moreInfo: object.definition.moreInfo
                ? object.definition.moreInfo
                : undefined,
              extensions: object.definition.extensions
                ? recordToPrismaArray(object.definition.extensions)
                : undefined,
            }
          : undefined,
      }
    }
  }
  return prismaObject
}

export const objectFromPrisma = (
  prismaobject: Omit<Object, 'mongoid'> & {
    mongoid?: string | undefined
    actor?: Actor | undefined
    verb?: Verb | undefined
    object?:
      | (Object & {
          objectActor?: Actor | undefined
        })
      | undefined
    objectActor?: Actor | undefined
  }
): objectType => {
  let objectObject: objectType
  if (prismaobject.objectType == 'StatementRef') {
    if (prismaobject.statementId == null)
      throw new Error('StatementRef has no statement')
    objectObject = {
      objectType: 'StatementRef',
      id: prismaobject.statementId,
    }
  } else if (prismaobject.objectType == 'Agent') {
    if (prismaobject.objectActor == null)
      throw new Error('StatementRef has no statement')
    objectObject = {
      ...agentFromPrisma(prismaobject.objectActor),
      objectType: 'Agent',
    }
  } else if (prismaobject.objectType == 'Group') {
    if (prismaobject.objectActor == null)
      throw new Error('StatementRef has no statement')
    objectObject = {
      ...groupFromPrisma(prismaobject.objectActor),
    }
  } else if (prismaobject.objectType == 'SubStatement') {
    if (prismaobject.actorId == null || prismaobject.actor == null)
      throw new Error('SubStatement has no actor')
    if (prismaobject.verbId == null || prismaobject.verb == null)
      throw new Error('SubStatement has no verb')
    if (prismaobject.objectId == null || prismaobject.object == null)
      throw new Error('SubStatement has no object')
    if (
      prismaobject.object.objectType == 'StatementRef' &&
      prismaobject.object.statementId == null
    )
      throw new Error('SubStatement has no statement')
    if (prismaobject.object.objectType == 'SubStatement')
      throw new Error('SubStatement cannot contain a SubStatement')

    objectObject = {
      objectType: 'SubStatement',
      actor: actorFromPrisma(prismaobject.actor),
      verb: verbFromPrisma(prismaobject.verb),
      object: nestedObjectFromPrisma(prismaobject.object),
    }
  } else {
    if (prismaobject.id == null) throw new Error('activity has no ID')
    objectObject = {
      objectType: 'Activity',
      id: prismaobject.id,
      definition: prismaobject.definition
        ? {
            name: prismaobject.definition.name
              ? recordFromPrismaArray(prismaobject.definition.name)
              : undefined,
            description: prismaobject.definition.description
              ? recordFromPrismaArray(prismaobject.definition.description)
              : undefined,
            type:
              prismaobject.definition.type == null
                ? undefined
                : prismaobject.definition.type,
            moreInfo:
              prismaobject.definition.moreInfo == null
                ? undefined
                : prismaobject.definition.moreInfo,
            extensions:
              prismaobject.definition.extensions.length > 0
                ? recordFromPrismaArray(prismaobject.definition.extensions)
                : undefined,
            interactionType:
              prismaobject.definition.interactionType == null
                ? undefined
                : prismaobject.definition.interactionType,
            correctResponsesPattern:
              prismaobject.definition.correctResponsesPattern,
            choices: prismaobject.definition.choices,
            scale: prismaobject.definition.scale,
            source:
              prismaobject.definition.source.length > 0
                ? prismaobject.definition.source.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
            target:
              prismaobject.definition.target.length > 0
                ? prismaobject.definition.target.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
            steps:
              prismaobject.definition.steps.length > 0
                ? prismaobject.definition.steps.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
          }
        : undefined,
    }
  }

  const result = object.safeParse(objectObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid object')
  }
  return result.data
}

export const nestedObjectFromPrisma = (
  prismaobject: Object & {
    objectActor?: Actor | undefined
  }
): z.infer<typeof nestedObject> => {
  if (prismaobject.objectType == 'SubStatement')
    throw new Error('SubStatement not allowed in SubStatement')
  let objectObject: objectType
  if (prismaobject.objectType == 'StatementRef') {
    if (prismaobject.statementId == null)
      throw new Error('StatementRef has no statement')
    objectObject = {
      objectType: 'StatementRef',
      id: prismaobject.statementId,
    }
  } else if (prismaobject.objectType == 'Agent') {
    if (prismaobject.objectActor == null)
      throw new Error('ActorObject has no actor')
    objectObject = {
      ...agentFromPrisma(prismaobject.objectActor),
      objectType: 'Agent',
    }
  } else if (prismaobject.objectType == 'Group') {
    if (prismaobject.objectActor == null)
      throw new Error('GroupObject has no group')
    objectObject = {
      ...groupFromPrisma(prismaobject.objectActor),
    }
  } else {
    if (prismaobject.id == null) throw new Error('activity has no ID')
    objectObject = {
      objectType: 'Activity',
      id: prismaobject.id,
      definition: prismaobject.definition
        ? {
            name: prismaobject.definition.name
              ? recordFromPrismaArray(prismaobject.definition.name)
              : undefined,
            description: prismaobject.definition.description
              ? recordFromPrismaArray(prismaobject.definition.description)
              : undefined,
            type:
              prismaobject.definition.type == null
                ? undefined
                : prismaobject.definition.type,
            moreInfo:
              prismaobject.definition.moreInfo == null
                ? undefined
                : prismaobject.definition.moreInfo,
            extensions:
              prismaobject.definition.extensions.length > 0
                ? recordFromPrismaArray(prismaobject.definition.extensions)
                : undefined,
            interactionType:
              prismaobject.definition.interactionType == null
                ? undefined
                : prismaobject.definition.interactionType,
            correctResponsesPattern:
              prismaobject.definition.correctResponsesPattern,
            choices: prismaobject.definition.choices,
            scale: prismaobject.definition.scale,
            source:
              prismaobject.definition.source.length > 0
                ? prismaobject.definition.source.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
            target:
              prismaobject.definition.target.length > 0
                ? prismaobject.definition.target.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
            steps:
              prismaobject.definition.steps.length > 0
                ? prismaobject.definition.steps.map(
                    (value: {
                      id: any
                      description: { key: string; value: string }[]
                    }) => {
                      return {
                        id: value.id,
                        description: recordFromPrismaArray(value.description),
                      }
                    }
                  )
                : undefined,
          }
        : undefined,
    }
  }

  const result = nestedObject.safeParse(objectObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid object')
  }
  return result.data
}

export const objectInclude: Prisma.ObjectInclude = {
  objectActor: true,
  actor: true,
  verb: true,
  object: true,
}

export const objectSelect: Prisma.ObjectSelect = {
  mongoid: true,
  id: true,
  objectType: true,
  statementId: true,
  objectActor: {
    select: actorSelect,
  },
  actor: {
    select: actorSelect,
  },
  verb: {
    select: verbSelect,
  },
  object: {
    select: {
      mongoid: true,
      id: true,
      objectType: true,
      statementId: true,
      objectActor: {
        select: actorSelect,
      },
      definition: {
        select: {
          name: {
            select: {
              key: true,
              value: true,
            },
          },
          description: {
            select: {
              key: true,
              value: true,
            },
          },
          type: true,
          moreInfo: true,
          extensions: {
            select: {
              key: true,
              value: true,
            },
          },
          interactionType: true,
          correctResponsesPattern: true,
          choices: true,
          scale: true,
          source: {
            select: {
              id: true,
              description: {
                select: {
                  key: true,
                  value: true,
                },
              },
            },
          },
          target: {
            select: {
              id: true,
              description: {
                select: {
                  key: true,
                  value: true,
                },
              },
            },
          },
          steps: {
            select: {
              id: true,
              description: {
                select: {
                  key: true,
                  value: true,
                },
              },
            },
          },
        },
      },
    },
  },
  definition: {
    select: {
      name: {
        select: {
          key: true,
          value: true,
        },
      },
      description: {
        select: {
          key: true,
          value: true,
        },
      },
      type: true,
      moreInfo: true,
      extensions: {
        select: {
          key: true,
          value: true,
        },
      },
      interactionType: true,
      correctResponsesPattern: true,
      choices: true,
      scale: true,
      source: {
        select: {
          id: true,
          description: {
            select: {
              key: true,
              value: true,
            },
          },
        },
      },
      target: {
        select: {
          id: true,
          description: {
            select: {
              key: true,
              value: true,
            },
          },
        },
      },
      steps: {
        select: {
          id: true,
          description: {
            select: {
              key: true,
              value: true,
            },
          },
        },
      },
    },
  },
}
