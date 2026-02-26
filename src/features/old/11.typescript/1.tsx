// type User = {
//     id: number
//     name: string
//     age?: number
// }

// function getUser(id: string): Promise<User> {
//     return fetch("/api/user/" + id)
//         .then(res => res.json())
// }

// const users: User[] = []

// function addUser(user) {
//     users.push(user)
// }

// function findAdultUsers() {
//     return users.filter(u => u.age > 18)
// }

// async function main() {
//     const user = await getUser(1)
//     addUser({ id: "2", name: "Alice" })
//     addUser(user)

//     const adults = findAdultUsers()
//     console.log(adults[0].email.toLowerCase())
// }

// main()
