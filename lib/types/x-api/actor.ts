import { Prisma } from '@prisma/client'
import { Session } from 'next-auth'
import { z } from 'zod'
import { user } from '../auth/user'

export const account = z.object({
  homePage: z.string().url(),
  name: z.string(),
})

export const inverseFunctionalIdentifier = z.object({
  mbox: z.string().email().optional(),
  mbox_sha1sum: z.string().optional(),
  openid: z.string().url().optional(),
  account: account.optional(),
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
  .merge(actorBase)
  .merge(inverseFunctionalIdentifier)
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

export const anongroup = z
  .object({
    objectType: z.literal('Group').optional(),
    member: z.array(agent),
  })
  .merge(actorBase)

export const identifiedgroup = z
  .object({
    objectType: z.literal('Group').optional(),
    member: z.array(agent).optional(),
  })
  .merge(actorBase)
  .merge(inverseFunctionalIdentifier)
  .refine(
    (data) => {
      let standardKeys = ['mbox', 'mbox_sha1sum', 'openid', 'account']
      let keys = Object.keys(data).filter((key) => standardKeys.includes(key))
      return (keys.length === 0 && data.member) || keys.length === 1
    },
    {
      message:
        "you must have one and only one of the following indientfier keys: 'mbox', 'mbox_sha1sum', 'openid', 'account'",
      path: ['identifier'],
    }
  )

export const group = anongroup.or(identifiedgroup)

export const actor = agent.or(group)

export type actorType = z.infer<typeof actor>

export const actorToPrisma = (actor: actorType, userId?: string) => {
  let prismaActor: Prisma.ActorCreateInput = {}
  let anon = anongroup.safeParse(actor)

  if (anon.success) {
    let memberList: Prisma.ActorCreateWithoutActorInput[] =
      anon.data.member.map((member) => actorToPrisma(member))
    prismaActor = {
      objectType: anon.data.objectType,
      member: {
        createMany: {
          data: memberList,
        },
      },
    }
  }
  let identified = identifiedgroup.safeParse(actor)

  if (identified.success) {
    prismaActor = {
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
