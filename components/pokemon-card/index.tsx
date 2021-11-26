import Image from "next/image"
import { useContext } from "react"
import { CardMarket } from "../../@types/pokemon"

import { CartContext } from "../../utils/cart"
import { AddToCartButton } from "../add-to-cart-button"

import type { PokemonCardProps } from "./type"

export function PokemonCard({ card }: PokemonCardProps) {
  const { setCart, setAmount } = useContext(CartContext)

  const handleAddCardToShoppingCart = () => {
    if (!card.cardmarket) {
      return
    }

    setCart(prev => [...prev, card])

    setAmount(prev => ({
      ...prev,
      [card.id]: {
        total: 1,
        inStock: card.set.total,
        price: (card.cardmarket as CardMarket).prices.averageSellPrice,
      },
    }))
  }

  return (
    <div>
      <div className="max-w-200px mx-auto transform translate-y-16">
        <Image
          className="rounded"
          src={card.images.large}
          alt={card.name}
          layout="responsive"
          width={200}
          height={300}
        />
      </div>
      <div className="rounded-lg p-4 pt-20 bg-steel-gray font-poppins flex flex-col items-center">
        <h1 className="font-normal text-xl pb-8 text-white text-center">
          {card.name}
        </h1>
        <div className="flex justify-center gap-3 text-tower-gray w-full text-sm pb-2">
          <p>$ {card.cardmarket?.prices?.averageSellPrice || "-"}</p>
          {card.set.total > 0 ? (
            <p>{card.set.total} Card(s)</p>
          ) : (
            <p>Out of stock</p>
          )}
        </div>
        <AddToCartButton
          isDisable={card.set.total <= 0 || !card.cardmarket}
          onClick={handleAddCardToShoppingCart}
        />
      </div>
    </div>
  )
}
