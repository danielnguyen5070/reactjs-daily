import { use } from "react";
import { searchPokemon } from "./fakeApi";

type Props = {
    query: string;
};

export default function PokemonList({ query }: Props) {
    const pokemon = use(searchPokemon(query));

    return (
        <ul className="mt-4 space-y-2">
            {pokemon.map((p) => (
                <li
                    key={p.name}
                    className="rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200"
                >
                    {p.name}
                </li>
            ))}
        </ul>
    );
}
