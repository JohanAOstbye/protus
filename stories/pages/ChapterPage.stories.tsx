// ChapterPage.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { StoryFn, Meta } from '@storybook/react'
import ChapterPage from '../../components/pages/chapter/ChapterPage'
import { chapterMock } from 'stories/assets/mockdata/chapter'
import Layout from 'components/layout'
import CourseLayout from 'components/layout/CourseLayout'
import { StoryContext } from 'stories/assets/StoryContext'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Pages/ChapterPage',
  component: ChapterPage,
} as Meta<typeof ChapterPage>

export const Primary: StoryFn<typeof ChapterPage> = () => (
  <StoryContext>
    <Layout>
      <CourseLayout>
        <ChapterPage chapter={chapterMock} course={'java'} />
      </CourseLayout>
    </Layout>
  </StoryContext>
)
