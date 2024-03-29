import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CourseLayout } from 'components/layout/CourseLayout'
import { CourseContextProvider } from 'components/context/courseContext'
import { courseMock, coursesMock } from 'stories/assets/mockdata/course'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Layout/CourseLayout',
  component: CourseLayout,
} as ComponentMeta<typeof CourseLayout>

export const Primary: ComponentStory<typeof CourseLayout> = () => (
  <CourseContextProvider course={courseMock} courses={coursesMock}>
    <CourseLayout></CourseLayout>
  </CourseContextProvider>
)
