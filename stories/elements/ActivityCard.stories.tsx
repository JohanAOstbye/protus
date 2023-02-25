import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivityCard from 'components/elements/ActivityCard'

const title = 'Time Operator'
const type = 'Exercise'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ActivityCard
   * to learn how to generate automatic titles
   */
  title: 'Elements/ActivityCard',
  component: ActivityCard,
} as ComponentMeta<typeof ActivityCard>

export const Primary: ComponentStory<typeof ActivityCard> = () => (
  <ActivityCard title={title} type={type} />
)
