import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from 'components/layout'
import { SessionProvider } from 'next-auth/react'
import { NewUserPage } from 'components/pages/auth/new-user'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Index
   * to learn how to generate automatic titles
   */
  title: 'Pages/NewUserPage',
  component: NewUserPage,
} as ComponentMeta<typeof NewUserPage>

export const Primary: ComponentStory<typeof NewUserPage> = () => (
  <SessionProvider>
    <Layout>
      <NewUserPage />
    </Layout>
  </SessionProvider>
)
