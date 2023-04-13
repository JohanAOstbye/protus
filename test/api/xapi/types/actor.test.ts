import {
  account,
  actor,
  actorBase,
  agent,
  anongroup,
  group,
  identifiedgroup,
  inverseFunctionalIdentifier,
} from 'lib/types/x-api/actor'

describe('Type - Statment - agent', () => {
  test('account', async () => {
    const malformed = [
      'fail',
      { name: 'test', homePage: 'fail' },
      { name: 'test' },
      { homePage: 'fail' },
      { homepage: 'https://protus.vercel.app' },
    ]
    const correct = [
      { name: 'test', homePage: 'https://protus.vercel.app' },
      { name: 'meme', homePage: 'https://protus.vercel.app' },
    ]
    malformed.forEach((url) => {
      expect(account.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(account.safeParse(url).success).toBe(true)
    })
  })

  test('inverseFunctionalIdentifier', async () => {
    const malformed = [
      { mbox: 'fail' },
      { mbox_sha1sum: { fail: 'fail' } },
      { openid: 'fail' },
      { account: { name: 'test', homePage: 'fail' } },
      { account: { name: 'test' } },
      { account: { homePage: 'fail' } },
      { account: { homepage: 'https://protus.vercel.app' } },
    ]
    const correct = [
      { mbox: 'mailto:test@test.com' },
      { mbox_sha1sum: 'test' },
      { openid: 'https://protus.vercel.app' },
      { account: { name: 'test', homePage: 'https://protus.vercel.app' } },
      { account: { name: 'meme', homePage: 'https://protus.vercel.app' } },
    ]
    malformed.forEach((value) => {
      expect(() => {
        inverseFunctionalIdentifier.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(inverseFunctionalIdentifier.parse(value)).toStrictEqual(value)
    })
  })

  test('actorBase', async () => {
    const malformed = [{ id: 'fail' }, { name: { en: 'fail' } }]
    const correct = [
      { id: '7141e727-9483-4604-b116-1373c25e56d8', name: 'test' },
    ]
    malformed.forEach((value) => {
      expect(() => {
        actorBase.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(actorBase.parse(value)).toStrictEqual(value)
    })
  })

  test('agent', async () => {
    const malformed = [
      { id: 'fail' },
      { objectType: 'fail' },
      { name: { en: 'fail' } },
      { mbox: 'fail' },
      { mbox_sha1sum: { fail: 'fail' } },
      { openid: 'fail' },
      { account: { name: 'test', homePage: 'fail' } },
      { account: { name: 'test' } },
      { account: { homePage: 'fail' } },
      { account: { homepage: 'https://protus.vercel.app' } },
    ]
    const correct = [
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
    ]
    malformed.forEach((value) => {
      expect(() => {
        agent.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(agent.parse(value)).toStrictEqual(value)
    })
  })

  test('anongroup', async () => {
    const malformed = [
      { objectType: 'fail' },
      {
        member: [
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            account: { name: 'test', homePage: 'https://protus.vercel.app' },
          },
        ],
      },
      {
        member: [
          {
            id: 'fail',
            name: 'test',
            account: { name: 'test', homePage: 'fail' },
          },
        ],
      },
    ]
    const correct = [
      {
        objectType: 'Group',
        member: [
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
        ],
      },
      {
        objectType: 'Group',
        member: [],
      },
    ]
    malformed.forEach((value) => {
      expect(() => {
        anongroup.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(anongroup.parse(value)).toStrictEqual(value)
    })
  })

  test('identifiedgroup', async () => {
    const malformed = [
      // { objectType: 'fail' },
      // {
      //   member: [
      //     {
      //       id: '7141e727-9483-4604-b116-1373c25e56d8',
      //       name: 'test',
      //       account: { name: 'test', homePage: 'https://protus.vercel.app' },
      //     },
      //   ],
      // },
      // {
      //   member: [
      //     {
      //       id: 'fail',
      //       name: 'test',
      //       account: { name: 'test', homePage: 'fail' },
      //     },
      //   ],
      // },
      {
        objectType: 'Group',
        member: [
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
        ],
      },
      {
        objectType: 'Group',
        member: [],
      },
      {
        account: { name: 'test', homePage: 'https://protus.vercel.app' },
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
    ]
    const correct = [
      {
        objectType: 'Group',
        mbox: 'mailto:test@test.com',
        member: [
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
        ],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        account: { name: 'test', homePage: 'https://protus.vercel.app' },

        objectType: 'Group',
        member: [],
      },
    ]
    malformed.forEach((value) => {
      expect(() => {
        identifiedgroup.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(identifiedgroup.parse(value)).toStrictEqual(value)
    })
  })

  test('group', async () => {
    const malformed = [
      { objectType: 'fail' },
      {
        member: [
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            account: { name: 'test', homePage: 'https://protus.vercel.app' },
          },
        ],
      },
      {
        member: [
          {
            id: 'fail',
            name: 'test',
            account: { name: 'test', homePage: 'fail' },
          },
        ],
      },
    ]
    const correct = [
      {
        objectType: 'Group',
        member: [
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
        ],
      },
      {
        objectType: 'Group',
        member: [],
      },
      {
        objectType: 'Group',
        mbox: 'mailto:test@test.com',
        member: [
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
        ],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        account: { name: 'test', homePage: 'https://protus.vercel.app' },

        objectType: 'Group',
        member: [],
      },
    ]
    malformed.forEach((value) => {
      expect(() => {
        group.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(group.parse(value)).toStrictEqual(value)
    })
  })

  test('actor', async () => {
    const malformed = [
      { objectType: 'fail' },
      {
        member: [
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            account: { name: 'test', homePage: 'https://protus.vercel.app' },
          },
        ],
      },
      {
        member: [
          {
            id: 'fail',
            name: 'test',
            account: { name: 'test', homePage: 'fail' },
          },
        ],
      },
      { id: 'fail' },
      { objectType: 'fail' },
      { name: { en: 'fail' } },
      { mbox: 'fail' },
      { mbox_sha1sum: { fail: 'fail' } },
      { openid: 'fail' },
      { account: { name: 'test', homePage: 'fail' } },
      { account: { name: 'test' } },
      { account: { homePage: 'fail' } },
      { account: { homepage: 'https://protus.vercel.app' } },
    ]
    const correct = [
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
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            openid: 'https://protus.vercel.app',
            objectType: 'Agent',
          },
          { mbox: 'mailto:test@test.com', objectType: 'Agent' },
        ],
      },
      {
        objectType: 'Group',
        member: [],
      },
      {
        objectType: 'Group',
        mbox: 'mailto:test@test.com',
        member: [
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
        ],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        openid: 'https://protus.vercel.app',
        objectType: 'Group',
        member: [],
      },
      {
        account: { name: 'test', homePage: 'https://protus.vercel.app' },

        objectType: 'Group',
        member: [],
      },
    ]
    malformed.forEach((url) => {
      expect(actor.safeParse(url).success).toBe(false)
    })

    correct.forEach((url) => {
      expect(actor.safeParse(url).success).toBe(true)
    })
  })
})
