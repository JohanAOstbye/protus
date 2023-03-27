import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CourseLayout } from 'components/layout/CourseLayout'
import { CourseContextProvider } from 'components/context/courseContext'
import { Course } from 'lib/sanity/sanity.queries'

const mock: Course = {
  _id: 'string1',
  name: 'Java',
  page: {
    _id: 'sad',
  },
  slugs: [
    { title: 'Variables and Operators', slug: 'ole' },
    { title: 'String', slug: 'dole' },
    { title: 'Boolean Expressions', slug: 'doffen' },
    { title: 'If-Else', slug: 'donald' },
    { title: 'Two-Dimensional Arrays', slug: 'donald' },
  ],
}

const mock2: Course[] = [
  {
    _id: 'string2',
    name: 'Java',
    page: {
      _id: 'sad',
    },
    slugs: [
      { title: 'Chapter 1', slug: 'lol' },
      { title: 'Chapter 2', slug: 'lol' },
    ],
  },

  {
    _id: 'string2',
    name: 'Python',
    page: {
      _id: 'sad',
    },
    slugs: [
      { title: 'Chapter 1', slug: 'lol' },
      { title: 'Chapter 2', slug: 'lol' },
    ],
  },
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Layout/CourseLayout',
  component: CourseLayout,
} as ComponentMeta<typeof CourseLayout>

export const Primary: ComponentStory<typeof CourseLayout> = () => (
  <CourseContextProvider course={mock} courses={mock2}>
    <CourseLayout></CourseLayout>
  </CourseContextProvider>
)
