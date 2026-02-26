import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonDetailThunk } from './pokemon-thunks'

interface PokemonState {
    data: any | null
    loading: boolean
    error?: string
}

const initialState: PokemonState = {
    data: null,
    loading: false,
}

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {}, // no local reducers
    extraReducers: builder => {
        builder
            .addCase(fetchPokemonDetailThunk.pending, state => {
                state.loading = true
                state.error = undefined
            })
            .addCase(fetchPokemonDetailThunk.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchPokemonDetailThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    },
})

export default pokemonSlice.reducer
