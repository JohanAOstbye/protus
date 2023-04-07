import { IRL, extensions, languageMap, languageTag } from 'lib/types/x-api'

describe('Type - Statment - extra', () => {
  test('IRL', async () => {
    const malformed = ['fail', 'not.a.url.nothing']
    const correct = ['http://example.com', 'https://protus.vercel.app']
    // malformed.forEach((url) => {
    //   expect(IRL.safeParse(url).success).toBe(false)
    // })
    correct.forEach((url) => {
      expect(IRL.safeParse(url).success).toBe(true)
    })
  })

  test('IRI', async () => {
    const malformed = ['fail', 'not.a.url.nothing']
    const correct = ['http://example.com', 'https://protus.vercel.app']
    // malformed.forEach((url) => {
    //   expect(IRL.safeParse(url).success).toBe(false)
    // })
    correct.forEach((url) => {
      expect(IRL.safeParse(url).success).toBe(true)
    })
  })

  test('languageTag', async () => {
    const malformed = ['nein', 'langtag']
    const correct = ['en', 'en', 'no', 'fr']
    malformed.forEach((url) => {
      expect(languageTag.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(languageTag.parse(url)).toBe(url)
    })
  })

  test('languageMap', async () => {
    const malformed = [{ en: 1 }, { de: { test: 'dumb' } }]
    const correct = [
      { en: 'English' },
      { en: 'English', de: 'Deutsch' },
      { en: 'English', de: 'Deutsch', no: 'Norsk', fr: 'Français' },
    ]
    malformed.forEach((url) => {
      expect(languageMap.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(languageMap.safeParse(url).success).toBe(true)
      expect(languageMap.parse(url)).toStrictEqual(url)
    })
  })

  test('extensions', async () => {
    const correct = [{ en: 1 }, { de: { test: 'dumb' } }]

    correct.forEach((url) => {
      expect(extensions.parse(url)).toStrictEqual(url)
    })
  })
})
