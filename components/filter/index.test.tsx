import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { Filter } from "."

describe("<Filter />", () => {
  it("should render without any crash", () => {
    render(<Filter name="set" data={["set a", "set b", "set c"]} />)
  })

  it("should display selected data", async () => {
    render(<Filter name="set" data={["set a", "set b", "set c"]} />)

    fireEvent.click(screen.getByText("set"))

    await waitFor(() => screen.getAllByRole("menu"))

    fireEvent.click(screen.getByText("set a"))

    expect(screen.getAllByText("set a")).not.toHaveLength(0)
  })
})
