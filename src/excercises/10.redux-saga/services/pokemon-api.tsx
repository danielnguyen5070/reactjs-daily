const BASE = 'https://pokeapi.co/api/v2'

export interface PokemonApiListResponse {
    results: { name: string; url: string }[]
}

export const fetchPokemonListApi = async (): Promise<
    { id: number; name: string }[]
> => {
    const res = await fetch(`${BASE}/pokemon?limit=20`)
    const data: PokemonApiListResponse = await res.json()

    return data.results.map(p => ({
        name: p.name,
        id: Number(p.url.split('/').slice(-2, -1)[0]),
    }))
}

export const fetchPokemonDetail = async (name: string): Promise<any> => {
    const res = await fetch(`${BASE}/pokemon/${name}`)
    return res.json()
}

export const fetchByUrl = async (url: string): Promise<any> => {
    const res = await fetch(url)
    return res.json()
}
