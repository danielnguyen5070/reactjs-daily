import { http, HttpResponse } from 'msw'
import type { User } from '../model/usersTypes'

const mockUsers: User[] = [
  { id: '1', name: 'Daniel Nguyen', email: 'daniel@test.com' },
  { id: '2', name: 'Alice Tran', email: 'alice@test.com' },
]

export const usersHandlers = [
  http.get('/api/users', async () => {
    await new Promise((r) => setTimeout(r, 600)) // simulate latency

    return HttpResponse.json(mockUsers)
  }),
]