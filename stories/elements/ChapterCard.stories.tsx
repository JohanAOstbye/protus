import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import ChapterCard from 'components/elements/ChapterCard'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ChapterCard
   * to learn how to generate automatic titles
   */
  title: 'Elements/ChapterCard',
  component: ChapterCard,
} as Meta<typeof ChapterCard>

export const Primary: StoryFn<typeof ChapterCard> = () => (
  <ChapterCard title={'Strings'} url={'/'} />
)
