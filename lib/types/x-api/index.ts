import { z } from 'zod'
import ISO6391 from 'iso-639-1'
import { IRI as iri } from 'iri'
import { Prisma } from '.prisma/client'

export const IRL = z.string().refine(
  (str) => {
    let IRL = new iri(str)
    return (
      IRL.scheme() === 'http' || IRL.scheme() === 'https' || IRL.isAbsolute()
    )
  },
  {
    message: 'an IRL must be absolute',
    path: ['IRL'],
  }
)
export const IRI = z.string().refine((str) => new iri(str).isAbsolute(), {
  message: 'an IRI must be absolute',
  path: ['IRI'],
})

export const languageTag = z.string().refine(
  (tag) => ISO6391.validate(tag),
  (tag) => ({
    message: `${tag} is not a valid iso-639-1 language tag`,
    path: ['languageTag'],
  })
)
export const languageMap = z.record(languageTag, z.string())

export const extensions = z.record(z.string(), z.any())

export const recordToPrismaArray = (record: Record<string, any>) => {
  return Object.keys(record).map((key) => {
    return {
      key,
      value: JSON.stringify(record[key]),
    }
  })
}

export const recordFromPrismaArray = (
  array: {
    key: string
    value: string
  }[]
) => {
  let record: Record<string, any> = {}
  array.forEach((item) => (record[item.key] = JSON.parse(item.value)))
  return record
}

export type withIdRequired<T> = T & { id: string }
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never
