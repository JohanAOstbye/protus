// Sidebar.stories.ts|tsx

import React, { ReactPropTypes } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from 'components/layout/Sidebar';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-Sidebar
  * to learn how to generate automatic titles
  */
  title: 'Layout/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = () => <Sidebar />;