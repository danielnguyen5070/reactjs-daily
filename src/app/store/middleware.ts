import { type Middleware } from '@reduxjs/toolkit'

export const loggerMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    if (import.meta.env.DEV) {
      console.log('dispatching', action)
    }
    return next(action)
  }