// SignInPage.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignInPage as Page } from 'components/pages/auth/SignInPage'
import Layout from 'components/layout'
import StroyContext from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/SignInPage',
  component: Page,
} as ComponentMeta<typeof Page>

export const SignInPage: ComponentStory<typeof Page> = () => (
  <StroyContext>
    <Layout>
      <Page csrfToken={'prank'} />
    </Layout>
  </StroyContext>
)
