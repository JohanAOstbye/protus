import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import Filter from 'components/blocks/Filter'
import FilterWrapper from 'stories/assets/FilterWrapper'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Filter
   * to learn how to generate automatic titles
   */
  title: 'Block/Filter',
  component: Filter,
} as Meta<typeof Filter>

export const Primary: StoryFn<typeof Filter> = () => (
  <FilterWrapper
    options={{
      type: ['Challenge', 'Exercise'],
      courses: [
        { name: 'course 1', chapters: ['chapter 1', 'chapter 2', 'chapter 3'] },
        { name: 'course 2', chapters: ['chapter 1', 'chapter 2', 'chapter 3'] },
        { name: 'course 3', chapters: ['chapter 1', 'chapter 2', 'chapter 3'] },
      ],
    }}
  />
)
