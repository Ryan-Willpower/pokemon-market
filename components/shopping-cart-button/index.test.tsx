import { render, screen } from "@testing-library/react"
import { ShoppingCartButton } from "."

describe("<ShoppingCartButton />", () => {
  it("should render without any crash", () => {
    render(<ShoppingCartButton />)
  })

  it("should render shopping bag icon image", () => {
    render(<ShoppingCartButton />)

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("should render shopping bag icon image with alt message", () => {
    render(<ShoppingCartButton />)

    expect(screen.getByRole("img")).toHaveAttribute("alt", "shopping bag icon")
  })

  it("should render cross icon image with alt message when shopping cart is open", () => {
    render(<ShoppingCartButton openCart />)

    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "close shopping cart icon"
    )
  })
})
