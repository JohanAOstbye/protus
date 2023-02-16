import { prisma } from 'lib/server/db'
import { defineEndpoints } from 'lib/server/rest'
import { statement, statementInclude, statementToPrisma } from 'lib/types/x-api'
import { z } from 'zod'

export default defineEndpoints({
  POST: {
    input: {
      contentType: 'application/json',
      body: z.object({
        name: z.string(),
      }),
      query: {
        page: z.number(),
      },
    },
    output: [
      {
        status: 201,
        contentType: 'application/json',
        schema: statement,
      },
    ],
    handler: ({
      res,
      req: {
        body: {
          name, // Any other attribute will lead to TS error.
        },
        query: {
          page, // Any other attribute will lead to TS error.
        },
      },
    }) => {
      // Any other content type will lead to TS error.
      res.setHeader('content-type', 'application/json')

      // Any other status or JSON format will lead to TS error.
      res.status(201).json({
        object: {
          objectType: 'Activity',
          id: 'https://example.com',
          definition: {
            name: {
              'en-US': 'Example',
            },
          },
        },
        actor: {},
        verb: {
          id: 'http://adlnet.gov/expapi/verbs/attempted',
          display: {
            'en-US': 'attempted',
          },
        },
      })
    },
  },
  PUT: {
    input: {
      contentType: 'application/json',
      body: statement,
    },
    output: [
      {
        status: 204,
        contentType: 'application/json',
        schema: undefined,
      },
      {
        status: 409,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({ res, req: { body: statement }, params: { session } }) => {
      const stored = await prisma.statement.findUnique({
        where: { id: statement.id },
        include: statementInclude,
      })
      if (stored) {
        res.status(409)
        return
      }
      prisma.statement.create({
        data: statementToPrisma(statement, {}, session?.user),
      })
      // Any other content type will lead to TS error.
      res.setHeader('content-type', 'application/json')

      // Any other status or JSON format will lead to TS error.
      res.status(204)
    },
  },
  openApiSpec: {
    put: {
      summary: 'Stores a single Statement with the given id.',
      description:
        'Stores a single Statement with the given id. POST can also be used to store single Statements.',
    },
  },
})
