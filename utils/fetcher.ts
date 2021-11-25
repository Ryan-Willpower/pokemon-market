import axios from "axios"

console.log(process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY)

export const pokemonTCGFetcher = (endpoint: string) =>
  axios
    .get(`https://api.pokemontcg.io/v2${endpoint}`, {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY as string,
      },
    })
    .then(res => res.data)
