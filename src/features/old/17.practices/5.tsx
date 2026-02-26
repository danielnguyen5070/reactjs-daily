// CODE REVIEW TASK(Frontend – React + TypeScript)

import React, { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const deleteUser = (id: number) => {
        fetch("/api/delete/" + id, {
            method: "POST",
        }).then(() => {
            setUsers(users.filter((u) => u.id !== id));
        });
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {users.map((user, index) => (
                <div key={index}>
                    <span>{user.name}</span>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

/**
 * 1. any -> User
 * 2. check user data before setData
 * 3. using index ad a key
 * 4. missing error handling
 * 5. no abort controller
 * 
 */