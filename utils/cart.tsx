import React, { createContext, useState } from "react"
import { Card } from "../@types/pokemon"

interface InitialCartContextState {
  cart: Card[]
  isOpenCart: boolean
  setCart: React.Dispatch<React.SetStateAction<Card[]>>
  setOpenCartStatus: React.Dispatch<React.SetStateAction<boolean>>
}

const initialState: InitialCartContextState = {
  cart: [] as Card[],
  isOpenCart: false,
  setCart: () => {},
  setOpenCartStatus: () => {},
}

export const CartContext = createContext(initialState)

export const CartContextWrapper: React.FC = props => {
  const [cart, setCart] = useState<Card[]>([])
  const [isOpenCart, setOpenCartStatus] = useState(false)

  return (
    <CartContext.Provider
      value={{ cart, setCart, isOpenCart, setOpenCartStatus }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
