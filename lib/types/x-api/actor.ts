import { Actor, Prisma } from '@prisma/client'
import { Session } from 'next-auth'
import { z } from 'zod'
import { user } from '../auth/user'

export const account = z.object({
  homePage: z.string().url(),
  name: z.string(),
})

export const inverseFunctionalIdentifier = z
  .object({
    mbox: z.string().startsWith('mailto:').optional(),
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
export const inverseFunctionalIdentifierReducer = z.object({
  mbox: z.string().startsWith('mailto:').optional(),
  mbox_sha1sum: z.string().optional(),
  openid: z.string().url().optional(),
  account: account.optional(),
})

export const inverseFunctionalIdentifierFilter = z
  .object({
    mbox: z.string().startsWith('mailto:').optional(),
    mbox_sha1sum: z.string().optional(),
    openid: z.string().url().optional(),
    account: account.optional(),
  })
  .transform((value) => {
    const obj: Prisma.ActorWhereUniqueInput = {}
    if (value.mbox) {
      obj.mbox = value.mbox
    }
    if (value.mbox_sha1sum) {
      obj.mbox_sha1sum = value.mbox_sha1sum
    }
    if (value.openid) {
      obj.openid = value.openid
    }

    if (value.account) {
      obj.accountName_accountHomePage = {
        accountName: value.account.name,
        accountHomePage: value.account.homePage,
      }
    }

    if (Object.keys(obj).length === 0) return undefined
    return obj
  })

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

export const group = z.union([identifiedgroup, anongroup])

export const actor = z.union([agent, group])

export type actorType = z.infer<typeof actor>
export type groupType = z.infer<typeof group>
export type anonGroupType = z.infer<typeof anongroup>
export type identifiedGroupType = z.infer<typeof identifiedgroup>
export type agentType = z.infer<typeof agent>

export const actorToPrisma = (actor: actorType, userId?: string) => {
  let prismaActor: Prisma.ActorUncheckedCreateInput = {}
  let anon = anongroup.safeParse(actor)
  let identified = identifiedgroup.safeParse(actor)
  let parsedagent = agent.safeParse(actor)

  if (anon.success) {
    prismaActor = {
      objectType: anon.data.objectType,
      member: anon.data.member
        ? {
            connect: anon.data.member.map((member) => {
              return {
                id: member.id,
                ...inverseFunctionalIdentifierFilter.parse(member),
              }
            }),
          }
        : undefined,
    }
  }

  if (identified.success) {
    prismaActor = {
      objectType: identified.data.objectType,
      member: identified.data.member
        ? {
            connect: identified.data.member.map((member) => {
              return {
                id: member.id,
                ...inverseFunctionalIdentifierFilter.parse(member),
              }
            }),
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
    }
  }

  if (parsedagent.success) {
    prismaActor = {
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
      profileId: user ? userId : undefined,
    }
  }
  return prismaActor
}

export const actorFromPrisma = (
  prismaActor: Actor & {
    member?: Actor[]
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
    member?: Actor[]
  }
): groupType => {
  let actorObject: groupType = {
    objectType: 'Group',
    name: prismaActor.name == null ? undefined : prismaActor.name,
    mbox: prismaActor.mbox == null ? undefined : prismaActor.mbox,
    mbox_sha1sum:
      prismaActor.mbox_sha1sum == null ? undefined : prismaActor.mbox_sha1sum,
    openid: prismaActor.openid == null ? undefined : prismaActor.openid,
    account:
      prismaActor.accountName && prismaActor.accountHomePage
        ? {
            name: prismaActor.accountName,
            homePage: prismaActor.accountHomePage,
          }
        : undefined,
    member: prismaActor.member
      ? prismaActor.member
          .filter((member) => member.objectType == 'Agent')
          .map((member) => agent.parse(actorFromPrisma(member)))
      : undefined,
  }

  const result = group.safeParse(actorObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid group')
  }
  return result.data
}

export const anonGroupFromPrisma = (
  prismaActor: Actor & {
    member?: Actor[]
  }
): anonGroupType => {
  let actorObject: groupType = {
    objectType: 'Group',
    member: prismaActor.member
      ? prismaActor.member
          .filter((member) => member.objectType == 'Agent')
          .map((member) => agent.parse(actorFromPrisma(member)))
      : undefined,
  }

  const result = anongroup.safeParse(actorObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid anongroup')
  }
  return result.data
}

export const agentFromPrisma = (prismaActor: Actor & {}): agentType => {
  let actorObject: actorType
  if (prismaActor.objectType !== 'Agent') throw new Error('Not an agent')

  actorObject = {
    objectType: prismaActor.objectType,
    name: prismaActor.name == null ? undefined : prismaActor.name,
    mbox: prismaActor.mbox == null ? undefined : prismaActor.mbox,
    mbox_sha1sum:
      prismaActor.mbox_sha1sum == null ? undefined : prismaActor.mbox_sha1sum,
    openid: prismaActor.openid == null ? undefined : prismaActor.openid,
    account:
      prismaActor.accountName && prismaActor.accountHomePage
        ? {
            name: prismaActor.accountName,
            homePage: prismaActor.accountHomePage,
          }
        : undefined,
  }

  const result = agent.safeParse(actorObject)
  if (!result.success) {
    console.error(result.error)
    throw new Error('Invalid agent')
  }
  return result.data
}

export const actorInclude: Prisma.ActorInclude = {
  member: true,
}

export const actorSelect: Prisma.ActorSelect = {
  id: true,
  objectType: true,
  name: true,
  mbox: true,
  mbox_sha1sum: true,
  openid: true,
  accountName: true,
  accountHomePage: true,
  member: {
    select: {
      id: true,
      objectType: true,
      name: true,
      mbox: true,
      mbox_sha1sum: true,
      openid: true,
      accountName: true,
      accountHomePage: true,
    },
  },
}
