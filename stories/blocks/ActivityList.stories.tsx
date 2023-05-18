// ActivityList.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import ActivityList from 'components/blocks/ActivityList'
import { activitiesMock } from 'stories/assets/mockdata/activity'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ActivityList
   * to learn how to generate automatic titles
   */
  title: 'Block/ActivityList',
  component: ActivityList,
} as Meta<typeof ActivityList>

export const Primary: StoryFn<typeof ActivityList> = () => (
  <ActivityList list={activitiesMock} />
)
