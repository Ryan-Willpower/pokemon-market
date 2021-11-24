import { PokemonCard } from "."

import { mockPokemonData } from "../../__mocks__/dataMock"

import type { Meta, Story } from "@storybook/react"

export default {
  title: "Components/PokemonCard",
  component: PokemonCard,
} as Meta

export const Primary: Story = () => (
  <PokemonCard
    image={{
      url: mockPokemonData.data[0].images.small,
      alt: mockPokemonData.data[0].name,
    }}
    name={mockPokemonData.data[0].name}
    price={mockPokemonData.data[0].cardmarket.prices.averageSellPrice}
    cardTotals={mockPokemonData.data[0].set.total}
  />
)

Primary.storyName = "1 Card on page"

export const Secondary: Story = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-4">
    {[...Array(20)].map((_, index) => (
      <PokemonCard
        key={index}
        image={{
          url: mockPokemonData.data[0].images.small,
          alt: mockPokemonData.data[0].name,
        }}
        name={mockPokemonData.data[0].name}
        price={mockPokemonData.data[0].cardmarket.prices.averageSellPrice}
        cardTotals={mockPokemonData.data[0].set.total}
      />
    ))}
  </div>
)
