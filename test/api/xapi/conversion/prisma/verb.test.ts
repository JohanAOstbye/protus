import { verb, verbToPrisma } from 'lib/types/x-api/verb'
import { z } from 'zod'

describe('Conversion - Statment - Verb', () => {
  test('verb', async () => {
    const correct = [
      { id: 'http://example.com', display: { en: 'English' } },
      {
        id: 'https://protus.vercel.app',
        display: { en: 'English', de: 'Deutsch' },
      },
    ] as z.infer<typeof verb>[]

    correct.forEach((value) => {
      expect(() => {
        verbToPrisma(value)
      }).not.toThrowError()
    })
  })
})
