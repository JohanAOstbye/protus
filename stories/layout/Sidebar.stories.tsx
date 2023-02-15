// Sidebar.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from 'components/layout/Sidebar';
import { Chapter } from 'lib/sanity/sanity.queries';

const mockdata:Chapter[] = [{_id: "test", title:'chapter1',slug:'ole',},{_id: "test2", title:'chapter2',slug:'dole'}]

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-Sidebar
  * to learn how to generate automatic titles
  */
  title: 'Layout/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

export const Primary: ComponentStory<typeof Sidebar> = () => <Sidebar  courseSlug="livet" chapters={mockdata} />;