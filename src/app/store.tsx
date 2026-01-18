import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './root-reducer'
import rootSaga from './root-saga'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    collapsed: true,
    diff: true,
})

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ thunk: true }).concat(sagaMiddleware, logger),
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
