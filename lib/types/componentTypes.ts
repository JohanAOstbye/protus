import { activityType } from '@prisma/client'

export type Block = {
  name: string
  data: any
}

export type courseFilterType = {
  name: string
  chapters: string[]
}
export type filterType = {
  courses: courseFilterType[]
  activitytype: Extract<activityType, 'Challenge' | 'Exercise'>[]
}
