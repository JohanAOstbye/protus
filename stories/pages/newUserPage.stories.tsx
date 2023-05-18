import React from 'react'
import { StoryFn, Meta } from '@storybook/react'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import { NewUserPage } from 'components/pages/auth/new-user'
import { StoryContext } from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Pages/NewUserPage',
  component: NewUserPage,
} as Meta<typeof NewUserPage>

export const Primary: StoryFn<typeof NewUserPage> = () => (
  <StoryContext>
    <Layout>
      <NewUserPage />
    </Layout>
  </StoryContext>
)
