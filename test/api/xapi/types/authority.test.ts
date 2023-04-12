import { authority } from 'lib/types/x-api/authority'

describe('Type - Statement - Authority', () => {
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
      {
        objectType: 'Group',
        member: [],
      },
      {
        objectType: 'Group',
        member: [
          {
            id: '7141e727-9483-4604-b116-1373c25e56d8',
            name: 'test',
            account: { name: 'test', homePage: 'https://protus.vercel.app' },
          },
        ],
      },
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
    ]
    malformed.forEach((value) => {
      expect(() => {
        authority.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(authority.parse(value)).toStrictEqual(value)
    })
  })
})
