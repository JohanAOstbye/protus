import { isDeepEqual } from 'lib/deepCompare'
import { prisma } from 'lib/server/db'
import { defineEndpoints } from 'lib/server/rest'
import { getServerAuthSession } from 'lib/server/auth'
import { IRI, withIdRequired } from 'lib/types/x-api'
import {
  agent,
  identifiedgroup,
  inverseFunctionalIdentifier,
} from 'lib/types/x-api/actor'
import {
  PrismaStatement,
  statement,
  statementFromPrisma,
  statementInclude,
  statementToPrisma,
  statementSelect,
  statementSelectWithoutAttachments,
} from 'lib/types/x-api/statement'
import { z } from 'zod'

const statementResult = z.object({
  statements: z.array(statement),
  more: z.string().url().optional(),
})

export default defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      query: z.object({
        statementId: z.string().uuid().optional(),
        voidedStatementId: z.string().uuid().optional(),
        agent: agent.or(identifiedgroup).optional(),
        verb: IRI.optional(),
        activity: IRI.optional(),
        registration: z.string().uuid().optional(),
        related_activities: z.boolean().default(false).optional(),
        related_agents: z.boolean().default(false).optional(),
        since: z.string().optional(),
        until: z.string().optional(),
        limit: z.number().min(0).default(0).optional(),
        format: z
          .enum(['ids', 'exact', 'canonical'])
          .default('exact')
          .optional(),
        attachments: z.boolean().default(false).optional(),
        ascending: z.boolean().default(false).optional(),
      }),
      body: undefined,
    },
    output: [
      {
        status: 200,
        contentType: 'application/json',
        schema: statement,
      },
      {
        status: 200,
        contentType: 'application/json',
        schema: statementResult,
      },
      {
        status: 200,
        contentType: 'multipart/mixed',
        schema: statement,
      },
      {
        status: 200,
        contentType: 'multipart/mixed',
        schema: statementResult,
      },
      {
        status: 400,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({
      res,
      req: {
        body: {
          statementId,
          voidedStatementId,
          agent,
          verb,
          activity,
          registration,
          related_activities,
          related_agents,
          since,
          until,
          limit,
          format,
          attachments,
          ascending,
        },
      },
    }) => {
      if (statementId && voidedStatementId) {
        res.status(400)
      }
      if (
        ((statementId || voidedStatementId) && agent) ||
        verb ||
        activity ||
        registration ||
        related_activities ||
        related_agents ||
        since ||
        until ||
        limit ||
        ascending
      ) {
        res.status(400)
      }

      if (statementId || voidedStatementId) {
        const PrismaStatement = await prisma.statement.findUnique({
          where: { id: statementId || voidedStatementId },
          include: statementInclude,
        })
        if (PrismaStatement !== null) {
          const statement = statementFromPrisma(PrismaStatement)
          res.setHeader('content-type', 'application/json')
          if (statement.stored) res.setHeader('Last-Modified', statement.stored)
          res.end(statement)
        } else {
          res.setHeader('content-type', 'application/json')
          res.end({ statements: [], more: undefined })
        }
      }
      const statements = await prisma.statement.findMany({
        where: {
          id: registration ? registration : undefined,
          actor: agent
            ? {
                OR: [
                  inverseFunctionalIdentifier.parse(agent),
                  {
                    member: {
                      some: inverseFunctionalIdentifier.parse(agent),
                    },
                  },
                ],
              }
            : undefined,
          object: activity
            ? { objectType: 'Activity', id: activity }
            : agent
            ? {
                AND: [
                  {
                    objectType: {
                      in: ['Agent', 'Group'],
                    },
                  },
                  {
                    objectActor: {
                      OR: [
                        inverseFunctionalIdentifier.parse(agent),
                        {
                          member: {
                            some: inverseFunctionalIdentifier.parse(agent),
                          },
                        },
                      ],
                    },
                  },
                ],
              }
            : undefined,
          verb: verb ? { id: verb } : undefined,
          timestamp:
            since || until
              ? {
                  lte: since ? since : undefined,
                  gte: until ? until : undefined,
                }
              : undefined,
        },
        orderBy: { timestamp: ascending ? 'asc' : undefined },
        take: limit !== 0 ? limit : undefined,
        select:
          format == 'ids'
            ? { id: true }
            : attachments
            ? statementSelect(5)
            : statementSelectWithoutAttachments(5),
      })
      if (attachments) {
        res.setHeader('content-type', 'multipart/mixed')
      } else {
        res.setHeader('content-type', 'application/json')
      }
      res.end({
        statements: statements
          .filter(
            (statement): statement is withIdRequired<PrismaStatement> =>
              !!statement.id
          )
          .map((statement) => statementFromPrisma(statement)),
        more: undefined,
      })
    },
  },
  POST: {
    input: {
      contentType: 'application/json',
      body: z.array(statement),
    },
    output: [
      {
        status: 0,
        contentType: 'application/json',
        schema: z.array(z.string().uuid()),
      },
    ],
    // middleware: async ({ req, res }) => {
    //   const session = await getServerAuthSession({ req, res })
    //   return { session }
    // },
    handler: async ({
      res,
      req: { body: statements },
      // params: { session },
    }) => {
      res.setHeader('content-type', 'application/json')

      const ids = statements
        .map((statement) => statement.id)
        .filter((id): id is string => {
          return !!id
        })

      if (new Set(ids).size !== ids.length) res.status(400)

      const existingStatements = await prisma.statement.findMany({
        where: { id: { in: ids } },
        include: statementInclude,
      })

      existingStatements.forEach((statement) => {
        if (
          isDeepEqual(
            statement,
            statements.find((el) => el.id === statement.id)
          )
        ) {
          res.status(409)
        }
      })

      const createStatements = statements.filter(
        ({ id }) => !existingStatements.find((el) => el.id === id)
      )
      await Promise.all(
        createStatements.map((statement) =>
          prisma.statement.create({
            // data: statementToPrisma(statement, {}, session),
            data: statementToPrisma(statement, {}, undefined),
          })
        )
      )

      // Any other status or JSON format will lead to TS error.
      res.status(200).json(ids)
    },
  },
  PUT: {
    input: {
      contentType: 'application/json',
      body: statement,
      query: z.object({
        statementId: z.string(),
      }),
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
    // middleware: async ({ req, res }) => {
    //   const session = await getServerAuthSession({ req, res })
    //   return { session }
    // },
    handler: async ({
      res,
      req: {
        body,
        query: { statementId },
      },
      // params: { session },
    }) => {
      const parsed = statement.safeParse(body)
      if (!parsed.success) {
        res.status(400)
        return
      }
      const parsedStatement = parsed.data
      parsedStatement.id = statementId
      const stored = await prisma.statement.findUnique({
        where: { id: parsedStatement.id },
        include: statementInclude,
      })
      if (stored) {
        const parsedstored = statementFromPrisma(stored)
        if (isDeepEqual(parsedstored, parsedStatement)) {
          res.status(204)
        } else {
          res.status(409)
        }
        return
      }
      prisma.statement.create({
        // data: statementToPrisma(parsedStatement, {}, session?.user),
        data: statementToPrisma(parsedStatement, {}, undefined),
      })
      // Any other content type will lead to TS error.
      res.setHeader('content-type', 'application/json')

      // Any other status or JSON format will lead to TS error.
      res.status(204)
    },
  },
})
