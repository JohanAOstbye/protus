// Loading.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { StoryFn, Meta } from '@storybook/react'
import Loading from 'components/elements/Loading'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Elements/Loading',
  component: Loading,
} as Meta<typeof Loading>

export const Primary: StoryFn<typeof Loading> = () => <Loading />
