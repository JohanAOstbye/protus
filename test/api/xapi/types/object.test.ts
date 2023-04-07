import {
  activityObject,
  agentObject,
  definition,
  groupObject,
  interactionDefinition,
  nestedObject,
  object,
  statementObject,
  subStatementObject,
} from 'lib/types/x-api/object'
import { z } from 'zod'

const malformedActivity = [
  { id: 'c5e4a112-795f-4166-9913-8097849767d2', objectType: 'Activity' },
]
const correctActivity = [
  { id: 'https://www.example.com', objectType: 'Activity' },
  {
    id: 'https://www.example.com',
    objectType: 'Activity',
    definition: { name: { en: 'test' } },
  },
]

const malformedStatement = [
  { id: 'test', objectType: 'StatementRef' },
  { id: 'test', objectType: 'StatementRef', object: {} },
]
const correctStatement = [
  {
    id: 'c5e4a112-795f-4166-9913-8097849767d2',
    objectType: 'StatementRef',
  },
]

const malformedGroup = [
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
]

const malformedAgent = [
  { id: '71' },
  { id: 'fail', objectType: 'Agent' },
  { objectType: 'fail' },
  { name: { en: 'fail' }, objectType: 'Agent' },
  { mbox: 'fail', objectType: 'Agent' },
  { mbox_sha1sum: { fail: 'fail' }, objectType: 'Agent' },
  { openid: 'fail', objectType: 'Agent' },
  { account: { name: 'test', homePage: 'fail' }, objectType: 'Agent' },
  { account: { name: 'test' }, objectType: 'Agent' },
  { account: { homePage: 'fail' }, objectType: 'Agent' },
  {
    account: { homepage: 'https://protus.vercel.app' },
    objectType: 'Agent',
  },
]
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
]

const malformedSubStatement = [
  {
    objectType: 'SubStatment',
    actor: correctAgent[0],
    verb: { id: 'test', display: { en: 'test' } },
    object: correctActivity[0],
  },
]
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
  //   {
  //     objectType: 'SubStatement',
  //     actor: { mbox: 'mailto:test@test.com', name: 'test', objectType: 'Agent' },
  //     verb: { id: 'https://www.example.com' },
  //     object: {
  //       id: 'c5e4a112-795f-4166-9913-8097849767d2',
  //       objectType: 'StatementRef',
  //     },
  //   },
]

describe('Type - Statment - Object', () => {
  test('object', async () => {
    const malformed = [
      ...malformedActivity,
      ...malformedAgent,
      ...malformedGroup,
      ...malformedStatement,
      ...malformedSubStatement,
    ]
    const correct = [
      ...correctActivity,
      ...correctAgent,
      ...correctGroup,
      ...correctStatement,
      ...correctSubStatement,
    ]
    malformed.forEach((value) => {
      expect(() => {
        object.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(object.parse(value)).toStrictEqual(value)
    })
  })

  test('definition', async () => {
    const correct = [
      {},
      { name: { en: 'test' } },
      { name: { en: 'test' }, description: { en: 'test' } },
      {
        name: { en: 'test' },
        description: { en: 'test' },
        type: 'file:example.com/file',
        moreInfo: 'http://example.com',
        extensions: new Map([['test', 'test']]),
      },
    ]

    correct.forEach((value) => {
      expect(definition.parse(value)).toStrictEqual(value)
    })
  })

  test('interactionDefinition', async () => {
    const malformed = [
      { interactionType: 'test' },
      { name: { en: 'test' }, choices: ['option', 'option'] },
      {
        name: { en: 'test' },
        description: { en: 'test' },
        scale: ['litt', 'noe', 'veldig'],
      },
      {
        name: { en: 'test' },
        description: { en: 'test' },
        type: 'file:example.com/file',
        moreInfo: 'http://example.com',
        extensions: new Map([['test', 'test']]),
      },
    ]
    const correct = [
      { interactionType: 'true-false' },
      { interactionType: 'choice', choices: ['option', 'option'] },
      {
        interactionType: 'likert',
        scale: ['litt', 'noe', 'veldig'],
      },

      {
        name: { en: 'test' },
        interactionType: 'long-fill-in',
        correctResponsesPattern: ['test'],
      },
      {
        name: { en: 'test' },
        description: { en: 'test' },
        interactionType: 'numeric',
      },
      {
        name: { en: 'test' },
        description: { en: 'test' },
        interactionType: 'other',
        type: 'file:example.com/file',
        moreInfo: 'http://example.com',
        extensions: new Map([['test', 'test']]),
      },
    ]
    malformed.forEach((value) => {
      expect(() => {
        interactionDefinition.parse(value)
      }).toThrowError()
    })
    const transformInteractionType = (value: any) => {
      switch (value.interactionType) {
        case 'true-false':
          return { ...value, interactionType: 'trueFalse' }
        case 'fill-in':
          return { ...value, interactionType: 'fillIn' }
        case 'long-fill-in':
          return { ...value, interactionType: 'longFillIn' }
        default:
          return { ...value, interactionType: value.interactionType }
      }
    }
    correct.forEach((value) => {
      expect(interactionDefinition.parse(value)).toStrictEqual(
        transformInteractionType(value)
      )
    })
  })

  test('nestedObject', async () => {
    const malformed = [
      ...malformedActivity,
      ...malformedStatement,
      ...malformedAgent,
      ...malformedGroup,
    ]
    const correct = [
      ...correctActivity,
      ...correctStatement,
      ...correctAgent,
      ...correctGroup,
    ]
    malformed.forEach((value) => {
      expect(() => {
        nestedObject.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(nestedObject.parse(value)).toStrictEqual(value)
    })
  })

  test('agentObject', async () => {
    malformedAgent.forEach((value) => {
      expect(() => {
        agentObject.parse(value)
      }).toThrowError()
    })
    correctAgent.forEach((value) => {
      expect(agentObject.parse(value)).toStrictEqual(value)
    })
  })

  test('groupObject', async () => {
    malformedGroup.forEach((value) => {
      expect(() => {
        groupObject.parse(value)
      }).toThrowError()
    })
    correctGroup.forEach((value) => {
      expect(groupObject.parse(value)).toStrictEqual(value)
    })
  })

  test('subStatementObject', async () => {
    malformedSubStatement.forEach((value) => {
      expect(() => {
        subStatementObject.parse(value)
      }).toThrowError()
    })
    correctSubStatement.forEach((value) => {
      expect(subStatementObject.parse(value)).toStrictEqual(value)
    })
  })

  test('statementObject', async () => {
    malformedStatement.forEach((value) => {
      expect(() => {
        statementObject.parse(value)
      }).toThrowError()
    })
    correctStatement.forEach((value) => {
      expect(statementObject.parse(value)).toStrictEqual(value)
    })
  })

  test('activityObject', async () => {
    malformedActivity.forEach((value) => {
      expect(() => {
        activityObject.parse(value)
      }).toThrowError()
    })
    correctActivity.forEach((value) => {
      expect(activityObject.parse(value)).toStrictEqual(value)
    })
  })
})
