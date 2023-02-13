import { Prisma } from '@prisma/client'
import { description } from 'lib/sanity/demo.data'
import { z } from 'zod'
import { IRI, IRL, languageMap, mapToArray } from '.'

const internetMediaType = z.object({})

export const attachment = z.object({
  usageType: IRI,
  display: languageMap,
  description: languageMap,
  contentType: internetMediaType,
  length: z.number(),
  sha2: z.string(),
  fileUrl: IRL,
})

export type attachmentType = z.infer<typeof attachment>

export const attachmentsToPrisma = (attachment: attachmentType) => {
  const prismaAttachment: Prisma.AttachmentCreateInput = {
    usageType: attachment.usageType,
    contentType: `${attachment.contentType}`,
    length: attachment.length,
    sha2: attachment.sha2,
    fileUrl: attachment.fileUrl,
    display: mapToArray(attachment.display),
    description: mapToArray(attachment.description),
  }
  return prismaAttachment
}
