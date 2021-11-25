import Image from "next/image"
import { AddToCartButton } from "../add-to-cart-button"

import "./index.module.scss"

import type { PokemonCardProps } from "./type"

export function PokemonCard(props: PokemonCardProps) {
  return (
    <div>
      <div className="max-w-200px mx-auto transform translate-y-16">
        <Image
          className="rounded"
          src={props.image.url}
          alt={props.image.alt}
          layout="responsive"
          width={200}
          height={300}
        />
      </div>
      <div className="rounded-lg p-4 pt-20 bg-steel-gray font-poppins flex flex-col items-center">
        <h1 className="font-normal text-xl pb-8 text-white text-center">
          {props.name}
        </h1>
        <div className="flex justify-center gap-3 text-tower-gray w-full text-sm pb-2">
          <p>$ {props.price}</p>
          {props.cardTotals > 0 ? (
            <p>{props.cardTotals} Card(s)</p>
          ) : (
            <p>Out of stock</p>
          )}
        </div>
        <AddToCartButton isDisable={props.cardTotals <= 0} />
      </div>
    </div>
  )
}
