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
    malformed.forEach((url) => {
      expect(authority.safeParse(url).success).toBe(false)
    })

    correct.forEach((url) => {
      let test = authority.safeParse(url)
      if (!test.success) {
        console.log(test.error)
      }
      expect(authority.safeParse(url).success).toBe(true)
    })
  })
})
