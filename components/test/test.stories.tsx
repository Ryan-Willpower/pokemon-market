import type { Meta, Story } from "@storybook/react"

import { Test } from "./test"

export default {
  title: "Components/Test",
  component: Test,
} as Meta

const Template: Story = args => <Test {...args} />

export const Primary = Template.bind({})
