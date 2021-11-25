import { render, screen } from "@testing-library/react"

import { AddToCartButton } from "."

describe("<AddToCartButton />", () => {
  it("should render without any crash", () => {
    render(<AddToCartButton />)
  })

  it("should render search icon image", () => {
    render(<AddToCartButton />)

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("should render search icon image with alt message", () => {
    render(<AddToCartButton />)

    expect(screen.getByRole("img")).toHaveAttribute("alt", "shopping cart icon")
  })

  it("should disable the button when `isDisable` is pass to the properties", () => {
    render(<AddToCartButton isDisable />)

    expect(screen.getByText("Add to cart")).toBeDisabled()
  })
})
