import { actor, actorToPrisma, agentType, group } from 'lib/types/x-api/actor'
import { z } from 'zod'

describe('Conversion - Statment - agent', () => {
  test('agent', async () => {
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
    ] as agentType[]

    correct.forEach((value) => {
      expect(() => {
        actorToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('anongroup', async () => {
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
    ] as z.infer<typeof group>[]

    correct.forEach((value) => {
      expect(() => {
        actorToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('identifiedgroup', async () => {
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
    ] as z.infer<typeof group>[]

    correct.forEach((value) => {
      expect(() => {
        actorToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('group', async () => {
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
    ] as z.infer<typeof group>[]

    correct.forEach((value) => {
      expect(() => {
        actorToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('actor', async () => {
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
    ] as z.infer<typeof actor>[]

    correct.forEach((value) => {
      expect(() => {
        actorToPrisma(value)
      }).not.toThrowError()
    })
  })
})
