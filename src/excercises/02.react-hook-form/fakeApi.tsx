// fakeApi.js
export async function loginApi(email: string, password: string) {
    // simulate latency
    await new Promise((res) => setTimeout(res, 1000));

    const e = (email ?? "").trim().toLowerCase();
    const p = password ?? "";

    // simple validation
    if (!e || !p) {
        return { error: "Email and password are required." };
    }
    if (!/\S+@\S+\.\S+/.test(e)) {
        return { error: "Please enter a valid email address." };
    }

    // fake credentials
    if (e === "user@gmail.com" && p === "12345") {
        // return a fake token and user object
        return {
            error: null,
            token: "fake-jwt-token-abc123",
            user: { id: 1, name: "Demo User", email: "user@example.com" },
        };
    }

    // invalid credentials
    return { error: "Invalid email or password." };
}
