import { attachment, attachmentToPrisma } from 'lib/types/x-api/attachments'
import { z } from 'zod'

describe('Conversion - Statment - Attachments', () => {
  test('attachment', async () => {
    const correct = [
      {
        usageType: 'file://example.com',
        display: { en: 'English' },
        description: { en: 'English' },
        contentType: 'application/json',
        length: 2,
        sha2: 'test',
        fileUrl: 'http://example.com',
      },
    ] as z.infer<typeof attachment>[]

    correct.forEach((value) => {
      expect(() => {
        attachmentToPrisma(value)
      }).not.toThrowError()
    })
  })
})
