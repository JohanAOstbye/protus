// ActivityList.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivityList from 'components/blocks/ActivityList'
import { ActivityCardProps } from 'components/elements/ActivityCard'

const mock: ActivityCardProps[] = [
  {
    url: '/',
    name: 'Time Time Operator with an extremely long title hehe',
    type: 'Exercise',
  },
  { url: '/', name: 'Variables', type: 'Challenge' },
  { url: '/', name: 'Time Operator', type: 'Exercise' },
  { url: '/', name: 'Lists', type: 'Challenge' },
  { url: '/', name: 'If and Else', type: 'Exercise' },
  { url: '/', name: 'For loops', type: 'Challenge' },
  { url: '/', name: 'Observebale and Observer', type: 'Exercise' },
  { url: '/', name: 'streams & stuff', type: 'Challenge' },
  { url: '/', name: 'Time Operator', type: 'Exercise' },
  { url: '/', name: 'Variables', type: 'Challenge' },
  { url: '/', name: 'Time Operator', type: 'Exercise' },
  { url: '/', name: 'Lists', type: 'Challenge' },
  { url: '/', name: 'If and Else', type: 'Exercise' },
  { url: '/', name: 'For loops', type: 'Challenge' },
  { url: '/', name: 'Observebale and Observer', type: 'Exercise' },
  { url: '/', name: 'streams & stuff', type: 'Challenge' },
]

const mock2 = {}
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ActivityList
   * to learn how to generate automatic titles
   */
  title: 'Block/ActivityList',
  component: ActivityList,
} as ComponentMeta<typeof ActivityList>

export const Primary: ComponentStory<typeof ActivityList> = () => (
  <ActivityList list={mock} />
)
