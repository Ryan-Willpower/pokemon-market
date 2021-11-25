import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next"
import Head from "next/head"
import axios from "axios"
import useSWR from "swr"

import { Filter, FilterDropdownPosition } from "../components/filter"
import { HeaderSection } from "../components/header-section"
import { CardsResponse } from "../@types/pokemon"
import { PokemonCard } from "../components/pokemon-card"
import { useState } from "react"
import { pokemonTCGFetcher } from "../utils/fetcher"

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const { data: cards, error } = useSWR<CardsResponse>(
    `/cards?page=${pageIndex}&pageSize=20`,
    pokemonTCGFetcher
  )

  return (
    <>
      <Head>
        <title>Pokemon Market</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container px-4 py-2 sm:px-auto mx-auto w-full divide-y divide-white-darker ">
        <HeaderSection />

        <main>
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="text-xl my-8 w-full md:w-auto">Choose card</h1>
            <div className="flex gap-2">
              <Filter name="Set" data={["some long text", "b", "c"]} />
              <Filter name="Rarity" data={["a", "b", "c"]} />
              <Filter
                name="Type"
                data={["a", "b", "c"]}
                position={FilterDropdownPosition.Right}
              />
            </div>
          </div>

          {cards ? (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
              {cards.data.map(card => (
                <PokemonCard
                  key={card.id}
                  image={{ url: card.images.large, alt: card.name }}
                  name={card.name}
                  price={card.cardmarket.prices.averageSellPrice}
                  cardTotals={card.set.total}
                />
              ))}
            </div>
          ) : (
            <div>Empty</div>
          )}
        </main>
      </div>
    </>
  )
}

export default Home
