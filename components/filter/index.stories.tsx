import { Filter, FilterDropdownPosition } from "."

import type { Meta, Story } from "@storybook/react"
import { FilterProps } from "./type"

export default {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<FilterProps> = args => (
  <div className="bg-ebony-clay font-poppins text-white p-12">
    <Filter {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  name: "set",
  data: ["set a", "set b", "set c", "set d"],
  onUpdateFilter: () => {},
}
Primary.storyName = "Left side"

export const Secondary = Template.bind({})
Secondary.args = {
  name: "set",
  data: ["set a", "set b", "set c", "set d"],
  position: FilterDropdownPosition.Right,
  onUpdateFilter: () => {},
}
Secondary.storyName = "Right side"
