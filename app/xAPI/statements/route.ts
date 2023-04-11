import { isDeepEqual } from 'lib/objectUtils'
import { prisma } from 'lib/server/db'
import { apiValidation } from 'lib/server/rest'
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
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function GET(request: Request) {
  const validator = apiValidation(
    request.clone(),
    {
      query: z.object({
        statementId: z.string().uuid().optional(),
        voidedStatementId: z.string().uuid().optional(),
        agent: z
          .string()
          .optional()
          .transform((value, ctx) => {
            if (!value) return value
            try {
              let json = JSON.parse(value)
              const agent = zAgent.or(identifiedgroup).safeParse(json)
              if (!agent.success) {
                ctx.addIssue({
                  code: z.ZodIssueCode.custom,
                  message: 'agent is not a valid agent or group',
                })
                return z.NEVER
              }
              return agent.data
            } catch (error) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'agent is not a valid json object',
              })
              return z.NEVER
            }
          }),
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
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
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
  } = validator.data.query

  const headers = new Headers()

  if (statementId && voidedStatementId) {
    headers.set('Content-Type', 'application/json')
    return NextResponse.json(
      { message: 'you cant have both statementId and voidedStatementId' },
      { status: 400, headers }
    )
  }
  if (
    (statementId || voidedStatementId) &&
    (agent ||
      verb ||
      activity ||
      registration ||
      related_activities ||
      related_agents ||
      since ||
      until ||
      limit ||
      ascending)
  ) {
    return NextResponse.json(
      {
        message:
          'you cant have statementId or voidedStatementId parameters, and also contain any other parameter besides "attachments" or "format".',
      },
      { status: 400, headers }
    )
  }

  if (statementId || voidedStatementId) {
    const PrismaStatement = await prisma.statement.findUnique({
      where: { id: statementId || voidedStatementId },
      include: statementInclude,
    })
    if (PrismaStatement !== null) {
      const statement = statementFromPrisma(PrismaStatement)
      headers.set('Content-Type', 'application/json')
      if (statement.stored) headers.set('Content-Type', statement.stored)
      return NextResponse.json(statement)
    } else {
      headers.set('Content-Type', 'application/json')
      return NextResponse.json({ statements: [], more: undefined })
    }
  }
  try {
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
          ? related_activities
            ? {
                OR: [
                  { objectType: 'Activity', id: activity },
                  {
                    objectType: 'SubStatement',
                    object: { objectType: 'Activity', id: activity },
                  },
                ],
              }
            : { objectType: 'Activity', id: activity }
          : agent
          ? related_agents
            ? {
                OR: [
                  {
                    objectType: {
                      in: ['Agent', 'Group'],
                    },
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
                  {
                    objectType: 'SubStatement',
                    OR: [
                      {
                        actor: inverseFunctionalIdentifier.parse(agent),
                      },
                      {
                        object: {
                          objectType: {
                            in: ['Agent', 'Group'],
                          },
                          objectActor: {
                            OR: [
                              inverseFunctionalIdentifier.parse(agent),
                              {
                                member: {
                                  some: inverseFunctionalIdentifier.parse(
                                    agent
                                  ),
                                },
                              },
                            ],
                          },
                        },
                      },
                    ],
                  },
                ],
              }
            : {
                objectType: {
                  in: ['Agent', 'Group'],
                },
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
        context:
          related_agents || related_activities
            ? {
                contextActivities: related_activities
                  ? {
                      some: {
                        value: {
                          some: {
                            object: { objectType: 'Activity', id: activity },
                          },
                        },
                      },
                    }
                  : undefined,
                team: related_agents
                  ? {
                      member: {
                        some: inverseFunctionalIdentifier.parse(agent),
                      },
                    }
                  : undefined,
                instructor: related_agents
                  ? inverseFunctionalIdentifier.parse(agent)
                  : undefined,
              }
            : undefined,
        authority: related_agents
          ? inverseFunctionalIdentifier.parse(agent)
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
      headers.set('Content-Type', 'multipart/mixed')
    } else {
      headers.set('Content-Type', 'application/json')
    }

    return NextResponse.json({
      statements: statements
        .filter(
          (statement): statement is withIdRequired<PrismaStatement> =>
            !!statement.id
        )
        .map((statement) => statementFromPrisma(statement)),
      more: undefined,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}

export async function POST(request: Request) {
  const validator = apiValidation(
    request.clone(),
    {
      body: z.object({ statements: z.array(zStatement) }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const { statements } = validator.data.body

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')

  const ids = statements
    .map((statement) => statement.id)
    .filter((id): id is string => {
      return !!id
    })

  if (new Set(ids).size !== ids.length)
    return NextResponse.json(
      { message: 'Duplicate statement id' },
      { status: 400, headers }
    )
  try {
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
        return NextResponse.json(
          { message: `Statement with id: ${statement.id} already exist` },
          { status: 409, headers }
        )
      }
    })

    const createStatements = statements.filter(
      ({ id }) => !existingStatements.find((el) => el.id === id)
    )
    await Promise.all(
      createStatements.map((statement) =>
        prisma.statement.create({
          data: statementToPrisma(statement, {}, undefined),
        })
      )
    )

    // Any other status or JSON format will lead to TS error.
    return NextResponse.json(ids, { status: 200, headers })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}

export async function PUT(request: Request) {
  const validator = apiValidation(
    request.clone(),
    {
      query: z.object({
        statementId: z.string(),
      }),
      body: zStatement,
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const { query, body: statement } = validator.data

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  try {
    statement.id = query.statementId
    const stored = await prisma.statement.findUnique({
      where: { id: statement.id },
      include: statementInclude,
    })
    if (stored) {
      const parsedstored = statementFromPrisma(stored)
      if (isDeepEqual(parsedstored, statement)) {
        return NextResponse.json(undefined, { status: 204 })
      } else {
        return NextResponse.json(
          { message: 'Statement already exist' },
          { status: 409 }
        )
      }
      return
    }
    await prisma.statement.create({
      data: statementToPrisma(statement, {}, undefined),
    })

    return NextResponse.json(undefined, { status: 204 })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}
