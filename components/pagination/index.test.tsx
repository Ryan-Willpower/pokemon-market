import React, { Dispatch, SetStateAction } from "react"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"

import { Pagination } from "."

describe("<Pagination />", () => {
  it("should renders a component without crash", () => {
    render(<Pagination setPage={() => {}} pageCount={4} pageIndex={1} />)
  })

  it("should set a page when click next correctly", async () => {
    let pageIndex = 1
    let pageCount = 4
    const setPage = (value: number) => {
      pageIndex = value
    }

    const { rerender } = render(
      <Pagination
        setPage={setPage as Dispatch<SetStateAction<number>>}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    )

    fireEvent.click(screen.getByText("Next"))

    rerender(
      <Pagination
        setPage={setPage as Dispatch<SetStateAction<number>>}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    )

    expect(pageIndex).toBe(2)
  })

  it("should set a page when click previous correctly", async () => {
    let pageIndex = 2
    let pageCount = 4
    const setPage = (value: number) => {
      pageIndex = value
    }

    const { rerender } = render(
      <Pagination
        setPage={setPage as Dispatch<SetStateAction<number>>}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    )

    fireEvent.click(screen.getByText("Previous"))

    rerender(
      <Pagination
        setPage={setPage as Dispatch<SetStateAction<number>>}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    )

    expect(pageIndex).toBe(1)
  })
})
