import { useState, useEffect } from "react"
import useSWR from "swr"
import { CardsResponse } from "../@types/pokemon"
import { pokemonTCGFetcher } from "./fetcher"

export function useCardPagination() {
  const pageSize = 20

  const [pageIndex, setPageIndex] = useState(1)
  const [pageCount, setPageCount] = useState(0)

  const { data: cards } = useSWR<CardsResponse>(
    `/cards?page=${pageIndex}&pageSize=${pageSize}`,
    pokemonTCGFetcher
  )

  useEffect(() => {
    if (cards) {
      setPageCount(Math.ceil(cards.totalCount / pageSize))
    }
  }, [cards])

  return {
    cards,
    pageIndex,
    setPageIndex,
    pageCount,
  }
}
