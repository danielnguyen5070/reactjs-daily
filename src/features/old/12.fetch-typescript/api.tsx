// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
// count: 1350
// next: null
// previous: null
// results: Array(1350)
//      name: "bulbasaur"
//      url: "https://pokeapi.co/api/v2/pokemon/1/"
//      name: "ivysaur"
//      url: "https://pokeapi.co/api/v2/pokemon/2/"

export type Pokemon = {
    name: string,
    url: string
}

export type PokemonListResponse = {
    count: number,
    next: string | null,
    previous: string | null,
    results: Pokemon[]
}

export const PAGE_LIMIT = [10, 20, 30] as const
export type PageLimit = typeof PAGE_LIMIT[number]

export async function fetchPokemonList(limit: PageLimit, offset: number = 0, signal?: AbortSignal): Promise<PokemonListResponse> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url, { signal })

    if (!response.ok) throw new Error(`Failed to fetch ${url}, status ${response.status}`)

    const data: PokemonListResponse = await response.json()

    return data
}