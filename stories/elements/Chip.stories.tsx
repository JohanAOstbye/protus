// Chip.stories.ts|tsx

import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import Chip from 'components/elements/Chip'

const mock = 'Examples'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Chip
   * to learn how to generate automatic titles
   */
  title: 'Elements/Chip',
  component: Chip,
} as Meta<typeof Chip>

export const Primary: StoryFn<typeof Chip> = () => <Chip text={mock} />
