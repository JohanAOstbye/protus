import { Activity } from '@prisma/client'
import { ActivityCardProps } from 'components/elements/ActivityCard'

export const activityMock: Activity = {
  id: 'id',
  updatedAt: null,
  stored: null,
  name: 'Activity name',
  url: 'http://pawscomp2.sis.pitt.edu/pcex/index.html?lang=JAVA&set=artithmetic.inc_dec_operators&ch=JDecInc2&svc=masterygrids',
  kcs: [],
  chapterId: 'chapterId',
  type: 'Challenge',
}

export const activitiesMock: ActivityCardProps[] = [
  {
    ...activityMock,
    name: 'Time Time Operator with an extremely long title hehe',
    type: 'Exercise',
  },
  { ...activityMock, name: 'Variables', type: 'Challenge' },
  { ...activityMock, name: 'Time Operator', type: 'Exercise' },
  { ...activityMock, name: 'Lists', type: 'Challenge' },
  { ...activityMock, name: 'If and Else', type: 'Exercise' },
  { ...activityMock, name: 'For loops', type: 'Challenge' },
  { ...activityMock, name: 'Observebale and Observer', type: 'Exercise' },
  { ...activityMock, name: 'streams & stuff', type: 'Challenge' },
  { ...activityMock, name: 'Time Operator', type: 'Exercise' },
  { ...activityMock, name: 'Variables', type: 'Challenge' },
  { ...activityMock, name: 'Time Operator', type: 'Exercise' },
  { ...activityMock, name: 'Lists', type: 'Challenge' },
  { ...activityMock, name: 'If and Else', type: 'Exercise' },
  { ...activityMock, name: 'For loops', type: 'Challenge' },
  { ...activityMock, name: 'Observebale and Observer', type: 'Exercise' },
  { ...activityMock, name: 'streams & stuff', type: 'Challenge' },
]
