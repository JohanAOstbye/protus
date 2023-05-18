import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { Course } from 'lib/sanity/sanity.queries'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import CoursePage from 'components/pages/CoursePage'
import { courseMock, coursesMock } from 'stories/assets/mockdata/course'
import { CourseContextProvider } from 'components/context/courseContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Pages/CoursePage',
  component: CoursePage,
} as Meta<typeof CoursePage>

export const Primary: StoryFn<typeof CoursePage> = () => (
  <SessionProvider>
    <CourseContextProvider course={courseMock} courses={coursesMock}>
      <Layout>
        <CoursePage course={courseMock} />
      </Layout>
    </CourseContextProvider>
  </SessionProvider>
)
