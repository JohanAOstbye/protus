// ProfilePage.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from 'components/layout'
import { StoryContext } from 'stories/assets/StoryContext'
import { ProfilePage as Page } from 'components/pages/auth/ProfilePage'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ProfilePage',
  component: Page,
} as ComponentMeta<typeof Page>

export const ProfilePage: ComponentStory<typeof Page> = () => (
  <StoryContext>
    <Layout>
      <Page />
    </Layout>
  </StoryContext>
)
