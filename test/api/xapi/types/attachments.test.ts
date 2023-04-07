import { attachment, internetMediaType } from 'lib/types/x-api/attachments'

describe('Type - Statment - Attachments', () => {
  test('internett mediatypes', async () => {
    const malformed = ['fail', 'not.a.mediatype', 'apploc']
    const correct = [
      'application/json',
      'application/xml',
      'text/html',
      'text/plain',
      'text/csv',
    ]
    malformed.forEach((url) => {
      expect(internetMediaType.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(internetMediaType.safeParse(url).success).toBe(true)
    })
  })

  test('attachment', async () => {
    const malformed = [
      {
        usageType: 'fail',
        display: { en: 'English' },
        description: { en: 'English' },
        contentType: 'application/json',
        length: 2,
        sha2: 'test',
        fileUrl: 'http://example.com',
      },
      {
        display: { en: 'English' },
        description: { en: 'English' },
        contentType: 'application/json',
        length: 2,
        sha2: 'test',
        fileUrl: 'http://example.com',
      },
      {
        usageType: 'file://example.com',
        display: { en: 'English' },
        description: { en: 'English' },
        length: 2,
        sha2: 'test',
        fileUrl: 'http://example.com',
      },
      {
        usageType: 'file://example.com',
        display: { en: 'English' },
        description: { en: 'English' },
        contentType: 'application/json',
        length: 2,
        sha2: 'test',
      },
      {
        usageType: 'file://example.com',
        display: { en: 'English' },
        description: { en: 'English' },
        contentType: 'application/json',
        length: 2,
        fileUrl: 'http://example.com',
      },
    ]
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
    ]
    malformed.forEach((url) => {
      expect(attachment.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(attachment.safeParse(url).success).toBe(true)
    })
  })
})
