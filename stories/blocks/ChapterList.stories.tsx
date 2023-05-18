// ChapterList.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import ChapterList from 'components/blocks/ChapterList'
import chapter from 'schemas/chapter'
import { courseMock } from 'stories/assets/mockdata/course'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ChapterList
   * to learn how to generate automatic titles
   */
  title: 'Block/ChapterList',
  component: ChapterList,
} as Meta<typeof ChapterList>

export const Primary: StoryFn<typeof ChapterList> = () => (
  <ChapterList
    list={
      courseMock.chapters?.map((chapter) => {
        return { ...chapter, url: `/c/${courseMock.slug}/${chapter.slug}` }
      }) || []
    }
  />
)
