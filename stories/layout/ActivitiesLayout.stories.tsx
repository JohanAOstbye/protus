import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ActivitiesLayout } from 'components/layout/ActivitiesLayout'
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

const filterList = [
  { text: 'Examples', type: 'Examples', checked: false },
  { text: 'Exercises', type: 'Exercises', checked: true },
  { text: 'Challenges', type: 'Challenges', checled: true },
]
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Layout/ActivitiesLayout',
  component: ActivitiesLayout,
} as ComponentMeta<typeof ActivitiesLayout>

export const Primary: ComponentStory<typeof ActivitiesLayout> = () => (
  <CourseContextProvider course={mock} courses={mock2}>
    <ActivitiesLayout filterList={filterList}></ActivitiesLayout>
  </CourseContextProvider>
)
