import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonFull } from '../types'

interface PokemonState {
    list: PokemonFull[]
    loading: boolean
    error?: string
}

const initialState: PokemonState = {
    list: [],
    loading: false,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        fetchPokemonAll(state) {
            state.loading = true
        },
        fetchPokemonAllSuccess(
            state,
            action: PayloadAction<PokemonFull[]>
        ) {
            state.loading = false
            state.list = action.payload
        },
        fetchPokemonAllFailure(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
    },
})

export const {
    fetchPokemonAll,
    fetchPokemonAllSuccess,
    fetchPokemonAllFailure,
} = pokemonSlice.actions

export default pokemonSlice.reducer
