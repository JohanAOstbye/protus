export type Block = {
  name: string
  data: any
}

export type activityTypes = 'exercise' | 'example' | 'challenge'

export type courseFilterType = {
  name: string
  chapters: string[]
}
export type filterType = {
  course: courseFilterType[]
  activitytype: activityTypes[]
}
