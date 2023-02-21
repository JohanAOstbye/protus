import React  from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DescriptionBlock } from 'components/elements/DescriptionBlock';

const title = 'Declaration'

const content: string[] = ['// Here we are gonna use an integer variabel we call "age"', 
        '// This is the declaration, Java initilizes the variable as "0 int age"', 
        '// Age is now declared and initilized. You can now use it furhter, like age = 16']

const content2 = ['kelly', 'slater']

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-DescriptionBlock
  * to learn how to generate automatic titles
  */
  title: 'Elements/DescriptionBlock',
  component: DescriptionBlock,
} as ComponentMeta<typeof DescriptionBlock>;

export const Primary: ComponentStory<typeof DescriptionBlock> = () => <DescriptionBlock title={title} content={content}/>;