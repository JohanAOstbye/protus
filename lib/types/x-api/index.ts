import { z } from 'zod'
import { verb } from './verb'
import { actor } from './actor'
import { object } from './object'
import { context } from './context'
import { result } from './result'
import { authority } from './authority'
import { attachments } from './attachments'

export const IRI = z.string().url()
export const IRL = z.string().url()

export const languageTag = z.string() //TODO: restrict to the correct codes
export const languageMap = z.map(languageTag, z.string())

export const extensions = z.map(z.string(), z.any())

export const statement = z.object({
  actor: actor,
  verb: verb,
  object: object,
  result: result.optional(),
  context: context.optional(),
  timestamp: z.string().datetime().optional(),
  stored: z.string().datetime().optional(),
  authority: authority.optional(),
  version: z.string().default('1.0.0').optional(),
  attachments: attachments.optional(),
})
