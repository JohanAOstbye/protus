import { Actor, Prisma } from '@prisma/client'
import { z } from 'zod'
import {
  actor,
  agent,
  agentFromPrisma,
  agentType,
  anonGroupFromPrisma,
  anonGroupType,
  anongroup,
  identifiedgroup,
  inverseFunctionalIdentifierFilter,
  inverseFunctionalIdentifierReducer,
} from './actor'

export const authority = agent.or(
  anongroup.refine(
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

  let identifier = inverseFunctionalIdentifierFilter.parse(authority)
  console.log('auth', identifier, authority)

  let anon = anongroup.safeParse(authority)

  if (anon.success) {
    prismaAuthority = {
      create: {
        objectType: anon.data.objectType,
        member: anon.data.member
          ? {
              connectOrCreate: anon.data.member.map((member) => {
                let identifier = inverseFunctionalIdentifierFilter.parse(member)
                return {
                  create: actorToPrisma(member),
                  where: identifier ? identifier : { id: 'not an id' },
                }
              }),
            }
          : undefined,
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
                connect: identified.data.member
                  .map((member) => {
                    return inverseFunctionalIdentifierFilter.parse(member)
                  })
                  .filter((member) => member !== undefined)
                  .map((member) => member as Prisma.ActorWhereUniqueInput),
              }
            : undefined,
          ...inverseFunctionalIdentifierReducer.parse(identified),
          accountName:
            identified.data.account &&
            identified.data.account.name &&
            identified.data.account.homePage
              ? identified.data.account.name
              : undefined,
          accountHomePage:
            identified.data.account &&
            identified.data.account.homePage &&
            identified.data.account.name
              ? identified.data.account.homePage
              : undefined,
        },
        where: identifier ? identifier : { id: 'not a id' },
      },
    }
  }

  let parsedagent = agent.safeParse(actor)

  if (parsedagent.success) {
    prismaAuthority = {
      connectOrCreate: {
        create: {
          objectType: parsedagent.data.objectType,
          ...inverseFunctionalIdentifierReducer.parse(parsedagent),
          accountName:
            parsedagent.data.account &&
            parsedagent.data.account.name &&
            parsedagent.data.account.homePage
              ? parsedagent.data.account.name
              : undefined,
          accountHomePage:
            parsedagent.data.account &&
            parsedagent.data.account.homePage &&
            parsedagent.data.account.name
              ? parsedagent.data.account.homePage
              : undefined,
          profile: userId ? { connect: { id: userId } } : undefined,
        },
        where: identifier ? identifier : { id: 'not a id' },
      },
    }
  }

  return prismaAuthority
}

export const authorityFromPrisma = (
  prismaAuthority: Actor & {
    member?: Actor[]
  }
): agentType | anonGroupType => {
  if (prismaAuthority.objectType === 'Agent') {
    return agentFromPrisma(prismaAuthority)
  } else {
    return anonGroupFromPrisma(prismaAuthority)
  }
}
