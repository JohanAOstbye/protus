import { apiValidation } from 'lib/server/rest'
import { NextResponse } from 'next/server'
import {
  actorSelect,
  agent as zAgent,
  inverseFunctionalIdentifier,
  person,
} from 'lib/types/x-api/actor'
import { z } from 'zod'
import { prisma } from 'lib/server/db'

export async function POST(request: Request) {
  const validator = await apiValidation(
    request.clone(),
    {
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
    return NextResponse.json(returnPerson, { status: 200, headers })
  } catch (error) {
    console.error(error)
    return NextResponse.json(undefined, { status: 400, headers })
  }
}
