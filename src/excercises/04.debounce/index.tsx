import { useState, Suspense } from "react";
import PokemonList from "./PokemonList";

export default function PokemonSearch() {
    const [query, setQuery] = useState("");

    return (
        <div className="max-w-md mx-auto p-4">
            <input
                type="text"
                placeholder="Search Pokémon..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
            />

            <Suspense fallback={<p className="mt-3 text-sm">Loading...</p>}>
                <PokemonList query={query} />
            </Suspense>
        </div>
    );
}
