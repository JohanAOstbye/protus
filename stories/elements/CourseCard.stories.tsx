import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import CourseCard from 'components/elements/CourseCard'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-CourseCard
   * to learn how to generate automatic titles
   */
  title: 'Elements/CourseCard',
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>

export const Primary: ComponentStory<typeof CourseCard> = () => (
  <CourseCard title="Java" />
)
