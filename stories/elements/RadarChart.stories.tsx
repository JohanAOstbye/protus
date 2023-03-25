// RadarChart.stories.ts|tsx

import React, { ReactPropTypes } from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import RadarChart from 'components/elements/RadarChart'

const data = [
  {
    taste: 'fruity',
    chardonay: 25,
  },
  {
    taste: 'bitter',
    chardonay: 83,
  },
  {
    taste: 'heavy',
    chardonay: 95,
  },
  {
    taste: 'strong',
    chardonay: 58,
  },
  {
    taste: 'sunny',
    chardonay: 40,
  },
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Elements/RadarChart',
  component: RadarChart,
} as ComponentMeta<typeof RadarChart>

export const Primary: ComponentStory<typeof RadarChart> = () => (
  <RadarChart data={data} />
)
