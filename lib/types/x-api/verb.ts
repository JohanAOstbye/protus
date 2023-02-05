import { z } from 'zod'
import { IRI, languageMap } from '.'

export const verb = z.object({
  id: IRI,
  display: languageMap,
})

export type verbType = z.infer<typeof verb>
