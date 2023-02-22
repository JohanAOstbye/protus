import { defineEndpoints } from 'lib/server/rest'
import {
  actorSelect,
  agent,
  inverseFunctionalIdentifier,
  person,
} from 'lib/types/x-api/actor'
import { z } from 'zod'
import { prisma } from 'lib/server/db'

export default defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: z.object({
        agent: agent,
      }),
    },
    output: [
      {
        status: 200,
        contentType: 'application/json',
        schema: person,
      },
      {
        status: 403,
        contentType: 'application/json',
        schema: undefined,
      },
    ],
    handler: async ({
      res,
      req: {
        query: { agent },
      },
    }) => {
      res.setHeader('content-type', 'application/json')
      try {
        const prismaAgents = await prisma.actor.findMany({
          where: {
            objectType: 'Agent',
            ...inverseFunctionalIdentifier.parse(agent),
          },
          select: actorSelect,
        })
        let returnPerson: z.infer<typeof person> = {
          objectType: 'Person',
        }
        prismaAgents.forEach((agent) => {
          if (agent.name)
            returnPerson.name = returnPerson.name
              ? [...returnPerson.name, agent.name]
              : [agent.name]
          if (agent.mbox)
            returnPerson.mbox = returnPerson.mbox
              ? [...returnPerson.mbox, agent.mbox]
              : [agent.mbox]
          if (agent.mbox_sha1sum)
            returnPerson.mbox_sha1sum = returnPerson.mbox_sha1sum
              ? [...returnPerson.mbox_sha1sum, agent.mbox_sha1sum]
              : [agent.mbox_sha1sum]
          if (agent.openid)
            returnPerson.openid = returnPerson.openid
              ? [...returnPerson.openid, agent.openid]
              : [agent.openid]
          if (agent.account)
            returnPerson.account = returnPerson.account
              ? [...returnPerson.account, agent.account]
              : [agent.account]
        })
        res.status(200).json(returnPerson)
      } catch (error) {
        console.error(error)
        res.status(400).end()
      }
    },
  },
})
