type User = {
    id: number,
    name: string,
    email: string
}

async function fetchUser(id: number, signal?: AbortSignal): Promise<User> {
    return await apiFetch<User>(`/api/users/${id}`, { signal })
}

async function apiFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
    const res = await fetch(input, init)

    if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
    }

    return (await res.json()) as T
}