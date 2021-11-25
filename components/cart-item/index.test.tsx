import React from "react"
import { render } from "@testing-library/react"
import { CartItem } from "."
import { Card } from "../../@types/pokemon"
import { mockPokemonData } from "../../__mocks__/dataMock"

jest.mock("react")

describe("<CartItem />", () => {
  it("should render without any crash", () => {
    ;(React.useContext as jest.Mock).mockReturnValue({
      amount: {
        [mockPokemonData.data[0].id]: {
          total: 1,
          inStock: 1,
          price: 2,
        },
        setCart: () => {},
        setAmount: () => {},
      },
    })

    render(<CartItem item={mockPokemonData.data[0] as Card} />)
  })
})
