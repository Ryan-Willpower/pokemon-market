import type { Meta } from "@storybook/react"

import { Test } from "./test"

export default {
  title: "Components/Test",
  component: Test,
} as Meta

const Template = args => <Test {...args} />

export const Primary = Template.bind({})
