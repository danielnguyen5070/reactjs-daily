export interface User {
  id: string
  name: string
  email: string
}

export interface UsersState {
  users: User[]
  loading: boolean
  error: string | undefined
  selectedUser: User | undefined
}