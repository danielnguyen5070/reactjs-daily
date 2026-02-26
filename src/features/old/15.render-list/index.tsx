import { useState } from 'react'
import { users as users_data } from './user-data'
import type { User } from './user-data'

function UserList() {
    const [users, setUsers] = useState<User[]>(() => users_data)

    function handleChangeUsername(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        e.preventDefault()

        let newValue = e.target.value
        let newArray = structuredClone(users)
        console.log(newArray)
        newArray[id].username = newValue

        setUsers(newArray)
    }

    return (
        <>
            {users?.map((user, index) => {
                const borderColor = user.email ? "border-green-500" : "border-red-500"

                return (
                    <div key={user.id}
                        className={`border ${borderColor} m-2 p-2`}>
                        <p>{user.role}</p>
                        <p>{user.email}</p>
                    </div>
                )
            })}
        </>
    )
}


export default UserList