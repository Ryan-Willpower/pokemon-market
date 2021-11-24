import Image from "next/image"

import shoppingBagIcon from "../../public/icons/shopping-bag.svg"
import crossIcon from "../../public/icons/x.svg"

import type { ShoppingCartButtonProps } from "./type"

export function ShoppingCartButton({
  openCart = false,
  className,
}: ShoppingCartButtonProps) {
  return (
    <div
      className={`bg-burnt-sienna flex justify-center items-center rounded py-4 px-5 ${className}`}
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
