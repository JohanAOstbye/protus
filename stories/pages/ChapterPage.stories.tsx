// ChapterPage.stories.ts|tsx

import React, { ReactPropTypes } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChapterPage from '../../components/pages/chapter/ChapterPage';

const mockdata:React.ComponentProps<typeof ChapterPage> = {
  data: {
    _id: 'morenDin',
    title: 'ch1',
    coverImage: undefined,
    date: 'SURF',
    excerpt: 'hallo?',
    author: {
      name: 'Padejo',
      picture: undefined
    },
    slug: 'te',
    content: ['kelly','slater'],
    course: 'Java'
  }
}

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'ChapterPage',
  component: ChapterPage,
} as ComponentMeta<typeof ChapterPage>;

export const Primary: ComponentStory<typeof ChapterPage> = () => <ChapterPage {...mockdata}/>;