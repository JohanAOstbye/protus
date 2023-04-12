import { context, contextToPrisma } from 'lib/types/x-api/context'
import { z } from 'zod'

describe('Conversion - Statment - Context', () => {
  test('context', async () => {
    const correct = [
      {
        registration: 'c5e4a112-795f-4166-9913-8097849767d2',
        instructor: {
          objectType: 'Agent',
          name: 'test',
          mbox: 'mailto:test@test.com',
        },
        team: {
          objectType: 'Group',
          name: 'test',
          mbox: 'mailto:group@test.com',
          member: [],
        },
        contextActivities: new Map([
          [
            'Parent',
            [
              {
                id: 'http://example.com',
              },
            ],
          ],
          [
            'Grouping',
            [
              {
                id: 'http://example.com',
              },
            ],
          ],
        ]),
      },
    ] as z.infer<typeof context>[]

    correct.forEach((value) => {
      expect(() => {
        contextToPrisma(value)
      }).not.toThrowError()
    })
  })
})
