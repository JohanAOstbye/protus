import React, { ReactPropTypes } from 'react'

import { StoryFn, Meta } from '@storybook/react'
import BarChart from 'components/elements/BarChart'

const data = [
  {
    country: 'Strings',
    burger: 0,
  },
  {
    country: 'If-Else',
    burger: 6,
  },
  {
    country: 'While loops',
    burger: 11,
  },
  {
    country: 'Inheritance',
    burger: 7,
  },
  {
    country: 'AI',
    burger: 1,
  },
  {
    country: 'AL',
    burger: 3,
  },
  {
    country: 'AM',
    burger: 4,
  },
  {
    country: 'Strings2',
    burger: 0,
  },
  {
    country: 'If-Else2',
    burger: 6,
  },
  {
    country: 'While loops2',
    burger: 11,
  },
  {
    country: 'Inheritance2',
    burger: 7,
  },
  {
    country: 'AI2',
    burger: 1,
  },
  {
    country: 'AL2',
    burger: 3,
  },
  {
    country: 'AM2',
    burger: 4,
  },
]
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Elements/BarChart',
  component: BarChart,
} as Meta<typeof BarChart>

export const Primary: StoryFn<typeof BarChart> = () => <BarChart data={data} />
