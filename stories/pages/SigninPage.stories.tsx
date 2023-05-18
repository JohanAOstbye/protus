// SignInPage.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import { SignInPage as Page } from 'components/pages/auth/SignInPage'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/SignInPage',
  component: Page,
} as Meta<typeof Page>

export const SignInPage: StoryFn<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page csrfToken={'prank'} />
    </Layout>
  </StoryContext>
)
