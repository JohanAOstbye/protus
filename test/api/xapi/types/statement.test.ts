import { statement } from 'lib/types/x-api/statement'

describe('Type - Statment', () => {
  test('statement', async () => {
    const malformed = [
      {
        id: 'test',
        actor: {
          objectType: 'Agent',
          name: 'test',
          mbox: 'mailto:test@test.com',
        },
        verb: { id: 'http://example.com', display: { en: 'English' } },
        object: {
          id: 'c5e4a112-795f-4166-9913-8097849767d2',
          objectType: 'StatementRef',
        },
        result: {
          score: {
            scaled: 1,
          },
        },
        context: {
          registration: 'c5e4a112-795f-4166-9913-8097849767d2',
          instructor: {
            objectType: 'Agent',
            name: 'test',
            mbox: 'mailto:test@test.com',
          },
          team: {
            objectType: 'Group',
            name: 'test',
            mbox: 'mailto:Group@test.com',
            member: [],
          },
        },
      },
    ]
    const correct = [
      {
        id: 'c5e4a112-795f-4166-9913-8097849767d2',
        actor: {
          objectType: 'Agent',
          name: 'test',
          mbox: 'mailto:test@test.com',
        },
        verb: {
          id: 'http://example.com',
        },
        object: {
          id: 'http://example.com',
        },
        result: {
          score: {
            scaled: 1,
          },
        },
        context: {
          registration: 'c5e4a112-795f-4166-9913-8097849767d2',
          instructor: {
            objectType: 'Agent',
            name: 'test',
            mbox: 'mailto:test@test.com',
          },
          team: {
            objectType: 'Group',
            name: 'test',
            mbox: 'mailto:Group@test.com',
            member: [],
          },
        },
      },
    ]
    malformed.forEach((url) => {
      expect(statement.safeParse(url).success).toBe(false)
    })
    correct.forEach((url) => {
      expect(statement.safeParse(url).success).toBe(true)
    })
  })
})
