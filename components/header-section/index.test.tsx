import { render, screen } from "@testing-library/react"
import { HeaderSection } from "."

describe("<HeaderSection />", () => {
  it("should render without any crash", () => {
    render(<HeaderSection />)
  })

  it("should render header", () => {
    render(<HeaderSection />)

    expect(screen.getByText("Pokemon market")).toBeInTheDocument()
  })
})
