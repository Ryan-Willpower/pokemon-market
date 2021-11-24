import type { NextPage } from "next"
import Head from "next/head"
import { Filter, FilterDropdownPosition } from "../components/filter"

import { HeaderSection } from "../components/header-section"

const Home: NextPage = () => {
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
            <h1 className="text-xl my-4 w-full md:w-auto">Choose card</h1>
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
        </main>
      </div>
    </>
  )
}

export default Home
