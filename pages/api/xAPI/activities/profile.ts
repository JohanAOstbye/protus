import { defineEndpoints } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
import { inverseFunctionalIdentifier } from 'lib/types/x-api/actor'
import { document, mergeDocuments } from 'lib/types/x-api/document'
import { z } from 'zod'
import { prisma } from 'lib/server/db'

export default defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: z.object({
        activityId: IRI,
        profileId: z.string().optional(),
        since: z.string().datetime().optional(),
      }),
    },
    output: [
      {
        status: 200,
        contentType: 'application/json',
        schema: document,
      },
      {
        status: 200,
        contentType: 'application/json',
        schema: z.array(z.string()),
      },
    ],
    handler: async ({
      res,
      req: {
        query: { activityId, profileId, since },
      },
    }) => {
      if (profileId) {
        const prismaDocument = await prisma.document.findFirst({
          where: {
            profileId,
            activityId,
          },
        })
        if (prismaDocument) {
          let parsedDocument = document.parse(prismaDocument)
          res.setHeader('content-type', 'application/json')
          res.status(200).json(parsedDocument)
        } else {
          res.status(404).end()
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
          res.setHeader('content-type', 'application/json')
          res.status(200).json(parsedDocuments)
        }
      }
    },
  },
  POST: {
    input: {
      contentType: 'application/json',
      body: document,
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    output: [
      {
        status: 204,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({
      res,
      req: {
        body,
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
            res.status(204).end()
          })
      } catch (error) {
        console.error(error)

        res.status(400).end()
      }
    },
  },
  PUT: {
    input: {
      contentType: 'application/json',
      body: document,
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    output: [
      {
        status: 204,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({
      res,
      req: {
        body,
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
            res.status(204).end()
          })
      } catch (error) {
        console.error(error)

        res.status(400).end()
      }
    },
  },
  DELETE: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: z.object({
        activityId: IRI,
        profileId: z.string(),
      }),
    },
    output: [
      {
        status: 204,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({
      res,
      req: {
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      if (profileId) {
        try {
          await prisma.document.deleteMany({
            where: {
              profileId,
              activityId,
            },
          })
        } catch (error) {
          console.error(error)
          res.status(400).end()
        }
      } else {
        {
          try {
            await prisma.document.deleteMany({
              where: {
                activityId,
              },
            })
          } catch (error) {
            console.error(error)
            res.status(400).end()
          }
        }
      }
    },
  },
})
