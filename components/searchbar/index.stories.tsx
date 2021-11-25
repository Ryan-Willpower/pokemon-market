import { SearchBar } from "."

import type { Meta, Story } from "@storybook/react"

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as Meta

export const Primary: Story = () => (
  <div className="p-5 bg-steel-gray font-poppins text-white">
    <SearchBar onChange={() => {}} />
  </div>
)
