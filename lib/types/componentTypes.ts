import { activityType } from '@prisma/client'
import { activitiesRouterInput } from 'lib/server/trpc/api/router/activities'

export type Block = {
  name: string
  data: any
}

export type filterType = Omit<
  activitiesRouterInput['getAll']['filter'],
  'query'
>
