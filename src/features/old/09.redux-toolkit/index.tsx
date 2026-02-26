import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchPokemonDetailThunk } from './state/pokemon-thunks'

const PokemonPage = () => {
    const dispatch = useAppDispatch()
    const { data, loading } = useAppSelector(s => s.pokemonToolkit)

    useEffect(() => {
        dispatch(fetchPokemonDetailThunk())
    }, [dispatch])

    if (loading) return <p>Loading...</p>

    return <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow">
            <img
                src={data.sprites.front_default}
                alt={data.name}
                className="w-32 h-32"
            />
            <div>
                <h1 className="text-3xl font-bold capitalize">
                    {data.name}
                </h1>
                <p className="text-gray-500">#{data.id}</p>

                {/* Types */}
                <div className="flex gap-2 mt-2">
                    {data.types.map((t: any) => (
                        <span
                            key={t.type.name}
                            className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800 capitalize"
                        >
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Stats */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Stats</h2>
            <div className="space-y-3">
                {data.stats.map((s: any) => (
                    <div key={s.stat.name}>
                        <div className="flex justify-between text-sm">
                            <span className="capitalize">{s.stat.name}</span>
                            <span>{s.base_stat}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded h-2">
                            <div
                                className="bg-green-500 h-2 rounded"
                                style={{ width: `${(s.base_stat / 200) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Abilities */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Abilities</h2>
            <div className="flex gap-2 flex-wrap">
                {data.abilities.map((a: any) => (
                    <span
                        key={a.ability.name}
                        className="px-3 py-1 bg-gray-100 rounded capitalize text-sm"
                    >
                        {a.ability.name}
                    </span>
                ))}
            </div>
        </div>

        {/* Info */}
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="text-gray-500 text-sm">Height</p>
                <p className="font-semibold">{data.height}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="text-gray-500 text-sm">Weight</p>
                <p className="font-semibold">{data.weight}</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow text-center">
                <p className="text-gray-500 text-sm">Base EXP</p>
                <p className="font-semibold">{data.base_experience}</p>
            </div>
        </div>

        {/* Sprites */}
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-3">Sprites</h2>
            <div className="flex gap-4 flex-wrap">
                {Object.values(data.sprites)
                    .filter(v => typeof v === 'string')
                    .map((src: any) => (
                        <img
                            key={src}
                            src={src}
                            alt="sprite"
                            className="w-16 h-16"
                        />
                    ))}
            </div>
        </div>

        {/* Moves */}
        <details className="bg-white p-6 rounded-xl shadow">
            <summary className="cursor-pointer font-semibold">
                Moves ({data.moves.length})
            </summary>
            <div className="mt-4 flex flex-wrap gap-2">
                {data.moves.slice(0, 20).map((m: any) => (
                    <span
                        key={m.move.name}
                        className="px-2 py-1 text-xs bg-gray-100 rounded capitalize"
                    >
                        {m.move.name}
                    </span>
                ))}
            </div>
        </details>
    </div>
}

export default PokemonPage
