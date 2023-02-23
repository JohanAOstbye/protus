import { defineEndpoints } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
import {
  createEtag,
  decodeEtag,
  document,
  mergeDocuments,
} from 'lib/types/x-api/document'
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
          const newEtag = createEtag(prismaDocument)
          res.setHeader('ETag', newEtag)
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
            timestamp: true,
          },
        })
        if (prismaDocuments) {
          let parsedDocuments = prismaDocuments
            .map((prismaDocument) => prismaDocument.profileId)
            .filter((id): id is string => {
              return !!id
            })
          let lastModified = prismaDocuments
            .map((doc) => doc.timestamp)
            .filter((id): id is Date => {
              return !!id
            })
            .sort()
            .reverse()[0]
          res.setHeader('Last-Modified', lastModified.toISOString())
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
        headers: { 'If-None-Match': ifNoneMatch, 'If-Match': ifMatch },
        body,
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      try {
        const old = await prisma.document.findUnique({ where: { profileId } })
        if (old !== null) {
          const etag = createEtag(old)
          if (ifNoneMatch === etag) {
            res.status(304).end()
            return
          }
          if (ifMatch && ifMatch !== etag) {
            res.status(412).end()
            return
          }
        }
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
        headers: { 'If-None-Match': ifNoneMatch, 'If-Match': ifMatch },
        body,
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      try {
        const old = await prisma.document.findUnique({ where: { profileId } })
        if (old !== null) {
          const etag = createEtag(old)
          if (ifNoneMatch === etag) {
            res.status(304).end()
            return
          }
          if (ifMatch && ifMatch !== etag) {
            res.status(412).end()
            return
          }
        }
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
        headers: { 'If-Match': ifMatch },
        query: { activityId, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      try {
        if (profileId) {
          if (ifMatch && ifMatch !== '*' && typeof ifMatch === 'string') {
            const old = await prisma.document.findFirst({
              where: {
                profileId,
                activityId,
              },
            })
            if (old === null) res.status(400).end()
            if (old !== null) {
              const etag = createEtag(old)
              if (ifMatch !== etag) {
                res.status(412).end()
                return
              }
            }
            await prisma.document.deleteMany({
              where: {
                profileId,
                activityId,
              },
            })
          } else {
            if (ifMatch && ifMatch !== '*' && typeof ifMatch !== 'string') {
              ifMatch.forEach(async (etag) => {
                const old = await prisma.document.findFirst({
                  where: {
                    profileId,
                    activityId,
                  },
                })
                if (old === null) res.status(400).end()
                if (old !== null) {
                  const newEtag = createEtag(old)
                  if (etag !== newEtag) {
                    res.status(412).end()
                    return
                  }
                }
                await prisma.document.deleteMany({
                  where: {
                    profileId,
                    activityId,
                  },
                })
              })
            }
            await prisma.document.deleteMany({
              where: {
                profileId,
                activityId,
              },
            })
          }
        } else {
          await prisma.document.deleteMany({
            where: {
              activityId,
            },
          })
        }
      } catch (error) {
        console.error(error)
        res.status(400).end()
      }
    },
  },
})
