import { useState, useEffect } from "react"
import useSWR from "swr"
import debounce from "lodash/debounce"
import { CardsResponse, SetResponse, StringResponse } from "../@types/pokemon"
import { pokemonTCGFetcher } from "./fetcher"

export function useCardPagination() {
  const pageSize = 20

  const [pageIndex, setPageIndex] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [name, setName] = useState("")
  const [filter, setFilter] = useState<FilterState>({
    set: undefined,
    type: undefined,
    rarity: undefined,
  })
  const [query, setQuery] = useState("")

  useEffect(() => {
    const queryList: string[] = []

    if (name) {
      queryList.push(`name:"${name}"`)
    }

    if (filter.set) {
      queryList.push(`set.name:"${filter.set}"`)
    }

    if (filter.type) {
      queryList.push(`type:"${filter.type}"`)
    }

    if (filter.rarity) {
      queryList.push(`rarity:"${filter.rarity}"`)
    }

    setQuery(queryList.join(" "))
  }, [filter, name])

  const { data: cards } = useSWR<CardsResponse>(
    `/cards?page=${pageIndex}&pageSize=${pageSize}&q=${query}`,
    pokemonTCGFetcher
  )

  const { data: sets } = useSWR<SetResponse>(`/sets`, pokemonTCGFetcher)

  const { data: types } = useSWR<StringResponse>(`/types`, pokemonTCGFetcher)

  const { data: rarities } = useSWR<StringResponse>(
    `/rarities`,
    pokemonTCGFetcher
  )

  useEffect(() => {
    if (cards) {
      setPageCount(Math.ceil(cards.totalCount / pageSize))
    }
  }, [cards])

  const handleNameSearch = debounce((text: string) => {
    setName(text)
  }, 500)

  return {
    cards,
    filter: {
      name,
      sets,
      types,
      rarities,
      handleNameSearch,
      setFilter,
    },
    pageIndex,
    setPageIndex,
    pageCount,
  }
}
