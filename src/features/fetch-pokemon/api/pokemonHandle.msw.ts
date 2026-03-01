import { http, HttpResponse, delay } from "msw";

export const pokemonHandlers = [
	http.get("https://pokeapi.co/api/v2/pokemon", async ({ request }) => {
		const url = new URL(request.url);
		const limit = url.searchParams.get("limit");
		const offset = url.searchParams.get("offset");
		await delay(500); // simulate slow network

		return HttpResponse.json({
			count: 2,
			next: Number(offset) + Number(limit) < 20 ? "next-url" : null,
			previous: offset === "0" ? null : "prev-url",
			results: [
				{ name: "pikachu", url: "url-1" },
				{ name: "bulbasaur", url: "url-2" },
			],
		});
	}),
];
