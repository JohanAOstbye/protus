export type Block = {
  name: string
  data: any
}

export type activityTypes = 'exercise' | 'example' | 'test'

export type courseFilterType = {
  name: string
  chapters: string[]
}
export type filterType = {
  course: courseFilterType[]
  activitytype: activityTypes[]
}
