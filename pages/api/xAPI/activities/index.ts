import { defineEndpoints } from 'lib/server/rest'
import { IRI } from 'lib/types/x-api'
import {
  actorSelect,
  actorToPrisma,
  agent,
  inverseFunctionalIdentifier,
  person,
} from 'lib/types/x-api/actor'
import { document } from 'lib/types/x-api/document'
import { z } from 'zod'
import { prisma } from 'lib/server/db'
import {
  activityObject,
  objectFromPrisma,
  objectInclude,
  objectSelect,
} from 'lib/types/x-api/object'

export default defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: z.object({
        activityId: IRI,
      }),
    },
    output: [
      {
        status: 200,
        contentType: 'application/json',
        schema: activityObject,
      },
    ],
    handler: async ({
      res,
      req: {
        query: { activityId },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      try {
        const prismaActivity = await prisma.object.findUnique({
          where: {
            id: activityId,
          },
        })
        if (!prismaActivity || prismaActivity.objectType !== 'Activity') {
          res.status(404).end()
          return
        }

        let object = objectFromPrisma(prismaActivity)

        const result = activityObject.safeParse(object)
        if (result.success) {
          res.status(200).json(result.data)
        }
      } catch (error) {
        console.error(error)
        res.status(400).end()
      }
    },
  },
})
