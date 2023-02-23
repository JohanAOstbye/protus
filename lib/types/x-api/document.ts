import { z } from 'zod'
import { Document } from '.prisma/client'

export const document = z.object({
  id: z.string().uuid(),
  updated: z.string().datetime().default(new Date().toISOString()),
  contents: z.any().transform((val) => JSON.stringify(val)),
})

export type documentType = z.infer<typeof document>

export const mergeDocuments = (doc1: any, doc2: any) => {
  return { ...doc1, ...doc2 }
}

export const createEtag = (document: Document) => {
  return `${document.registration}-${document.timestamp}`
}

export const decodeEtag = (etag: string) => {
  const [registration, timestamp] = etag.split('-')
  return { registration, timestamp }
}
