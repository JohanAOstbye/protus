import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input as Element, InputProps } from 'components/elements/Input'

const inputMock: InputProps = {
  placeholder: 'Username...',
}

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-Input
   * to learn how to generate automatic titles
   */
  title: 'Elements/Input',
  component: Element,
} as ComponentMeta<typeof Element>

export const Primary: ComponentStory<typeof Element> = () => (
  <div>
    <Element {...inputMock} />
    <Element {...inputMock} color="dark" />
  </div>
)
