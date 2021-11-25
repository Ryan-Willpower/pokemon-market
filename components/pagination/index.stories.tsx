import { useState } from "react"

import { Pagination } from "."

import type { Meta, Story } from "@storybook/react"
import type { PaginationProps } from "./type"

export default {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<PaginationProps> = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const [pageCount, _] = useState(4)

  return (
    <div className="bg-ebony-clay font-poppins text-white p-12">
      <Pagination
        pageCount={pageCount}
        pageIndex={pageIndex}
        setPage={setPageIndex}
      />
    </div>
  )
}

export const Primary = Template.bind({})
Primary.args = {}
