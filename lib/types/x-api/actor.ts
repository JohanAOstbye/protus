import { z } from 'zod'

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
  id: z.string().uuid(),
  name: z.string().optional(),
})

export const agent = z
  .object({
    objectType: z.literal('Agent').optional(),
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

export const group = z
  .object({
    objectType: z.literal('group').optional(),
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

export const actor = agent.or(group)

export type actorType = z.infer<typeof actor>
