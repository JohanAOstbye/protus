// ActivityPage.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import { ActivityPage as Page } from 'components/pages/activity/ActivityPage'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'
import { activityMock } from 'stories/assets/mockdata/activity'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ActivityPage',
  component: Page,
} as Meta<typeof Page>

export const ActivityPage: StoryFn<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page activity={activityMock} />
    </Layout>
  </StoryContext>
)
