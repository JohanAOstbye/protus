// Activities.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Activities from 'components/blocks/Activities'
import { ActivityCardProps } from 'components/elements/ActivityCard'

const mock: ActivityCardProps[] = [
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Variables', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Lists', type: 'Challenge' },
  { title: 'If and Else', type: 'Exercise' },
  { title: 'For loops', type: 'Challenge' },
  { title: 'Observebale and Observer', type: 'Exercise' },
  { title: 'streams & stuff', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Variables', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Lists', type: 'Challenge' },
  { title: 'If and Else', type: 'Exercise' },
  { title: 'For loops', type: 'Challenge' },
  { title: 'Observebale and Observer', type: 'Exercise' },
  { title: 'streams & stuff', type: 'Challenge' },
]

const mock2 = {}
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Activities
   * to learn how to generate automatic titles
   */
  title: 'Block/Activities',
  component: Activities,
} as ComponentMeta<typeof Activities>

export const Primary: ComponentStory<typeof Activities> = () => (
  <Activities activityList={mock} />
)
