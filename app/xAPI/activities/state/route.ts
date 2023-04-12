import { apiValidation } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
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
        activityId: IRI,
        agent: zAgent,
        registration: z.string().uuid().optional(),
        stateId: z.string().optional(),
        since: z.string().datetime().optional(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { activityId, agent, registration, stateId, since },
  } = validator.data

  const headers = new Headers()
  try {
    if (stateId) {
      const prismaDocument = await prisma.document.findFirst({
        where: {
          stateId,
          registration,
          activityId,
          agent: inverseFunctionalIdentifier.parse(agent),
        },
      })
      if (prismaDocument) {
        let parsedDocument = document.parse(prismaDocument)
        headers.set('Content-Type', 'application/json')
        return NextResponse.json(parsedDocument, { headers })
      } else {
        return NextResponse.json(
          { message: 'Document not found' },
          { status: 404, headers }
        )
      }
    } else {
      const prismaDocuments = await prisma.document.findMany({
        where: {
          registration,
          activityId,
          agent: inverseFunctionalIdentifier.parse(agent),
          timestamp: { gte: since },
        },
        select: {
          stateId: true,
        },
      })
      if (prismaDocuments) {
        let parsedDocuments = prismaDocuments
          .map((prismaDocument) => prismaDocument.stateId)
          .filter((id): id is string => {
            return !!id
          })
        headers.set('Content-Type', 'application/json')
        return NextResponse.json(parsedDocuments, { headers })
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
        activityId: IRI,
        agent: zAgent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { activityId, agent, registration, stateId },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { stateId } })
    await prisma.document
      .create({
        data: {
          stateId,
          registration,
          activity: {
            connectOrCreate: {
              create: {
                id: activityId,
                objectType: 'Activity',
              },
              where: {
                id: activityId,
              },
            },
          },
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
        activityId: IRI,
        agent: zAgent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { activityId, agent, registration, stateId },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { stateId } })
    await prisma.document
      .create({
        data: {
          stateId,
          registration,
          activity: {
            connectOrCreate: {
              create: {
                id: activityId,
                objectType: 'Activity',
              },
              where: {
                id: activityId,
              },
            },
          },
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
        activityId: IRI,
        agent: zAgent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { activityId, agent, registration, stateId },
  } = validator.data

  const headers = new Headers()
  try {
    prisma.document
      .deleteMany({
        where: {
          stateId,
          registration,
          activityId,
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
