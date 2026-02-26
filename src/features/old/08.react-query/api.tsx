import { PokemonDetail, PokemonListResponse } from './types'
import { QueryFunctionContext } from '@tanstack/react-query'
import { LIMIT } from './constant'

export const fetchPokemonList = async (
    {
        pageParam = 0,
        signal,
    }: QueryFunctionContext
): Promise<PokemonListResponse> => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${pageParam}`,
        { signal }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch Pokémon list')
    }

    return res.json()
}

export const fetchPokemonDetail = async (
    name: string
): Promise<PokemonDetail> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)

    if (!res.ok) {
        throw new Error('Failed to fetch Pokémon detail')
    }

    return res.json()
}