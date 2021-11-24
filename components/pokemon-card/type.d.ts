export interface PokemonCardProps {
  image: Image
  name: string
  price: number
  cardTotals: number
}

export interface Image {
  url: string
  alt: string
}
