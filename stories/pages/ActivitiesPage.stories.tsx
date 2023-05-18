// ActivitiesPage.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import { ActivitiesPage as Page } from 'components/pages/activity/ActivitiesPage'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'
import { filterType } from 'lib/types/componentTypes'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */

  title: 'Pages/ActivitiesPage',
  component: Page,
} as Meta<typeof Page>

const initialfilter: filterType = {
  type: ['Exercise', 'Challenge'],
  courses: [
    {
      name: 'course 1',
      chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
    },
    {
      name: 'course 2',
      chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
    },
    {
      name: 'course 3',
      chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
    },
  ],
}

export const ActivitiesPage: StoryFn<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page initialfilter={initialfilter} />
    </Layout>
  </StoryContext>
)
