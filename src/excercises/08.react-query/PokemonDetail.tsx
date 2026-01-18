import { useQuery } from '@tanstack/react-query'
import { fetchPokemonDetail } from './api'

interface Props {
    name: string
}

export default function PokemonDetail({ name }: Props) {
    const { data, isLoading } = useQuery({
        queryKey: ['pokemon-detail', name],
        queryFn: () => fetchPokemonDetail(name),
        enabled: !!name,
    })

    if (!name)
        return (
            <div className="flex h-full items-center justify-center text-gray-500">
                <p className="text-sm">Select a Pokémon</p>
            </div>
        )

    if (isLoading)
        return (
            <div className="flex h-full items-center justify-center text-gray-500">
                <p className="text-sm">Loading...</p>
            </div>
        )

    return (
        <div className="mx-auto rounded-xl bg-white p-6 space-y-4">
            {/* Name */}
            <img
                src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
                alt={name}
                className="object-contain mx-auto"
            />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-3">
                    <span className="text-gray-500">Height</span>
                    <span className="font-semibold text-gray-800">
                        {data?.height}
                    </span>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-gray-50 p-3">
                    <span className="text-gray-500">Weight</span>
                    <span className="font-semibold text-gray-800">
                        {data?.weight}
                    </span>
                </div>
            </div>
        </div>
    )
}
