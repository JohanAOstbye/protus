import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FilterItem from 'components/elements/FilterItem'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-FilterItem
   * to learn how to generate automatic titles
   */
  title: 'Elements/FilterItem',
  component: FilterItem,
} as ComponentMeta<typeof FilterItem>

export const Primary: ComponentStory<typeof FilterItem> = () => (
  <div style={{ width: 'max-content' }}>
    <FilterItem title={'test'} checked={false} />
    <FilterItem title={'test'} checked={true} />
  </div>
)
