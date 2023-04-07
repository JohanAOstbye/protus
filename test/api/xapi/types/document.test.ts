import { document } from 'lib/types/x-api/document'

describe('Type - Statment - Document', () => {
  test('document', async () => {
    const malformed = [
      //   {
      //     id: 'c5e4a112-795f-4166-9913-8097849767d2',
      //     updated: '2021-05-05T12:00:00.000Z',
      //   },
      { updated: '2021-05-05T12:00:00.000Z', contents: '{"test":"test"' },
    ]
    const correct = [
      {
        id: 'c5e4a112-795f-4166-9913-8097849767d2',
        contents: '{"test":"test"',
      },
      {
        id: 'c5e4a112-795f-4166-9913-8097849767d2',
        updated: '2021-05-05T12:00:00.000Z',
        contents: '{"test":"test"}',
      },
    ]
    malformed.forEach((url) => {
      expect(document.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(document.safeParse(url).success).toBe(true)
    })
  })
})
