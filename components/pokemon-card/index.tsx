import Image from "next/image"

import "./index.module.scss"

import type { PokemonCardProps } from "./type"

export function PokemonCard(props: PokemonCardProps) {
  return (
    <div className="pokemonCard">
      <div className="flex justify-center transform translate-y-6">
        <Image
          className="cardImage w-1/2"
          src={props.image.url}
          alt={props.image.alt}
          layout="fill"
        />
      </div>
      <div className="rounded-lg p-4 pt-8 bg-steel-gray text-white-darker font-poppins flex flex-col items-center">
        <h1 className="font-normal text-base pb-2">{props.name}</h1>
        <div className="flex justify-center text-tower-gray w-full text-sm pb-2">
          <p className="pr-4">$ {props.price}</p>
          <p>{props.cardTotals} Card(s)</p>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
