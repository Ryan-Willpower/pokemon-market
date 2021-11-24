import React from "react"
import { render, screen } from "@testing-library/react"

import { PokemonCard } from "."
import { mockPokemonData } from "../../__mocks__/dataMock"

import type { Image } from "./type"

const imageData: Image = {
  url: mockPokemonData.data[0].images.small,
  alt: mockPokemonData.data[0].name,
}
const card = {
  name: mockPokemonData.data[0].name,
  price: mockPokemonData.data[0].cardmarket.prices.averageSellPrice,
  total: mockPokemonData.data[0].set.total,
}

describe("<PokemonCard />", () => {
  it("should renders a component without crash", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )
  })

  it("should render an image", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )

    expect(screen.getByRole("img")).toBeInTheDocument()
  })

  it("should contain alternative message in the card image", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )

    expect(screen.getByRole("img")).toHaveAttribute("alt", imageData.alt)
  })

  it("should render a pokemon name", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )

    expect(screen.getByText(card.name)).toBeInTheDocument()
  })

  it("should render a pokemon price", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )

    expect(screen.getByText(`$ ${card.price}`)).toBeInTheDocument()
  })

  it("should render a pokemon card's total in the stock", () => {
    render(
      <PokemonCard
        image={imageData}
        name={card.name}
        price={card.price}
        cardTotals={card.total}
      />
    )

    expect(screen.getByText(`${card.total} Card(s)`)).toBeInTheDocument()
  })
})
