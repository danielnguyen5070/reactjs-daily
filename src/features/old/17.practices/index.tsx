import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
};

function isUserArray(data: unknown): data is User[] {
    if (!Array.isArray(data)) return false

    return data.every((item) => (
        typeof item === "object" &&
        item != null &&
        typeof item.id === "number" &&
        typeof item.name === "string"
    ))
}

async function fetchUsersApi(signal?: AbortSignal): Promise<User[]> {
    const response = await fetch("/api/users", { signal })

    if (!response.ok) throw new Error("Failed to fetch")

    const data: unknown = await response.json()

    if (!isUserArray(data)) throw new Error("Data not match User[]")

    return data
}

async function deleteUserApi(id: number): Promise<void> {
    const url = `/api/user/delete/${id}`
    const response = await fetch(url, { method: "DELETE" })
    if (!response.ok) throw new Error("Failed to fetch")
}

export default function Users() {
    const { loading, error, users, deleteUser } = useUsers()

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <span>{user.name}</span>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

function useUsers() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController()

        async function handleFetchUsers() {
            setLoading(true)
            setError(null)
            try {
                const data = await fetchUsersApi(controller.signal)
                setUsers(data)
            } catch (error) {
                if (error instanceof DOMException && error.name === "AbortError") {
                    return
                }
                if (error instanceof Error) {
                    setError(error.message)
                }
            } finally {
                if (!controller.signal.aborted) setLoading(false)
            }
        }

        handleFetchUsers()

        return () => {
            controller.abort()
        }
    }, []);

    const deleteUser = async (id: number) => {
        try {
            await deleteUserApi(id)
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch (error) {
            if (error instanceof Error) setError(error.message)
        }
    };

    return {
        users, loading, error, deleteUser
    }
}