import { z } from 'zod'
import { IRI, IRL, languageMap } from '.'

const internetMediaType = z.object({})

export const attachments = z.object({
  usageType: IRI,
  display: languageMap,
  description: languageMap,
  contentType: internetMediaType,
  length: z.number(),
  sha2: z.string(),
  fileUrl: IRL,
})
