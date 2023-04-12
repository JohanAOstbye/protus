import { authority, authorityToPrisma } from 'lib/types/x-api/authority'
import { z } from 'zod'

describe('Conversion - Statement - Authority', () => {
  test('anongroup', async () => {
    const correct = [
      {
        objectType: 'Group',
        name: 'LMS',
        member: [
          {
            objectType: 'Agent',
            mbox: 'mailto:hei@hei.no',
          },
          {
            objectType: 'Agent',
            account: {
              homePage: 'https://protus.vercel.app',
              name: 'protus-client',
            },
          },
        ],
      },
      {
        id: '7141e727-9483-4604-b116-1373c25e56d8',
        name: 'test',
        account: { name: 'test', homePage: 'https://protus.vercel.app' },
      },
      { mbox: 'mailto:test@test.com', name: 'test' },
      {
        id: '7141e727-9483-4604-b116-1373c25e56d8',
        name: 'test',
        openid: 'https://protus.vercel.app',
        objectType: 'Agent',
      },
      { mbox: 'mailto:test@test.com', objectType: 'Agent' },
      {
        objectType: 'Group',
        member: [
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            account: { name: 'test', homePage: 'https://protus.vercel.app' },
          },
          { mbox: 'mailto:test@test.com', name: 'test' },
        ],
      },
    ] as z.infer<typeof authority>[]

    correct.forEach((value) => {
      expect(() => {
        authorityToPrisma(value)
      }).not.toThrowError()
    })
  })
})
