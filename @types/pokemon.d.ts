import { PokemonTCG } from "pokemon-tcg-sdk-typescript"

export interface Pagination {
  page: number
  pageSize: number
  count: number
  totalCount: number
}

export interface CardMarket {
  url: string
  updatedAt: string
  prices: Price
}

export interface Price {
  averageSellPrice: number
  lowPrice: number
  trendPrice: number
  germanProLow: number | null
  suggestedPrice: number | null
  reverseHoloSell: number
  reverseHoloLow: number
  reverseHoloTrend: number
  lowPriceExPlus: number
  avg1: number
  avg7: number
  avg30: number
  reverseHoloAvg1: number
  reverseHoloAvg7: number
  reverseHoloAvg30: number
}

export interface Card extends PokemonTCG.Card {
  cardmarket: CardMarket
}

export interface CardsResponse extends Pagination {
  data: Card[]
}

export interface PokemonSet {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: {
    [key: string]: string
  }
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: {
    symbol: string
    logo: string
  }
}

export interface SetResponse extends Pagination {
  data: PokemonSet[]
}

export interface StringResponse {
  data: string[]
}
