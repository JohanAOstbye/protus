import { z } from 'zod'
import { verb } from './verb'
import { actor } from './actor'
import { IRI, languageMap, statement } from '.'

const objectBase = z.object({})

const definition = z.object({
  name: languageMap.optional(),
  description: languageMap.optional(),
  type: IRI.optional(),
  moreInfo: IRI.optional(),
  extensions: z.map(IRI.or(z.string()), z.unknown()).optional(),
})

export const activity = objectBase
  .extend({
    id: IRI,
    objectType: z.literal('Activity'),
    definition: definition.optional().or(
      definition.merge(
        z.object({
          interactionType: z.enum([
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
          ]),
          correctResponsesPattern: z.array(z.string()),

          choices: z.array(z.string()),
          scale: z.array(z.string()),
          source: z.array(
            z.object({ id: z.string(), description: languageMap })
          ),
          target: z.array(
            z.object({ id: z.string(), description: languageMap })
          ),
          steps: z.array(
            z.object({ id: z.string(), description: languageMap })
          ),
        })
      )
    ),
  })
  .refine((data) => {
    let keys = Object.keys(data.definition)
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

const statmentObject = objectBase.extend({
  objectType: z.literal('StatementRef'),
  id: z.string().uuid(),
})

const subStatementObject = z.object({
  objectType: z.literal('SubStatement'),
  actor: actor,
  verb: verb,
})
// TODO: fix extend statment med lazy eller noe annet

export const object = activity.or(statmentObject) //.or(subStatementObject)

export type objectType = z.infer<typeof object>
