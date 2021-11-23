export const mockPokemonData = {
  data: [
    {
      id: "pl1-1",
      name: "Ampharos",
      supertype: "Pokémon",
      subtypes: ["Stage 2"],
      level: "57",
      hp: "130",
      types: ["Lightning"],
      evolvesFrom: "Flaaffy",
      abilities: [
        {
          name: "Damage Bind",
          text: "Each Pokémon that has any damage counters on it (both yours and your opponent's) can't use any Poké-Powers.",
          type: "Poké-Body",
        },
      ],
      attacks: [
        {
          name: "Gigavolt",
          cost: ["Lightning", "Colorless"],
          convertedEnergyCost: 2,
          damage: "30+",
          text: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage. If tails, the Defending Pokémon is now Paralyzed.",
        },
        {
          name: "Reflect Energy",
          cost: ["Lightning", "Colorless", "Colorless"],
          convertedEnergyCost: 3,
          damage: "70",
          text: "Move an Energy card attached to Ampharos to 1 of your Benched Pokémon.",
        },
      ],
      weaknesses: [
        {
          type: "Fighting",
          value: "+30",
        },
      ],
      resistances: [
        {
          type: "Metal",
          value: "-20",
        },
      ],
      retreatCost: ["Colorless", "Colorless"],
      convertedRetreatCost: 2,
      set: {
        id: "pl1",
        name: "Platinum",
        series: "Platinum",
        printedTotal: 127,
        total: 130,
        legalities: {
          unlimited: "Legal",
        },
        ptcgoCode: "PL",
        releaseDate: "2009/02/11",
        updatedAt: "2020/08/14 09:35:00",
        images: {
          symbol: "https://images.pokemontcg.io/pl1/symbol.png",
          logo: "https://images.pokemontcg.io/pl1/logo.png",
        },
      },
      number: "1",
      artist: "Atsuko Nishida",
      rarity: "Rare Holo",
      nationalPokedexNumbers: [181],
      legalities: {
        unlimited: "Legal",
      },
      images: {
        small: "https://images.pokemontcg.io/pl1/1.png",
        large: "https://images.pokemontcg.io/pl1/1_hires.png",
      },
      tcgplayer: {
        url: "https://prices.pokemontcg.io/tcgplayer/pl1-1",
        updatedAt: "2021/11/22",
        prices: {
          holofoil: {
            low: 4.4,
            mid: 6.54,
            high: 10.44,
            market: 8.57,
            directLow: null,
          },
          reverseHolofoil: {
            low: 7.58,
            mid: 13.91,
            high: 14.98,
            market: 6.27,
            directLow: null,
          },
        },
      },
      cardmarket: {
        url: "https://prices.pokemontcg.io/cardmarket/pl1-1",
        updatedAt: "2021/11/22",
        prices: {
          averageSellPrice: 2.25,
          lowPrice: 0.25,
          trendPrice: 1.7,
          germanProLow: null,
          suggestedPrice: null,
          reverseHoloSell: 2.45,
          reverseHoloLow: 0.45,
          reverseHoloTrend: 1.52,
          lowPriceExPlus: 1.0,
          avg1: 0.4,
          avg7: 1.77,
          avg30: 1.6,
          reverseHoloAvg1: 2.5,
          reverseHoloAvg7: 1.19,
          reverseHoloAvg30: 1.55,
        },
      },
    },
  ],
  page: 1,
  pageSize: 1,
  count: 1,
  totalCount: 14354,
}
