import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CourseChip from 'components/elements/CourseChip'

const mock = 'Python'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-CourseChip
   * to learn how to generate automatic titles
   */
  title: 'Elements/CourseChip',
  component: CourseChip,
} as ComponentMeta<typeof CourseChip>

export const Primary: ComponentStory<typeof CourseChip> = () => (
  <CourseChip name={mock} />
)
