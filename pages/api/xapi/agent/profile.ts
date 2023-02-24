import { defineEndpoints } from 'lib/server/rest'
import {
  actorToPrisma,
  agent,
  inverseFunctionalIdentifier,
} from 'lib/types/x-api/actor'
import { document, mergeDocuments } from 'lib/types/x-api/document'
import { z } from 'zod'
import { prisma } from 'lib/server/db'

export default defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: z.object({
        agent: agent,
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
        query: { agent, profileId, since },
      },
    }) => {
      if (profileId) {
        const prismaDocument = await prisma.document.findFirst({
          where: {
            profileId,
            agent: inverseFunctionalIdentifier.parse(agent),
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
        agent: agent,
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
        query: { agent, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
        agent: agent,
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
        query: { agent, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
        agent: agent,
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
        query: { agent, profileId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      if (profileId) {
        try {
          await prisma.document.deleteMany({
            where: {
              profileId,

              agent: inverseFunctionalIdentifier.parse(agent),
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
                agent: inverseFunctionalIdentifier.parse(agent),
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
