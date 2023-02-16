import { Prisma } from '@prisma/client'
import { z } from 'zod'
import {
  actor,
  actorToPrisma,
  agent,
  anongroup,
  group,
  identifiedgroup,
  inverseFunctionalIdentifier,
} from './actor'

export const authority = agent.or(
  group.refine(
    (data) => data.member && data.member.length == 2,
    'if the authority is a group, then it has to have 2 members'
  )
)

export type authorityType = z.infer<typeof authority>

export const authorityToPrisma = (
  authority: authorityType,
  userId?: string
) => {
  let prismaAuthority: Prisma.ActorCreateNestedOneWithoutAuthoritiesInput = {}

  let identifier = inverseFunctionalIdentifier.parse(authority)

  let anon = anongroup.safeParse(authority)

  if (anon.success) {
    prismaAuthority = {
      connectOrCreate: {
        create: {
          objectType: anon.data.objectType,
          member: anon.data.member
            ? {
                connect: anon.data.member.map((member) => {
                  return inverseFunctionalIdentifier.parse(member)
                }),
              }
            : undefined,
        },
        where: identifier,
      },
    }
  }
  let identified = identifiedgroup.safeParse(actor)

  if (identified.success) {
    prismaAuthority = {
      connectOrCreate: {
        create: {
          objectType: identified.data.objectType,
          member: identified.data.member
            ? {
                connect: identified.data.member.map((member) => {
                  return inverseFunctionalIdentifier.parse(member)
                }),
              }
            : undefined,
          ...inverseFunctionalIdentifier.parse(identified),
          account: identified.data.account
            ? {
                connectOrCreate: {
                  create: identified.data.account,
                  where: {
                    name_homePage: identified.data.account,
                  },
                },
              }
            : undefined,
        },
        where: identifier,
      },
    }
  }

  let parsedagent = agent.safeParse(actor)

  if (parsedagent.success) {
    prismaAuthority = {
      connectOrCreate: {
        create: {
          objectType: parsedagent.data.objectType,
          ...inverseFunctionalIdentifier.parse(parsedagent),
          account: parsedagent.data.account
            ? {
                connectOrCreate: {
                  create: parsedagent.data.account,
                  where: {
                    name_homePage: parsedagent.data.account,
                  },
                },
              }
            : undefined,
          profile: userId ? { connect: { id: userId } } : undefined,
        },
        where: identifier,
      },
    }
  }

  return prismaAuthority
}
