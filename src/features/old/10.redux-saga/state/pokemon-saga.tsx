import { call, put, all, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import {
    fetchPokemonAll,
    fetchPokemonAllSuccess,
    fetchPokemonAllFailure,
} from './pokemon-slice'
import * as api from '../services/pokemon-api'
import { PokemonFull } from '../types'

function* fetchPokemonAllWorker(): SagaIterator {
    try {
        const list: { id: number; name: string }[] =
            yield call(api.fetchPokemonListApi)

        const fullList: PokemonFull[] = yield all(
            list.map(p => call(fetchPokemonFullWorker, p))
        )

        yield put(fetchPokemonAllSuccess(fullList))
    } catch (e) {
        yield put(fetchPokemonAllFailure('Failed to load Pokémon'))
    }
}

function* fetchPokemonFullWorker(
    pokemon: { id: number; name: string }
): SagaIterator<PokemonFull> {
    const detail: any = yield call(api.fetchPokemonDetail, pokemon.name)

    const [species, types, abilities]: [any, any[], any[]] = yield all([
        call(api.fetchByUrl, detail.species.url),
        all(detail.types.map((t: any) => call(api.fetchByUrl, t.type.url))),
        all(detail.abilities.map((a: any) =>
            call(api.fetchByUrl, a.ability.url)
        )),
    ])

    return {
        id: detail.id,
        name: detail.name,
        detail,
        species,
        types,
        abilities,
    }
}

export default function* pokemonSaga(): SagaIterator {
    yield takeLatest(fetchPokemonAll.type, fetchPokemonAllWorker)
}
