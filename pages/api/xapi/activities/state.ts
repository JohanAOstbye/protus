import { defineEndpoints } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
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
        activityId: IRI,
        agent: agent,
        registration: z.string().uuid().optional(),
        stateId: z.string().optional(),
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
        query: { activityId, agent, registration, stateId, since },
      },
    }) => {
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
          res.setHeader('content-type', 'application/json')
          res.status(200).json(parsedDocument)
        } else {
          res.status(404).end()
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
        agent: agent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
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
        query: { activityId, agent, registration, stateId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
        agent: agent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
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
        query: { activityId, agent, registration, stateId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
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
        agent: agent,
        registration: z.string().uuid().optional(),
        stateId: z.string(),
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
        query: { activityId, agent, registration, stateId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      if (stateId) {
        try {
          await prisma.document.deleteMany({
            where: {
              stateId,
              registration,
              activityId,
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
                registration,
                activityId,
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
