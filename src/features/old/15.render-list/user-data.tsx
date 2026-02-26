const USER_ROLE = ["admin", "user"] as const
type Role = typeof USER_ROLE[number]

export type User = {
    id: number,
    username: string,
    role: Role
    email?: string,
    isActive:  boolean
}

export const users: User[] = [
    {
        id: 101,
        username: "daniel01",
        role: "admin",
        email: "daniel@gmail.com",
        isActive: true,
    },
    {
        id: 102,
        username: "user02",
        role: "user",
        isActive: false,
    },
];
