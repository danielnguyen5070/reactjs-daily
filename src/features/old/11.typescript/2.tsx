// type Order = {
//     id: number
//     total: number
//     items: Item[]
//     createdAt: Date
// }

// type Item = {
//     sku: string
//     price: number
//     quantity?: number
// }

// type User = {
//     id: number
//     name: string
//     orders?: Order
// }

// const state = {
//     users: [] as User[],
//     loading: false
// }

// function fetchUsers(): Promise<User[]> {
//     state.loading = true
//     return fetch("/api/users")
//         .then(res => res.json())
//         .finally(() => {
//             state.loading = "false"
//         })
// }

// function calculateOrderTotal(order: Order) {
//     return order.items.reduce((sum, item) => {
//         return sum + item.price * item.quantity
//     }, "")
// }

// function addOrder(userId: number, order: Order) {
//     const user = state.users.find(u => u.id === userId)
//     user.orders.push(order)
// }

// async function init() {
//     const users = await fetchUsers()
//     state.users = users

//     addOrder(1, {
//         id: "ORD-1",
//         total: calculateOrderTotal({
//             id: 1,
//             total: 0,
//             items: [{ sku: "A", price: 100 }],
//             createdAt: new Date()
//         }),
//         items: [],
//         createdAt: "2024-01-01"
//     })

//     const firstUser = state.users[0]
//     console.log(firstUser.orders[0].total.toFixed(2))
// }

// init()
