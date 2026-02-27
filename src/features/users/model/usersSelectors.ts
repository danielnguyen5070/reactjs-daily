import { type RootState } from '@/app/store/rootReducer'

export const selectUsers = (state: RootState) => state.users.users
export const selectUsersLoading = (state: RootState) => state.users.loading
export const selectSelectedUser = (state: RootState) =>
  state.users.selectedUser