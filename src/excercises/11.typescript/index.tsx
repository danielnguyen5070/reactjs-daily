// 1. type + interface + enum
type User = {
    id: number
    name: string
}

interface ApiUser extends User {
    email: string
}

enum Status {
    Loading,
    Success,
    Error,
}

function greet(user: { name: string }) {
    return user.name.toUpperCase()
}
// greet({ age: 25 }) // ❌ Error: Property 'name' is missing

// 2. Narrowing types
type Operator = "+" | "-" | "*" | "/"

// 3 + 4. typeof + keyof + deriving types
const rawOperations = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
}

type Ops = typeof rawOperations
type DerivedOperator = keyof Ops

// 5. Generics

function identity<T>(value: T): T {
    return value
}

const result1 = identity(123)       // T = number
const result2 = identity("hello")   // T = string

// 6. Utility types

type OperationFn = (a: number, b: number) => number
const operations: Record<DerivedOperator, OperationFn> = rawOperations

type PartialUser = Partial<User>
type UserName = Pick<User, "name">
type UserWithoutId = Omit<User, "id">

// 7. satisfies operator
const safeOperations = {
    "+": (a: number, b: number) => a + b,
    "-": (a: number, b: number) => a - b,
    "*": (a: number, b: number) => a * b,
    "/": (a: number, b: number) => a / b,
} satisfies Record<DerivedOperator, OperationFn>

// 9. any vs unknown vs never

// any: unsafe
let vAny: any = 10
vAny.foo.bar() // ❌ allowed, but unsafe

// unknown: safe after narrowing
let vUnknown: unknown = "hello"
if (typeof vUnknown === "string") {
    vUnknown.toUpperCase() // ✅ safe
}

// never: impossible value
function fail(): never {
    throw new Error("Crash")
}

// never for exhaustive checks
function assertNever(x: never): never {
    throw new Error("Unexpected value: " + x)
}

// Putting everything together
function calculate(op: DerivedOperator, a: number, b: number): number {
    const fn = safeOperations[op]
    return fn(a, b)
}

function getStatusMessage(status: Status): string {
    switch (status) {
        case Status.Loading:
            return "Loading..."
        case Status.Success:
            return "Success!"
        case Status.Error:
            return "Something went wrong."
        default:
            return assertNever(status) // ensures exhaustive enum handling
    }
}

// Usage
const user: ApiUser = {
    id: 1,
    name: "Daniel",
    email: "daniel@example.com",
}

console.log(greet(user))
console.log(calculate("+", 5, 3))
console.log(getStatusMessage(Status.Success))