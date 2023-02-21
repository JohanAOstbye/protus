import { Actor, Prisma, XapiAccount } from '@prisma/client'
import { Session } from 'next-auth'
import { z } from 'zod'
import { user } from '../auth/user'

export const account = z.object({
  homePage: z.string().url(),
  name: z.string(),
})

export const inverseFunctionalIdentifier = z
  .object({
    mbox: z.string().email().optional(),
    mbox_sha1sum: z.string().optional(),
    openid: z.string().url().optional(),
    account: account.optional(),
  })
  .refine(
    (data) => {
      let standardKeys = ['mbox', 'mbox_sha1sum', 'openid', 'account']
      let keys = Object.keys(data).filter((key) => standardKeys.includes(key))
      return keys.length === 1
    },
    {
      message:
        "you must have one and only one of the following indientfier keys: 'mbox', 'mbox_sha1sum', 'openid', 'account'",
      path: ['identifier'],
    }
  )

export const actorBase = z.object({
  id: z.string().uuid().optional(),
  name: z.string().optional(),
})

export const agent = z
  .object({
    objectType: z.literal('Agent').optional(),
    user: user.optional(),
    userId: z.string().uuid().optional(),
  })
  .and(actorBase)
  .and(inverseFunctionalIdentifier)

export const person = z.object({
  objectType: z.literal('Person'),
  name: z.array(z.string()).optional(),
  mbox: z.array(z.string().email()).optional(),
  mbox_sha1sum: z.array(z.string()).optional(),
  openid: z.array(z.string().url()).optional(),
  account: z.array(account).optional(),
})

export const anongroup = z
  .object({
    objectType: z.literal('Group'),
    member: z.array(agent),
  })
  .merge(actorBase)

export const identifiedgroup = z
  .object({
    objectType: z.literal('Group'),
    member: z.array(agent).optional(),
  })
  .and(actorBase)
  .and(inverseFunctionalIdentifier)

export const group = anongroup.or(identifiedgroup)

export const actor = agent.or(group)

export type actorType = z.infer<typeof actor>
export type groupType = z.infer<typeof group>
export type agentType = z.infer<typeof agent>

export const actorToPrisma = (actor: actorType, userId?: string) => {
  let prismaActor: Prisma.ActorCreateInput = {}
  let anon = anongroup.safeParse(actor)

  if (anon.success) {
    prismaActor = {
      objectType: anon.data.objectType,
      member: anon.data.member
        ? {
            connect: anon.data.member.map((member) => {
              return {
                id: member.id,
                ...inverseFunctionalIdentifier.parse(member),
              }
            }),
          }
        : undefined,
    }
  }
  let identified = identifiedgroup.safeParse(actor)

  if (identified.success) {
    prismaActor = {
      objectType: identified.data.objectType,
      member: identified.data.member
        ? {
            connect: identified.data.member.map((member) => {
              return {
                id: member.id,
                ...inverseFunctionalIdentifier.parse(member),
              }
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
    }
  }

  let parsedagent = agent.safeParse(actor)

  if (parsedagent.success) {
    prismaActor = {
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
      profile: user ? { connect: { id: userId } } : undefined,
    }
  }
  return prismaActor
}

export const actorFromPrisma = (
  prismaActor: Actor & {
    account?: XapiAccount | undefined
    member?: (Actor & {
      account?: XapiAccount | undefined
    })[]
  }
): actorType => {
  if (prismaActor.objectType === 'Agent') {
    return agentFromPrisma(prismaActor)
  } else {
    return groupFromPrisma(prismaActor)
  }
}

export const groupFromPrisma = (
  prismaActor: Actor & {
    account?: XapiAccount | undefined
    member?: (Actor & {
      account?: XapiAccount | undefined
    })[]
  }
): groupType => {
  let actorObject: groupType = {
    objectType: 'Group',
    name: prismaActor.name == null ? undefined : prismaActor.name,
    mbox: prismaActor.mbox == null ? undefined : prismaActor.mbox,
    mbox_sha1sum:
      prismaActor.mbox_sha1sum == null ? undefined : prismaActor.mbox_sha1sum,
    openid: prismaActor.openid == null ? undefined : prismaActor.openid,
    account: prismaActor.account,
    member: prismaActor.member
      ? prismaActor.member
          .filter((member) => member.objectType == 'Agent')
          .map((member) => agent.parse(actorFromPrisma(member)))
      : undefined,
  }

  const result = group.safeParse(actorObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid actor')
  }
  return result.data
}

export const agentFromPrisma = (
  prismaActor: Actor & {
    account?: XapiAccount | undefined
  }
): actorType => {
  let actorObject: actorType
  if (prismaActor.objectType !== 'Agent') throw new Error('Not an agent')

  actorObject = {
    objectType: prismaActor.objectType,
    name: prismaActor.name == null ? undefined : prismaActor.name,
    mbox: prismaActor.mbox == null ? undefined : prismaActor.mbox,
    mbox_sha1sum:
      prismaActor.mbox_sha1sum == null ? undefined : prismaActor.mbox_sha1sum,
    openid: prismaActor.openid == null ? undefined : prismaActor.openid,
    account: prismaActor.account,
  }

  const result = agent.safeParse(actorObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid actor')
  }
  return result.data
}

export const actorInclude: Prisma.ActorInclude = {
  member: {
    include: {
      account: true,
    },
  },
  account: true,
}

export const actorSelect: Prisma.ActorSelect = {
  id: true,
  objectType: true,
  name: true,
  mbox: true,
  mbox_sha1sum: true,
  openid: true,
  member: {
    select: {
      id: true,
      objectType: true,
      name: true,
      mbox: true,
      mbox_sha1sum: true,
      openid: true,
      account: true,
    },
  },
  account: true,
}
