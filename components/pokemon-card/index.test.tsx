import React from "react"
import { render, screen } from "@testing-library/react"

import { PokemonCard } from "."
import { mockPokemonData } from "../../__mocks__/dataMock"

import type { Card } from "../../@types/pokemon"

describe("<PokemonCard />", () => {
  it("should renders a component without crash", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)
  })

  it("should render an image", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)

    expect(screen.getAllByRole("img")).not.toHaveLength(0)
  })

  it("should contain alternative message in the card image", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)

    expect(screen.getAllByRole("img")[0]).toHaveAttribute(
      "alt",
      mockPokemonData.data[0].name
    )
  })

  it("should render a pokemon name", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)

    expect(screen.getByText(mockPokemonData.data[0].name)).toBeInTheDocument()
  })

  it("should render a pokemon price", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)

    expect(
      screen.getByText(
        `$ ${mockPokemonData.data[0].cardmarket.prices.averageSellPrice}`
      )
    ).toBeInTheDocument()
  })

  it("should render a pokemon card's total in the stock", () => {
    render(<PokemonCard card={mockPokemonData.data[0] as Card} />)

    expect(
      screen.getByText(`${mockPokemonData.data[0].set.total} Card(s)`)
    ).toBeInTheDocument()
  })
})
