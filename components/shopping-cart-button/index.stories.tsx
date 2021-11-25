import { ShoppingCartButton } from "."

import type { Meta, Story } from "@storybook/react"
import type { ShoppingCartButtonProps } from "./type"

export default {
  title: "Components/ShoppingCartButton",
  component: ShoppingCartButton,
} as Meta

const Template: Story<ShoppingCartButtonProps> = args => (
  <ShoppingCartButton {...args} />
)

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.storyName = "Cart is open"
Secondary.args = {
  openCart: true,
}
