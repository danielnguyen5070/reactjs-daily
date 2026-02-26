export type Pokemon = {
    name: string;
    url: string;
};

// Map<query, Promise<Pokemon[]>>
const pokemonCache = new Map<string, Promise<Pokemon[]>>();

export function searchPokemon(query: string): Promise<Pokemon[]> {
    if (!query) {
        return Promise.resolve([]);
    }

    if (pokemonCache.has(query)) {
        return pokemonCache.get(query)!;
    }

    const promise = fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1000",
        { cache: "no-store" }
    )
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch Pokémon");
            }
            return res.json();
        })
        .then((data) =>
            data.results.filter((pokemon: Pokemon) =>
                pokemon.name.toLowerCase().includes(query.toLowerCase())
            )
        )
        .catch((error) => {
            // ❗ Remove failed promise so it can retry later
            pokemonCache.delete(query);
            throw error;
        });

    // ✅ Cache the promise immediately
    pokemonCache.set(query, promise);

    return promise;
}
