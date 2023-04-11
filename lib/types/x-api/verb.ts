import { Prisma, Verb } from '@prisma/client'
import { z } from 'zod'
import { IRI, languageMap, recordFromPrismaArray } from '.'

export const verb = z.object({
  id: IRI,
  display: languageMap,
})

export type verbType = z.infer<typeof verb>

export const verbToPrisma = (verb: verbType) => {
  const prismaStatment: Prisma.VerbCreateInput = {
    iri: verb.id,
    display: verb.display,
  }
  return prismaStatment
}

export const verbFromPrisma = (prismaverb: Verb): verbType => {
  const verbObject: verbType = {
    ...prismaverb,
    display: recordFromPrismaArray(prismaverb.display),
  }
  const result = verb.safeParse(verbObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid verb')
  }
  return result.data
}

export const verbSelect: Prisma.VerbSelect = {
  iri: true,
  display: true,
}
