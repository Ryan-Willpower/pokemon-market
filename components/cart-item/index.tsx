import Image from "next/image"
import type { CartItemProps } from "./type"

export function CartItem({ item }: CartItemProps) {
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
            $ {item.cardmarket.prices.averageSellPrice}
          </p>
        </div>
        <div className="w-2/12 sm:w-3/12">
          <p>$ {item.cardmarket.prices.averageSellPrice}</p>
        </div>
      </div>

      <div className="flex gap-4 h-14 mt-2">
        <div className="w-2/12 sm:w-3/12">
          <button className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center">
            -
          </button>
        </div>
        <div className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center">
          1
        </div>
        <div className="w-2/12 sm:w-3/12">
          <button className="w-full h-full bg-white-transparent rounded-lg flex justify-center items-center">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
