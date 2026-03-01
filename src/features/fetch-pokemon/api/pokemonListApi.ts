// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

import { fetchApiWithValidate } from "@/shared/api/fetchJsonWithValidation";
import type { Pokemon, PokemonListResponse } from "../model/pokemonType";

// count: 1350
// next: null;
// previous: null;
// results:
//     - name: "ivysaur"
//       url: "https://pokeapi.co/api/v2/pokemon/2/"
//     - name: "venusaur"
//       url: "https://pokeapi.co/api/v2/pokemon/3/"
//     - name: "charmander"
//       url: "https://pokeapi.co/api/v2/pokemon/4/"
//     - name: "charmeleon"
//       url: "https://pokeapi.co/api/v2/pokemon/5/"
//     - name: "charizard"
//       url: "https://pokeapi.co/api/v2/pokemon/6/"

function isPokemon(data: unknown): data is Pokemon {
	if (data === null || typeof data !== "object") return false;

	const d = data as Record<string, unknown>;

	return typeof d.name === "string" && typeof d.url === "string";
}

function isPokemonListResponse(data: unknown): data is PokemonListResponse {
	if (data === null || typeof data !== "object") return false;

	const d = data as Record<string, unknown>;

	return (
		typeof d.count === "number" &&
		(d.next === null || typeof d.next === "string") &&
		(d.previous === null || typeof d.previous === "string") &&
		Array.isArray(d.results) &&
		d.results.every((item: unknown) => isPokemon(item))
	);
}

type FetchPokemonListProps = {
	limit: number;
	offset: number;
	signal?: AbortSignal;
};

async function fetchPokemonList({
	limit,
	offset,
	signal,
}: FetchPokemonListProps): Promise<PokemonListResponse> {
	const init: RequestInit = {};
	if (signal) init.signal = signal;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
	return fetchApiWithValidate(url, isPokemonListResponse, init);
}

export { fetchPokemonList };
