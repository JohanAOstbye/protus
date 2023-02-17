import React  from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'components/elements/Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-Button
  * to learn how to generate automatic titles
  */
  title: 'Elements/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button children="button"/>;