import { statementToPrisma, statementType } from 'lib/types/x-api/statement'

describe('Conversion - Statment', () => {
  test('statement', async () => {
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
    ] as statementType[]
    correct.forEach((value) => {
      expect(() => {
        statementToPrisma(value, {})
      }).not.toThrowError()
    })
  })
})
