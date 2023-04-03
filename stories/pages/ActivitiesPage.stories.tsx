// ActivitiesPage.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ActivitiesPage as Page } from 'components/pages/activity/ActivitiesPage'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ActivitiesPage',
  component: Page,
} as ComponentMeta<typeof Page>

export const ActivitiesPage: ComponentStory<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
