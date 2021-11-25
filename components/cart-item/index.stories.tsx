import { CartItem } from "."

import { mockPokemonData } from "../../__mocks__/dataMock"
import { CartContext, initialState } from "../../utils/cart"

import type { Meta, Story } from "@storybook/react"
import type { CartItemProps } from "./type"
import type { Card } from "../../@types/pokemon"

export default {
  title: "Components/CartItem",
  component: CartItem,
  parameters: {
    layout: "centered",
  },
} as Meta

const Template: Story<CartItemProps> = args => (
  <CartContext.Provider
    value={{
      ...initialState,
      amount: {
        [mockPokemonData.data[0].id]: {
          price: mockPokemonData.data[0].cardmarket.prices.averageSellPrice,
          total: 1,
          inStock: mockPokemonData.data[0].set.total,
        },
      },
    }}
  >
    <div className="bg-steel-gray font-poppins text-white p-10 flex justify-center items-center">
      <CartItem {...args} />
    </div>
  </CartContext.Provider>
)

export const Primary = Template.bind({})
Primary.args = {
  item: mockPokemonData.data[0] as Card,
}
