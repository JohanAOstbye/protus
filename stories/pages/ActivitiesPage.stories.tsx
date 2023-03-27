// ActivitiesPage.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivitiesPage from '../../components/pages/ActivitiesPage'
import Layout from 'components/layout'
import CourseLayout from 'components/layout/CourseLayout'
import StoryContext from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ActivitiesPage',
  component: ActivitiesPage,
} as ComponentMeta<typeof ActivitiesPage>

export const Primary: ComponentStory<typeof ActivitiesPage> = () => (
  <StoryContext>
    <Layout>
      <CourseLayout>
        <ActivitiesPage />
      </CourseLayout>
    </Layout>
  </StoryContext>
)
