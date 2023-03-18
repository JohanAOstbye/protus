import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FilterSection from 'components/elements/FilterSection'
import FilterItem from 'components/elements/FilterItem'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-FilterSection
   * to learn how to generate automatic titles
   */
  title: 'Elements/FilterSection',
  component: FilterSection,
} as ComponentMeta<typeof FilterSection>

export const Primary: ComponentStory<typeof FilterSection> = () => (
  <FilterSection title={'selection'} canSelect={false}>
    <FilterItem title={'test'} checked={false} />
    <FilterItem title={'test1'} checked={true} />
    <FilterItem title={'test2'} checked={true} />
    <FilterItem title={'test3'} checked={false} />
  </FilterSection>
)
