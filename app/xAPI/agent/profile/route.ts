import { apiValidation } from 'lib/server/rest'
import {
  actorToPrisma,
  agent as zAgent,
  inverseFunctionalIdentifier,
} from 'lib/types/x-api/actor'
import { document, mergeDocuments } from 'lib/types/x-api/document'
import { z } from 'zod'
import { prisma } from 'lib/server/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
      query: z.object({
        agent: zAgent,
        profileId: z.string().optional(),
        since: z.string().datetime().optional(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, agent, since },
  } = validator.data

  const headers = new Headers()
  try {
    if (profileId) {
      const prismaDocument = await prisma.document.findFirst({
        where: {
          profileId,
          agent: inverseFunctionalIdentifier.parse(agent),
        },
      })
      if (prismaDocument) {
        let parsedDocument = document.parse(prismaDocument)
        headers.set('Content-Type', 'application/json')
        return NextResponse.json(parsedDocument)
      } else {
        return NextResponse.json(
          { message: 'Document not found' },
          { status: 404, headers }
        )
      }
    } else {
      const prismaDocuments = await prisma.document.findMany({
        where: {
          agent: inverseFunctionalIdentifier.parse(agent),
          timestamp: { gte: since },
        },
        select: {
          profileId: true,
        },
      })
      if (prismaDocuments) {
        let parsedDocuments = prismaDocuments
          .map((prismaDocument) => prismaDocument.profileId)
          .filter((id): id is string => {
            return !!id
          })
        headers.set('Content-Type', 'application/json')
        return NextResponse.json(parsedDocuments)
      }
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}

export async function POST(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
      body: document,
      query: z.object({
        agent: zAgent,
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, agent },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { profileId } })
    await prisma.document
      .create({
        data: {
          profileId,
          agent: {
            connectOrCreate: {
              create: actorToPrisma(agent),
              where: inverseFunctionalIdentifier.parse(agent),
            },
          },
          contents:
            old !== null
              ? JSON.stringify(
                  mergeDocuments(
                    JSON.parse(old.contents),
                    JSON.parse(body.contents)
                  )
                )
              : body.contents,
        },
      })
      .then(() => {
        return NextResponse.json(undefined, { status: 204 })
      })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}

export async function PUT(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
      body: document,
      query: z.object({
        agent: z.string().transform((value, ctx) => {
          try {
            let json = JSON.parse(value)
            const agent = zAgent.safeParse(json)
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
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, agent },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { profileId } })
    await prisma.document
      .create({
        data: {
          profileId,
          agent: {
            connectOrCreate: {
              create: actorToPrisma(agent),
              where: inverseFunctionalIdentifier.parse(agent),
            },
          },
          contents:
            old !== null
              ? JSON.stringify(
                  mergeDocuments(
                    JSON.parse(old.contents),
                    JSON.parse(body.contents)
                  )
                )
              : body.contents,
        },
      })
      .then(() => {
        return NextResponse.json(undefined, { status: 204 })
      })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}

export async function DELETE(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
      query: z.object({
        agent: zAgent,
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, agent },
  } = validator.data

  const headers = new Headers()
  try {
    prisma.document
      .deleteMany({
        where: {
          profileId,
          agent: inverseFunctionalIdentifier.parse(agent),
        },
      })
      .then(() => {
        return NextResponse.json(undefined, { status: 204 })
      })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}
