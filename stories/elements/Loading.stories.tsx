// Loading.stories.ts|tsx

import React, { ReactPropTypes } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from 'components/elements/Loading';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Elements/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Primary: ComponentStory<typeof Loading> = () => <Loading/>;