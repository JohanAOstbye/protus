import {
  activityObject,
  agentObject,
  groupObject,
  object,
  statementObject,
  subStatementObject,
  objectToPrisma,
} from 'lib/types/x-api/object'
import { z } from 'zod'

const correctActivity = [
  { id: 'https://www.example.com', objectType: 'Activity' },
  {
    id: 'https://www.example.com',
    objectType: 'Activity',
    definition: { name: { en: 'test' } },
  },
] as z.infer<typeof activityObject>[]

const correctStatement = [
  {
    id: 'c5e4a112-795f-4166-9913-8097849767d2',
    objectType: 'StatementRef',
  },
] as z.infer<typeof statementObject>[]

const correctGroup = [
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
] as z.infer<typeof groupObject>[]

const correctAgent = [
  {
    id: '7141e727-9483-4604-b116-1373c25e56d8',
    name: 'test',
    account: { name: 'test', homePage: 'https://protus.vercel.app' },
    objectType: 'Agent',
  },
  { mbox: 'mailto:test@test.com', name: 'test', objectType: 'Agent' },
  {
    id: '7141e727-9483-4604-b116-1373c25e56d8',
    name: 'test',
    openid: 'https://protus.vercel.app',
    objectType: 'Agent',
  },
  { mbox: 'mailto:test@test.com', objectType: 'Agent' },
] as z.infer<typeof agentObject>[]

const correctSubStatement = [
  {
    objectType: 'SubStatement',
    actor: {
      id: '7141e727-9483-4604-b116-1373c25e56d8',
      name: 'test',
      account: { name: 'test', homePage: 'https://protus.vercel.app' },
      objectType: 'Agent',
    },
    verb: { id: 'https://www.example.com', display: { en: 'test' } },
    object: {
      id: 'https://www.example.com',
      objectType: 'Activity',
      definition: { name: { en: 'test' } },
    },
  },
] as z.infer<typeof subStatementObject>[]

describe('Conversion - Statment - Object', () => {
  test('object', async () => {
    const correct = [
      ...correctActivity,
      ...correctAgent,
      ...correctGroup,
      ...correctStatement,
      ...correctSubStatement,
    ] as z.infer<typeof object>[]

    correct.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('nestedObject', async () => {
    const correct = [
      ...correctActivity,
      ...correctStatement,
      ...correctAgent,
      ...correctGroup,
    ]
    correct.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('agentObject', async () => {
    correctAgent.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('groupObject', async () => {
    correctGroup.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('subStatementObject', async () => {
    correctSubStatement.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('statementObject', async () => {
    correctStatement.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })

  test('activityObject', async () => {
    correctActivity.forEach((value) => {
      expect(() => {
        objectToPrisma(value)
      }).not.toThrowError()
    })
  })
})
