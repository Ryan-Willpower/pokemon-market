import { render, screen } from "@testing-library/react"
import { SearchBar } from "."

describe("<HeaderSection />", () => {
  it("should render without any crash", () => {
    render(<SearchBar />)
  })

  it("should render search icon image", () => {
    render(<SearchBar />)

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("should render search icon image with alt message", () => {
    render(<SearchBar />)

    expect(screen.getByRole("img")).toHaveAttribute("alt", "search icon")
  })

  it("should render input box with placeHolder", () => {
    render(<SearchBar />)

    expect(screen.getByPlaceholderText("Search by Name")).toBeInTheDocument()
  })
})
