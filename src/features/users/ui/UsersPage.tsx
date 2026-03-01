import { useEffect } from 'react'
import { fetchUsers } from '../model/usersSlice'
import {
    selectUsers,
    selectUsersLoading,
} from '../model/usersSelectors'

import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

const UsersPage = () => {
    const dispatch = useAppDispatch()

    const { users } = useAppSelector(state => state.users)
    const loading = useAppSelector(selectUsersLoading)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (loading) {
        return (
            <div className="p-6 text-gray-500">
                Loading users...
            </div>
        )
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Users</h1>

            <div className="bg-white shadow rounded-lg divide-y">
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="p-4 flex justify-between items-center hover:bg-gray-50 transition"
                    >
                        <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>

                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                            ID: {user.id}
                        </span>
                    </div>
                ))}

                {users.length === 0 && (
                    <div className="p-4 text-gray-400">
                        No users found.
                    </div>
                )}
            </div>
        </div>
    )
}

export default UsersPage