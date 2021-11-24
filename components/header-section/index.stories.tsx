import { HeaderSection } from "."

import type { Meta, Story } from "@storybook/react"

export default {
  title: "Components/HeaderSection",
  component: HeaderSection,
} as Meta

export const Primary: Story = () => (
  <div className="bg-steel-gray font-poppins text-white">
    <HeaderSection />
  </div>
)
