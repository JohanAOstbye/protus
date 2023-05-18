// Sidebar.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import Sidebar from 'components/layout/Sidebar'
import { Chapter } from 'lib/sanity/sanity.queries'
import ContextWrapper from 'components/context/ContextWrapper'

const currentCourse = 'Java'
const mockdata: Chapter[] = [
  { _id: 'test', title: 'Variables and Operators', slug: 'ole' },
  { _id: 'test2', title: 'String', slug: 'dole' },
  { _id: 'test3', title: 'Boolean Expressions', slug: 'doffen' },
  { _id: 'test4', title: 'If-Else', slug: 'donald' },
  { _id: 'test5', title: 'Two-Dimensional Arrays', slug: 'donald' },
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Sidebar
   * to learn how to generate automatic titles
   */
  title: 'Layout/Sidebar',
  component: Sidebar,
} as Meta<typeof Sidebar>

export const Primary: StoryFn<typeof Sidebar> = () => (
  <ContextWrapper>
    <Sidebar />
  </ContextWrapper>
)
