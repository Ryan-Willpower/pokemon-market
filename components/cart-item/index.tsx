import Image from "next/image"
import { useContext } from "react"

import { CartContext } from "../../utils/cart"

import type { CartItemProps } from "./type"

export function CartItem({ item }: CartItemProps) {
  const { amount, setAmount, setCart } = useContext(CartContext)

  const handleDecrease = () => {
    if (amount[item.id].total > 1) {
      // if remove item and total still more than 1, just decrease the total number
      setAmount(prev => ({
        ...prev,
        [item.id]: {
          ...prev[item.id],
          total: prev[item.id].total - 1,
        },
      }))
    } else {
      // or remove it from the cart
      setAmount(prev => {
        delete prev[item.id]
        return prev
      })
      setCart(prev => prev.filter(cartItem => cartItem.id !== item.id))
    }
  }

  const handleIncrease = () => {
    if (amount[item.id].total + 1 > amount[item.id].inStock) {
      return
    }

    setAmount(prev => ({
      ...prev,
      [item.id]: {
        ...prev[item.id],
        total: prev[item.id].total + 1,
      },
    }))
  }

  return (
    <div key={item.id} className="my-6">
      <div className="flex gap-4">
        <div className="w-2/12 sm:w-3/12">
          <Image
            className="w-full"
            src={item.images.small}
            width={100}
            height={140}
            alt={item.name}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <p>{item.name}</p>
          <p className="text-tower-gray text-sm">
            $ {item.cardmarket?.prices.averageSellPrice}
          </p>
        </div>
        <div className="w-2/12 sm:w-3/12">
          <p>$ {(amount[item.id].price * amount[item.id].total).toFixed(2)}</p>
        </div>
      </div>

      <div className="flex gap-4 h-14 mt-2">
        <div className="w-2/12 sm:w-3/12">
          <button
            className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center"
            onClick={() => handleDecrease()}
          >
            {amount[item.id].total > 1 ? "-" : "x"}
          </button>
        </div>
        <div className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center">
          {amount[item.id].total}
        </div>
        <div className="w-2/12 sm:w-3/12">
          <button
            className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center"
            onClick={() => handleIncrease()}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
