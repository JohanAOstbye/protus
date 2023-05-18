// FrontPage.stories.ts|tsx

import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import { FrontPage as Page } from 'components/pages/FrontPage'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/FrontPage',
  component: Page,
} as Meta<typeof Page>

export const FrontPage: StoryFn<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
export const FrontPageAuthenticated: StoryFn<typeof Page> = () => (
  <StoryContext authenticated>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
