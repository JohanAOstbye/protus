import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ChapterCard from 'components/elements/ChapterCard'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ChapterCard
   * to learn how to generate automatic titles
   */
  title: 'Elements/ChapterCard',
  component: ChapterCard,
} as ComponentMeta<typeof ChapterCard>

export const Primary: ComponentStory<typeof ChapterCard> = () => (
  <ChapterCard name={'Strings'} url={'/'} />
)
