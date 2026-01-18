import { useState } from 'react'
import { PokemonFull } from '../types'

type Props = {
    pokemon: PokemonFull
}

const PokemonCard = ({ pokemon }: Props) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
            {/* Header */}
            <div
                className="p-4 cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold capitalize">
                        {pokemon.name}
                    </h2>
                    <span className="text-sm text-gray-500">
                        #{pokemon.id}
                    </span>
                </div>

                <img
                    src={pokemon.detail.sprites.front_default}
                    alt={pokemon.name}
                    className="w-24 h-24 mx-auto my-4"
                />

                {/* Types */}
                <div className="flex justify-center gap-2">
                    {pokemon.types.map(t => (
                        <span
                            key={t.id}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium"
                        >
                            {t.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* Expandable Details */}
            {open && (
                <div className="border-t px-4 py-3 text-sm space-y-3">
                    {/* Species */}
                    <p className="text-gray-700">
                        {
                            pokemon.species.flavor_text_entries?.find(
                                (f: any) => f.language.name === 'en'
                            )?.flavor_text
                        }
                    </p>

                    {/* Abilities */}
                    <div>
                        <h3 className="font-semibold mb-1">Abilities</h3>
                        <div className="flex flex-wrap gap-2">
                            {pokemon.abilities.map(a => (
                                <span
                                    key={a.id}
                                    className="px-2 py-1 bg-gray-200 rounded text-xs"
                                >
                                    {a.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default PokemonCard
