import React, { useState } from "react";

export default function LoginForm() {
	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
	}

	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="w-full max-w-md p-8 bg-gray-800 rounded-xl shadow-lg">
				<h2 className="text-3xl font-semibold text-white mb-6">
					Registration
				</h2>

				<form onSubmit={handleSubmit} className="space-y-5">

					<div>
						<label className="block text-sm font-medium text-gray-300">
							Name
						</label>
						<input
							type="text"
							placeholder="••••••••"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-300">
							Email
						</label>
						<input
							type="email"
							placeholder="you@example.com"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-300">
							Password
						</label>
						<input
							type="password"
							placeholder="••••••••"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
						/>
					</div>


					<div>
						<label className="block text-sm font-medium text-gray-300">
							Confirm Password
						</label>
						<input
							type="password"
							placeholder="••••••••"
							className="mt-1 w-full px-3 py-2 bg-gray-700 text-gray-100 rounded-lg border border-gray-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
						/>
					</div>

					<button
						type="submit"
						className={`w-full py-2 rounded-lg text-white text-center font-medium transition bg-indigo-600 hover:bg-indigo-700`}
					>
						Register Now
					</button>
				</form>
			</div>
		</div>
	);
}
