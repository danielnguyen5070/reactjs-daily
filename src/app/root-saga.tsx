import { all } from 'redux-saga/effects'
import pokemonSaga from '../excercises/10.redux-saga/state/pokemon-saga'

export default function* rootSaga() {
    yield all([pokemonSaga()])
}
