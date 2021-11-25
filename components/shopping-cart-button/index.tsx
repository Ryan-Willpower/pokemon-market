import Image from "next/image"

import shoppingBagIcon from "../../public/icons/shopping-bag.svg"
import crossIcon from "../../public/icons/x.svg"

import type { ShoppingCartButtonProps } from "./type"

export function ShoppingCartButton({
  openCart = false,
  className,
  onClick,
}: ShoppingCartButtonProps) {
  return (
    <div
      className={`bg-burnt-sienna shadow-burnt-sienna-button flex justify-center items-center rounded w-12 h-12 cursor-pointer ${className}`}
      onClick={onClick}
    >
      <Image
        src={openCart ? crossIcon : shoppingBagIcon}
        width={20}
        height={20}
        alt={openCart ? "close shopping cart icon" : "shopping bag icon"}
      />
    </div>
  )
}
