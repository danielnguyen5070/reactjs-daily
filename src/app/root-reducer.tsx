import { combineReducers } from '@reduxjs/toolkit'
import pokemonReducer from '../excercises/10.redux-saga/state/pokemon-slice'
import pokemonToolkitReducer from '../excercises/09.redux-toolkit/state/pokemonSlice'

export const rootReducer = combineReducers({
    pokemon: pokemonReducer,
    pokemonToolkit: pokemonToolkitReducer,
})
