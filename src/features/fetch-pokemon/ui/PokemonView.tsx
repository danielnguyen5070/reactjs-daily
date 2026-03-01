import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '../api/pokemonListApi'
import type { PokemonListResponse } from '../model/pokemonType'

type PokemonViewProps = {
    loading: boolean,
    error: string | null,
    data: PokemonListResponse | undefined,
    handleNext: () => void,
    handlePrevious: () => void,
}
const PokemonView = ({ loading, error, data, handleNext, handlePrevious }: PokemonViewProps) => {
    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            {
                data && data.results.map((pokemon) => (
                    <div key={pokemon.name}>
                        <p>{pokemon.name}</p>
                        <p>{pokemon.url}</p>
                    </div>
                ))
            }
            <div>
                <button disabled={!Boolean(data?.next)} onClick={handleNext}>Next</button>
                <button disabled={!Boolean(data?.previous)} onClick={handlePrevious}>Previous</button>
            </div>
        </div>
    )
}

export default PokemonView