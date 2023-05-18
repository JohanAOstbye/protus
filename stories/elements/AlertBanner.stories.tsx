// AlertBanner.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { StoryFn, Meta } from '@storybook/react'
import AlertBanner from 'components/elements/AlertBanner'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-AlertBanner
   * to learn how to generate automatic titles
   */
  title: 'Elements/AlertBanner',
  component: AlertBanner,
} as Meta<typeof AlertBanner>

export const Primary: StoryFn<typeof AlertBanner> = () => <AlertBanner />
