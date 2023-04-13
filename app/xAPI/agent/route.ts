import { apiValidation } from 'lib/server/rest'
import { NextResponse } from 'next/server'
import {
  actorSelect,
  agent as zAgent,
  person,
  inverseFunctionalIdentifierFilter,
} from 'lib/types/x-api/actor'
import { z } from 'zod'
import { prisma } from 'lib/server/db'

export async function POST(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
      query: z.object({
        agent: zAgent,
      }),
    },
    { 'content-type': ['application/json'] }
  )
  if (!validator.success) {
    return NextResponse.json(validator.error.json, validator.error.options)
  }
  const { agent } = validator.data.query

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  try {
    const prismaAgents = await prisma.actor.findMany({
      where: {
        objectType: 'Agent',
        ...inverseFunctionalIdentifierFilter.parse(agent),
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
      if (agent.accountName && agent.accountHomePage)
        returnPerson.account = returnPerson.account
          ? [
              ...returnPerson.account,
              { name: agent.accountName, homePage: agent.accountHomePage },
            ]
          : [{ name: agent.accountName, homePage: agent.accountHomePage }]
    })
    return NextResponse.json(returnPerson, { status: 200, headers })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}
