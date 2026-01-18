import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchPokemonAll } from './state/pokemon-slice'
import PokemonCard from './components/pokemon-card'

const PokemonPage = () => {
  const dispatch = useAppDispatch()
  const { list, loading } = useAppSelector(s => s.pokemon)

  useEffect(() => {
    dispatch(fetchPokemonAll())
  }, [dispatch])


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold animate-pulse">
          Loading Pokémon...
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">
          Pokémon Encyclopedia
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PokemonPage
