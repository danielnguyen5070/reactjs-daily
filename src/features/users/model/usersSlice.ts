import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type PayloadAction } from '@reduxjs/toolkit'
import { type UsersState, type User } from './usersTypes'

const initialState: UsersState = {
  users: [],
  loading: false,
  error: undefined,
  selectedUser: undefined,
}

export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {
    const response = await fetch('/api/users')
    if (!response.ok) throw new Error('Failed to fetch users')
    return response.json()
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser(state, action: PayloadAction<User>) {
      state.selectedUser = action.payload
    },
    clearSelectedUser(state) {
      state.selectedUser = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const { setSelectedUser, clearSelectedUser } = usersSlice.actions

export default usersSlice.reducer