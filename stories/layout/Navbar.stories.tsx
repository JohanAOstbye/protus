import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Navbar from 'components/layout/Navbar';
import { Course } from 'lib/sanity/sanity.queries';

const mock:Course = {
  _id: 'string1',
  name: 'Java',
  page: {
      _id:'sad'
  },
  slugs: [{title:"Chapter 1", slug:"lol"},{title:"Chapter 2", slug:"lol"}]
}

const mock2:Course[] = [{
  _id: 'string2',
  name: 'Java',
  page: {
      _id:'sad'
  },
  slugs: [{title:"Chapter 1", slug:"lol"},{title:"Chapter 2", slug:"lol"}]
},
  
  {
  _id: 'string2',
  name: 'Python',
  page: {
      _id:'sad'
  },
  slugs: [{title:"Chapter 1", slug:"lol"},{title:"Chapter 2", slug:"lol"}]
}]

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-Navbar
  * to learn how to generate automatic titles
  */
  title: 'Layout/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Primary: ComponentStory<typeof Navbar> = () => <Navbar courses={mock2} selectedCourse={mock}  />;