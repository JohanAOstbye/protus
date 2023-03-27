// FrontPage.stories.ts|tsx

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FrontPage as Page } from 'components/pages/FrontPage'
import Layout from 'components/layout'
import StoryContext from 'stories/assets/StoryContext'
import { SessionProvider } from 'next-auth/react'
import { Session } from '@prisma/client'

const mock = 'Java'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/FrontPage',
  component: Page,
} as ComponentMeta<typeof Page>

export const FrontPage: ComponentStory<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
export const FrontPageAuthenticated: ComponentStory<typeof Page> = () => (
  <StoryContext authenticated>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
