import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from 'components/layout/Navbar'
import { Course } from 'lib/sanity/sanity.queries'
import { courseMock, coursesMock } from 'stories/assets/mockdata/course'
import { SessionProvider } from 'next-auth/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Navbar
   * to learn how to generate automatic titles
   */
  title: 'Layout/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

export const Primary: ComponentStory<typeof Navbar> = () => (
  <SessionProvider>
    <Navbar courses={coursesMock} selectedCourse={courseMock} />
  </SessionProvider>
)
