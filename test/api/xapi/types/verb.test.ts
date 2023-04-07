import { verb } from 'lib/types/x-api/verb'

describe('Type - Statment - Verb', () => {
  test('verb', async () => {
    const malformed = [
      { id: 'fail', display: { en: 'English' } },
      { id: 'not.a.url.nothing', display: { en: 'English' } },
      { id: 'http://example.com', display: { en: 1 } },
      {
        id: 'https://protus.vercel.app',
        display: { en: 'English', de: { test: 'dumb' } },
      },
    ]
    const correct = [
      { id: 'http://example.com', display: { en: 'English' } },
      {
        id: 'https://protus.vercel.app',
        display: { en: 'English', de: 'Deutsch' },
      },
    ]
    malformed.forEach((url) => {
      expect(verb.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(verb.safeParse(url).success).toBe(true)
    })
  })
})
