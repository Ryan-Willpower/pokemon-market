import { render, screen } from "@testing-library/react"
import { CartItem } from "."
import { Card } from "../../@types/pokemon"
import { mockPokemonData } from "../../__mocks__/dataMock"

describe("<CartItem item={mockPokemonData.data[0] as Card} />", () => {
  it("should render without any crash", () => {
    render(<CartItem item={mockPokemonData.data[0] as Card} />)
  })
})
