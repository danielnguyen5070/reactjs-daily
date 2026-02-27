import { combineReducers } from '@reduxjs/toolkit'
//import authReducer from '@features/auth/model/authTypes'
import usersReducer from '@features/users/model/usersSlice'

export const rootReducer = combineReducers({
  // auth: authReducer,
  users: usersReducer,
})

export type RootState = ReturnType<typeof rootReducer>