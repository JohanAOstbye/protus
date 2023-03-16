// SignInPage.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SignInPage } from 'components/pages/auth/SignInPage'
import Layout from 'components/layout'
import StroyContext from 'stories/assets/storyContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/SignInPage',
  component: SignInPage,
} as ComponentMeta<typeof SignInPage>

export const Primary: ComponentStory<typeof SignInPage> = () => (
  <StroyContext>
    <Layout>
      <SignInPage csrfToken={'prank'} />
    </Layout>
  </StroyContext>
)
