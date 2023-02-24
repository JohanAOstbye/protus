import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import Filter from 'components/blocks/Filter'

const mock = [
  { text: 'Examples', type: 'Examples', checked: false },
  { text: 'Exercises', type: 'Exercises', checked: true },
  { text: 'Challenges', type: 'Challenges', checled: true },
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Filter
   * to learn how to generate automatic titles
   */
  title: 'Block/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>

export const Primary: ComponentStory<typeof Filter> = () => (
  <Filter filterList={mock} />
)
