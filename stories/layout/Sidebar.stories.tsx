// Sidebar.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from 'components/layout/Sidebar';

const mockdata = [{title:'chapter1',slug:'ole',},{title:'chapter2',slug:'dole'}]

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-Sidebar
  * to learn how to generate automatic titles
  */
  title: 'Layout/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = () => <Sidebar chapters={mockdata} courseSlug="livet" />;