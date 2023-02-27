// ActivitiesMenu.stories.ts|tsx

import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import ActivitiesMenu from 'components/blocks/ActivitiesMenu'

const mock = [
  { text: 'Examples', type: 'Examples', checked: false },
  { text: 'Exercises', type: 'Exercises', checked: true },
  { text: 'Challenges', type: 'Challenges', checled: true },
]

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-ActivitiesMenu
   * to learn how to generate automatic titles
   */
  title: 'Block/ActivitiesMenu',
  component: ActivitiesMenu,
} as ComponentMeta<typeof ActivitiesMenu>

export const Primary: ComponentStory<typeof ActivitiesMenu> = () => (
  <ActivitiesMenu filterList={mock} />
)
