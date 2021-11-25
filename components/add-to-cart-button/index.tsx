import Image from "next/image"

import shoppingBagIcon from "../../public/icons/shopping-bag.svg"
import { AddToCartButtonProps } from "./type"

export function AddToCartButton({
  isDisable = false,
  className,
  onClick,
}: AddToCartButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 text-white bg-white-transparent hover:bg-white-transparent-dark focus:bg-white-transparent-dark py-3 px-2 w-full rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      disabled={isDisable}
      onClick={onClick}
    >
      <span>
        <Image
          src={shoppingBagIcon}
          width={20}
          height={20}
          alt="shopping cart icon"
        />
      </span>
      Add to cart
    </button>
  )
}
