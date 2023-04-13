import { z } from 'zod'
import { IRI, withIdRequired } from 'lib/types/x-api'
import {
  agent as zAgent,
  identifiedgroup,
  inverseFunctionalIdentifier,
} from 'lib/types/x-api/actor'
import {
  PrismaStatement,
  statement as zStatement,
  statementFromPrisma,
  statementInclude,
  statementToPrisma,
  statementSelect,
  statementSelectWithoutAttachments,
} from 'lib/types/x-api/statement'
import { testApiValidation } from './testApiValidation'
// import { Request} from 'typescript/lib'

describe('API - xapi/statements', () => {
  // test('GET - /xAPI/statements', async () => {
  //   let request = new Request(
  //     '/xAPI/statements' + new URLSearchParams({}).toString(),
  //     {
  //       method: 'GET',
  //     }
  //   )
  //   expect(
  //     await apiValidation(
  //       request,
  //       {
  //         query: z.object({
  //           statementId: z.string().uuid().optional(),
  //           voidedStatementId: z.string().uuid().optional(),
  //           agent: z
  //             .string()
  //             .optional()
  //             .transform((value, ctx) => {
  //               if (!value) return value
  //               try {
  //                 let json = JSON.parse(value)
  //                 const agent = identifiedgroup.or(zAgent).safeParse(json)
  //                 if (!agent.success) {
  //                   ctx.addIssue({
  //                     code: z.ZodIssueCode.custom,
  //                     message: 'agent is not a valid agent or group',
  //                   })
  //                   return z.NEVER
  //                 }
  //                 return agent.data
  //               } catch (error) {
  //                 ctx.addIssue({
  //                   code: z.ZodIssueCode.custom,
  //                   message: 'agent is not a valid json object',
  //                 })
  //                 return z.NEVER
  //               }
  //             }),
  //           verb: IRI.optional(),
  //           activity: IRI.optional(),
  //           registration: z.string().uuid().optional(),
  //           related_activities: z.boolean().default(false).optional(),
  //           related_agents: z.boolean().default(false).optional(),
  //           since: z.string().optional(),
  //           until: z.string().optional(),
  //           limit: z.number().min(0).default(0).optional(),
  //           format: z
  //             .enum(['ids', 'exact', 'canonical'])
  //             .default('exact')
  //             .optional(),
  //           attachments: z.boolean().default(false).optional(),
  //           ascending: z.boolean().default(false).optional(),
  //         }),
  //       },
  //       { 'content-type': ['application/json'] }
  //     )
  //   ).toStrictEqual({})
  // })
  test('POST - /xAPI/statements', async () => {
    expect(
      await testApiValidation(
        {
          headers: new Headers({}),
          body: {
            statements: [
              {
                object: {
                  objectType: 'Activity',
                  id: 'https://protus.no/c/java',
                  definition: { name: { en: 'java' } },
                },
                actor: { objectType: 'Agent', mbox: 'mailto:hei@hei.no' },
                verb: {
                  id: 'http://adlnet.gov/expapi/verbs/viewed',
                  display: { en: 'viewed' },
                },
                context: {
                  platform:
                    'desktop Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0',
                },
                authority: {
                  objectType: 'Group',
                  name: 'LMS',
                  member: [
                    { objectType: 'Agent', mbox: 'mailto:hei@hei.no' },
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
            ],
          },
        },
        {
          body: z.object({ statements: z.array(zStatement) }),
        },
        { 'content-type': ['application/json'] }
      )
    ).toStrictEqual({
      success: true,
      data: {
        body: {
          statements: [
            {
              object: {
                objectType: 'Activity',
                id: 'https://protus.no/c/java',
                definition: { name: { en: 'java' } },
              },
              actor: { objectType: 'Agent', mbox: 'mailto:hei@hei.no' },
              verb: {
                id: 'http://adlnet.gov/expapi/verbs/viewed',
                display: { en: 'viewed' },
              },
              context: {
                platform:
                  'desktop Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/112.0',
              },
              authority: {
                objectType: 'Group',
                name: 'LMS',
                member: [
                  { objectType: 'Agent', mbox: 'mailto:hei@hei.no' },
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
          ],
        },
      },
    })
  })
})
