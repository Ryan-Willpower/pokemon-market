import { render } from "@testing-library/react"

import { ShoppingCartOverlay } from "."

describe("<ShoppingCartOverlay />", () => {
  it("should render without any crash", () => {
    render(<ShoppingCartOverlay />)
  })
})
