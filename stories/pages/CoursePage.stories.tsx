import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Course } from 'lib/sanity/sanity.queries'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import CoursePage from 'components/pages/CoursePage'

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
      <CoursePage data={mock2} />
    </Layout>
  </SessionProvider>
)
