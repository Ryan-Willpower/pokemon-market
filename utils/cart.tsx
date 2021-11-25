import React, { createContext, useState } from "react"
import type { Amount } from "../@types/cart"
import type { Card } from "../@types/pokemon"

interface InitialCartContextState {
  cart: Card[]
  isOpenCart: boolean
  amount: Amount
  setCart: React.Dispatch<React.SetStateAction<Card[]>>
  setOpenCartStatus: React.Dispatch<React.SetStateAction<boolean>>
  setAmount: React.Dispatch<React.SetStateAction<Amount>>
}

export const initialState: InitialCartContextState = {
  cart: [] as Card[],
  isOpenCart: false,
  amount: {} as Amount,
  setCart: () => {},
  setOpenCartStatus: () => {},
  setAmount: () => {},
}

export const CartContext = createContext(initialState)

export const CartContextWrapper: React.FC = props => {
  const [cart, setCart] = useState<Card[]>([])
  const [isOpenCart, setOpenCartStatus] = useState(false)
  const [amount, setAmount] = useState<Amount>({})

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isOpenCart,
        setOpenCartStatus,
        amount,
        setAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
