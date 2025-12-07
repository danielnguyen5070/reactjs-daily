import React, { useState } from "react";
import { loginApi } from "./fakeApi";

type User = {
	id: number;
	name: string;
	email: string;
} | null;

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [user, setUser] = useState<User>(null);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		const res = await loginApi(email, password);

		setIsLoading(false);
		if (res.error) {
			setError(res.error);
			return;
		}

		try {
			localStorage.setItem("authToken", res.token || "");
		} catch (ignore) { }

		setUser(res.user || null);
		setEmail("");
		setPassword("");
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
				<h2 className="text-3xl font-semibold text-white mb-6">
					Sign In
				</h2>

				{user && (
					<div className="mb-4 p-4 bg-green-900/40 border border-green-700 rounded-lg">
						<p className="text-sm text-green-300">
							Logged in as <span className="font-semibold text-green-200">{user.name}</span>
						</p>
					</div>
				)}

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className="block text-sm font-medium text-gray-300">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(ev) => setEmail(ev.target.value)}
							placeholder="you@example.com"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
							disabled={isLoading}
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-300">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(ev) => setPassword(ev.target.value)}
							placeholder="••••••••"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
							disabled={isLoading}
						/>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className={`w-full py-2 rounded-lg text-white text-center font-medium transition ${isLoading
							? "bg-indigo-500/40 cursor-not-allowed"
							: "bg-indigo-600 hover:bg-indigo-700"
							}`}
					>
						{isLoading ? "Signing in..." : "Sign In"}
					</button>

					{error && (
						<p className="text-sm text-red-400">{error}</p>
					)}
				</form>

				<div className="mt-6 text-xs text-gray-500 text-center">
					<p>Demo credentials:
						<span className="text-gray-300"> user@example.com / password123</span>
					</p>
				</div>
			</div>
		</div>
	);
}
