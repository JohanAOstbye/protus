import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CourseContextProvider } from 'components/context/courseContext'
import { Course } from 'lib/sanity/sanity.queries'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import CoursePage from 'components/pages/CoursePage'

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
  title: 'Pages/CoursePage',
  component: CoursePage,
} as ComponentMeta<typeof CoursePage>

export const Primary: ComponentStory<typeof CoursePage> = () => (
  <SessionProvider>
    <Layout>
      {/* <CourseContextProvider
        course={mock}
        courses={mock2}
      ></CourseContextProvider> */}
      <CoursePage data={mock2} />
    </Layout>
  </SessionProvider>
)
