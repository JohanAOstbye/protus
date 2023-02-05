// AlertBanner.stories.ts|tsx

import React, { ReactPropTypes } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlertBanner from 'components/elements/AlertBanner';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-AlertBanner
  * to learn how to generate automatic titles
  */
  title: 'Elements/AlertBanner',
  component: AlertBanner,
} as ComponentMeta<typeof AlertBanner>;

export const Primary: ComponentStory<typeof AlertBanner> = () => <AlertBanner/>;