// type Item = {
//     sku: string
//     price: number
//     quantity: number
// }

// type Order = {
//     id: number
//     total: number
//     items: Item[]
//     createdAt: string
// }

// type User = {
//     id: number
//     name: string
//     orders: Order[]
// }

// function isItem(value: unknown): value is Item {
//     if (value === null || typeof value !== "object") return false
//     const v = value as Record<string, unknown>

//     return typeof v.sku === "string"
//         && typeof v.price === "number"
//         && typeof v.quantity === "number"
// }

// function isISODateString(value: unknown): value is string {
//     return typeof value === "string" && !Number.isNaN(Date.parse(value))
// }

// function isOrder(value: unknown): value is Order {
//     if (value === null || typeof value !== "object") return false
//     const v = value as Record<string, unknown>

//     if (typeof v.id !== "number"
//         || typeof v.total !== "number"
//         || !Array.isArray(v.items)
//         || !isISODateString(v.createdAt)) return false

//     return v.items.every(isItem)
// }

// function isUser(value: unknown): value is User {
//     if (value === null || typeof value !== "object") return false
//     const v = value as Record<string, unknown>

//     if (typeof v.id !== "number"
//         || typeof v.name !== "string"
//         || !Array.isArray(v.orders)) return false

//     return v.orders.every(isOrder)
// }

// function isListUsers(value: unknown): value is User[] {
//     if (value === null || !Array.isArray(value)) return false
//     return value.every(isUser)
// }

// async function fetchUsers(): Promise<User[]> {
//     return await fetchAndValidate("/api/users", isListUsers)
// }

// async function fetchAndValidate<T>(url: string, guard: (value: unknown) => value is T): Promise<T> {
//     const response = await fetch(url)

//     if (!response.ok) throw new Error(`Failed to fetch. Status: ${response.status}`)

//     const data: unknown = await response.json()

//     if (!guard(data)) throw new Error(`Invalid response payload`)

//     return data
// }


// function calculateOrderTotal(items: Item[]): number {
//     return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
// }

// function addOrder(userId: number, order: Order) {
//     const user = state.users.find(u => u.id === userId)

//     if (!user) throw new Error(`UserId: ${userId} not found`)

//     user.orders.push(order)
// }

// const state: {
//     users: User[],
//     loading: boolean,
//     error: string | null
// } = {
//     users: [],
//     loading: false,
//     error: null
// }

// async function init() {
//     state.loading = true
//     state.error = null
//     try {
//         state.users = await fetchUsers()
//     } catch (error) {
//         if (error instanceof Error) state.error = error.message
//     } finally {
//         state.loading = false
//     }

//     const orderItems: Item[] = [
//         { sku: "A", price: 100, quantity: 1 }
//     ]

//     const date = "2024-01-01"
//     const total = calculateOrderTotal(orderItems)

//     const order: Order = {
//         id: 1,
//         total,
//         items: orderItems,
//         createdAt: date
//     }

//     addOrder(1, order)

//     const user = state.users[0]
//     if (user.orders.length === 0) return
//     const firstOrder = user.orders[0]
//     console.log(firstOrder.total.toFixed(2))
// }

// init()
