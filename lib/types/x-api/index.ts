import { z } from 'zod'

export const IRL = z.string().url()
export const IRI = z.string().refine((str) => true)

export const languageTag = z
  .string()
  .regex(
    /^((?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((?:([A-Za-z]{2,3}(-(?:[A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-(?:[A-Za-z]{4}))?(-(?:[A-Za-z]{2}|[0-9]{3}))?(-(?:[A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-(?:[0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(?:x(-[A-Za-z0-9]{1,8})+))?)|(?:x(-[A-Za-z0-9]{1,8})+))$/gim
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
