// ChapterPage.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChapterPage from '../../components/pages/chapter/ChapterPage'
import { chapterPageMock } from 'stories/assets/mockdata/course'
import Layout from 'components/layout'
import ChapterLayout from 'components/layout/ChapterLayout'
import StroyContext from 'stories/assets/storyContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ChapterPage',
  component: ChapterPage,
} as ComponentMeta<typeof ChapterPage>

export const Primary: ComponentStory<typeof ChapterPage> = () => (
  <StroyContext>
    <Layout>
      <ChapterLayout>
        <ChapterPage data={chapterPageMock} />
      </ChapterLayout>
    </Layout>
  </StroyContext>
)
