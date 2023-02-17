import { Attachment, Prisma } from '@prisma/client'
import { z } from 'zod'
import {
  IRI,
  IRL,
  languageMap,
  recordFromPrismaArray,
  recordToPrismaArray,
} from '.'

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

export const attachmentToPrisma = (attachment: attachmentType) => {
  const prismaAttachment: Prisma.AttachmentCreateInput = {
    usageType: attachment.usageType,
    contentType: `${attachment.contentType}`,
    length: attachment.length,
    sha2: attachment.sha2,
    fileUrl: attachment.fileUrl,
    display: recordToPrismaArray(attachment.display),
    description: recordToPrismaArray(attachment.description),
  }
  return prismaAttachment
}

export const attachmentFromPrisma = (
  prismaAttachment: Attachment
): attachmentType => {
  const attachmentObject: attachmentType = {
    ...prismaAttachment,
    display: recordFromPrismaArray(prismaAttachment.display),
    description: recordFromPrismaArray(prismaAttachment.description),
  }
  const result = attachment.safeParse(attachmentObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid attachment')
  }
  return result.data
}

export const attachmentSelect: Prisma.AttachmentSelect = {
  usageType: true,
  display: true,
  description: true,
  contentType: true,
  length: true,
  sha2: true,
  fileUrl: true,
}
