// ActivitiesFilter.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivitiesFilter from 'components/blocks/ActivitiesFilter'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ActivitiesFilter
   * to learn how to generate automatic titles
   */
  title: 'Elements/ActivitiesFilter',
  component: ActivitiesFilter,
} as ComponentMeta<typeof ActivitiesFilter>

export const Primary: ComponentStory<typeof ActivitiesFilter> = () => (
  <ActivitiesFilter />
)
