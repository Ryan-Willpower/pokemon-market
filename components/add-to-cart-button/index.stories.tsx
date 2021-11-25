import { AddToCartButton } from "."

import type { Meta, Story } from "@storybook/react"
import { AddToCartButtonProps } from "./type"

export default {
  title: "Components/AddToCartButton",
  component: AddToCartButton,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<AddToCartButtonProps> = args => (
  <div className="bg-steel-gray font-poppins text-white p-10 w-96 h-44 flex justify-center items-center">
    <AddToCartButton {...args} />
  </div>
)

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  isDisable: true,
}
Secondary.storyName = "Disabled"
