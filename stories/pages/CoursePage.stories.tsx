import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Course } from 'lib/sanity/sanity.queries'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import CoursePage from 'components/pages/CoursePage'
import { courseMock } from 'stories/assets/mockdata/course'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Pages/CoursePage',
  component: CoursePage,
} as ComponentMeta<typeof CoursePage>

export const Primary: ComponentStory<typeof CoursePage> = () => (
  <SessionProvider>
    <Layout>
      <CoursePage course={courseMock} />
    </Layout>
  </SessionProvider>
)
