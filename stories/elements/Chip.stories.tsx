// Chip.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Chip from 'components/elements/Chip'

const mock = 'Examples'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Chip
   * to learn how to generate automatic titles
   */
  title: 'Elements/Chip',
  component: Chip,
} as ComponentMeta<typeof Chip>

export const Primary: ComponentStory<typeof Chip> = () => <Chip text={mock} />
