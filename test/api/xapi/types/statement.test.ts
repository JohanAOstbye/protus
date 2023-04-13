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
        object: {
          objectType: 'Activity',
          id: 'https://protus.no/c/java',
          definition: {
            name: {
              en: 'java',
            },
          },
        },
        actor: {
          objectType: 'Agent',
          mbox: 'mailto:hei@hei.no',
        },
        verb: {
          id: 'http://adlnet.gov/expapi/verbs/viewed',
          display: {
            en: 'viewed',
          },
        },
        context: {
          platform:
            'tablet Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0',
        },
        authority: {
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
      },
      {
        actor: {
          objectType: 'Agent',
          mbox: 'mailto:test@example.com',
        },
        verb: {
          id: 'http://example.com/planned',
          display: {
            en: 'planned',
          },
        },
        object: {
          objectType: 'SubStatement',
          actor: {
            objectType: 'Agent',
            mbox: 'mailto:test@example.com',
          },
          verb: {
            id: 'http://example.com/visited',
            display: {
              en: 'will visit',
            },
          },
          object: {
            objectType: 'Activity',
            id: 'http://example.com/website',
            definition: {
              name: {
                en: 'Some Awesome Website',
              },
            },
          },
        },
      },
    ]
    malformed.forEach((value) => {
      expect(() => {
        statement.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(statement.parse(value)).toStrictEqual(value)
    })
  })
})
