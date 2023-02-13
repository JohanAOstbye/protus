import { Prisma } from '@prisma/client'
import { Session } from 'next-auth'
import { z } from 'zod'
import { IRI, languageMap, mapToArray } from '.'

export const verb = z.object({
  id: IRI,
  display: languageMap,
})

export type verbType = z.infer<typeof verb>

export const verbToPrisma = (verb: verbType) => {
  const prismaStatment: Prisma.VerbCreateInput = {
    iri: verb.id,
    display: mapToArray(verb.display),
  }
  return prismaStatment
}
