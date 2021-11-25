import { render, screen } from "@testing-library/react"
import { SearchBar } from "."

describe("<SearchBar />", () => {
  it("should render without any crash", () => {
    render(<SearchBar onChange={() => {}} />)
  })

  it("should render search icon image", () => {
    render(<SearchBar onChange={() => {}} />)

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("should render search icon image with alt message", () => {
    render(<SearchBar onChange={() => {}} />)

    expect(screen.getByRole("img")).toHaveAttribute("alt", "search icon")
  })

  it("should render input box with placeHolder", () => {
    render(<SearchBar onChange={() => {}} />)

    expect(screen.getByPlaceholderText("Search by Name")).toBeInTheDocument()
  })
})
