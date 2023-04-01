import { apiValidation } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
import { document, mergeDocuments } from 'lib/types/x-api/document'
import { z } from 'zod'
import { prisma } from 'lib/server/db'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const validator = apiValidation(
    request.clone(),
    {
      query: z.object({
        activityId: IRI,
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
    query: { profileId, activityId, since },
  } = validator.data

  const headers = new Headers()
  try {
    if (profileId) {
      const prismaDocument = await prisma.document.findFirst({
        where: {
          profileId,
          activityId,
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
          activityId,
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
  const validator = apiValidation(
    request.clone(),
    {
      body: document,
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, activityId },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { profileId } })
    await prisma.document
      .create({
        data: {
          profileId,
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
  const validator = apiValidation(
    request.clone(),
    {
      body: document,
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, activityId },
    body,
  } = validator.data

  const headers = new Headers()
  try {
    const old = await prisma.document.findUnique({ where: { profileId } })
    await prisma.document
      .create({
        data: {
          profileId,
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
  const validator = apiValidation(
    request.clone(),
    {
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const {
    query: { profileId, activityId },
  } = validator.data

  const headers = new Headers()
  try {
    prisma.document
      .deleteMany({
        where: {
          profileId,
          activityId,
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
