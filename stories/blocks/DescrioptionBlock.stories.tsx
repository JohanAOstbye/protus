import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Serializable } from '@portabletext/react'

import { TypedObject } from '@portabletext/types'
import { Content } from 'components/blocks/Content'

const test = [
  {
    _key: '89f217aa451a',
    _type: 'descriptionBlock',
    content: [
      {
        _key: 'd087c52abd2f',
        _type: 'block',
        children: [
          {
            _key: '020960e34b17',
            _type: 'span',
            marks: [],
            text: 'lol',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
      {
        _key: '5165ce0ec548',
        _type: 'block',
        children: [
          {
            _key: '8800d68e43af',
            _type: 'span',
            marks: [],
            text: '',
          },
        ],
        markDefs: [],
        style: 'normal',
      },
    ],
    title: 'desc',
  },
]

const content: string[] = [
  '// Here we are gonna use an integer variabel we call "age"',
  '// This is the declaration, Java initilizes the variable as "0 int age"',
  '// Age is now declared and initilized. You can now use it furhter, like age = 16',
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-DescriptionBlock
   * to learn how to generate automatic titles
   */
  title: 'Block/DescriptionBlock',
  component: Content,
} as ComponentMeta<typeof Content>

export const Primary: ComponentStory<typeof Content> = () => (
  <Content value={test} />
)
