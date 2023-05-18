import React from 'react'

import { StoryFn, Meta } from '@storybook/react'
import { Button } from 'components/elements/Button'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Button
   * to learn how to generate automatic titles
   */
  title: 'Elements/Button',
  component: Button,
} as Meta<typeof Button>

export const Primary: StoryFn<typeof Button> = () => <Button>Activities</Button>
