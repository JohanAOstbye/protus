import { z } from 'zod'
import { verb } from './verb'
import { actor, actorToPrisma } from './actor'
import { IRI, languageMap, mapToArray, statement } from '.'
import { Prisma } from '@prisma/client'

const objectBase = z.object({})

const definition = z.object({
  name: languageMap.optional(),
  description: languageMap.optional(),
  type: IRI.optional(),
  moreInfo: IRI.optional(),
  extensions: z.map(IRI.or(z.string()), z.unknown()).optional(),
})

export const interactionDefinition = definition
  .merge(
    z.object({
      interactionType: z
        .enum([
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
        }),
      correctResponsesPattern: z.array(z.string()),

      choices: z.array(z.string()),
      scale: z.array(z.string()),
      source: z.array(z.object({ id: z.string(), description: languageMap })),
      target: z.array(z.object({ id: z.string(), description: languageMap })),
      steps: z.array(z.object({ id: z.string(), description: languageMap })),
    })
  )
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
  definition: interactionDefinition.optional(),
})

const statementObject = objectBase.extend({
  objectType: z.literal('StatementRef'),
  id: z.string().uuid(),
})

const subStatementObject = z.object({
  objectType: z.literal('SubStatement'),
  actor: actor,
  verb: verb,
  object: activityObject.or(statementObject),
})

export const object = activityObject.or(statementObject).or(subStatementObject)

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
  } else {
    prismaObject = {
      objectType: 'Activity',
      id: object.id,
      definition: object.definition
        ? {
            name: object.definition.name
              ? mapToArray(object.definition.name)
              : undefined,
            description: object.definition.description
              ? mapToArray(object.definition.description)
              : undefined,
            type: object.definition.type ? object.definition.type : undefined,
            moreInfo: object.definition.moreInfo
              ? object.definition.moreInfo
              : undefined,
            extensions: object.definition.extensions
              ? mapToArray(object.definition.extensions)
              : undefined,
            interactionType: object.definition.interactionType
              ? object.definition.interactionType
              : undefined,
            correctResponsesPattern: object.definition.correctResponsesPattern
              ? object.definition.correctResponsesPattern
              : undefined,
            choices: object.definition.choices
              ? object.definition.choices
              : undefined,
            scale: object.definition.scale
              ? object.definition.scale
              : undefined,
            source: object.definition.source
              ? object.definition.source.map((value) => {
                  return {
                    id: value.id,
                    description: mapToArray(value.description),
                  }
                })
              : undefined,
            target: object.definition.target
              ? object.definition.target.map((value) => {
                  return {
                    id: value.id,
                    description: mapToArray(value.description),
                  }
                })
              : undefined,
            steps: object.definition.steps
              ? object.definition.steps.map((value) => {
                  return {
                    id: value.id,
                    description: mapToArray(value.description),
                  }
                })
              : undefined,
          }
        : undefined,
    }
  }
  return prismaObject
}
