import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPokemonDetail } from '../services/pokemon-api'

export const fetchPokemonDetailThunk = createAsyncThunk(
    'pokemon/fetchDetail',
    async () => {
        return fetchPokemonDetail('pikachu')
    }
)
