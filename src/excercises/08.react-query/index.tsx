import { useState, useEffect, useRef, useCallback, useDeferredValue, useMemo } from 'react'
import PokemonDetail from './PokemonDetail'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchPokemonList } from './api'

const ReactQuery = () => {
    const [selectedPokemon, setSelectedPokemon] = useState<string>('')
    const [search, setSearch] = useState('')
    const deferredSearch = useDeferredValue(search)

    
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['pokemon-list'],
        queryFn: fetchPokemonList,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.next ? pages.length * 10 : undefined
        },
        initialPageParam: 0,
    })

    const pokemonList =
        data?.pages.flatMap(page => page.results) ?? []

    const loadMoreRef = useRef<HTMLDivElement | null>(null)
    const scrollContainerRef = useRef<HTMLDivElement | null>(null)

    const handleIntersect = useCallback(
        ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage()
            }
        },
        [fetchNextPage, hasNextPage, isFetchingNextPage]
    )

    useEffect(() => {
        const target = loadMoreRef.current
        const root = scrollContainerRef.current
        if (!target || !root) return

        const observer = new IntersectionObserver(handleIntersect, {
            root,
            rootMargin: '100px',
            threshold: 0,
        })

        observer.observe(target)

        return () => observer.disconnect()
    }, [fetchNextPage, hasNextPage, isFetchingNextPage])


    const handleSelectPokemon = useCallback((name: string) => {
        setSelectedPokemon(name)
    }, [])

    const filteredPokemonList = useMemo(() => {
        if (!deferredSearch) return pokemonList

        return pokemonList.filter(pokemon =>
            pokemon.name.includes(deferredSearch.toLowerCase())
        )
    }, [pokemonList, deferredSearch])

    return (
        <div className="h-full max-w-3xl flex flex-col mx-auto p-6 space-y-6">
            {/* Header */}
            <div className="flex">
                <h2 className="text-2xl font-bold text-gray-800">
                    Pokémon List
                </h2>
            </div>

            <div className="flex gap-6 flex-1 min-h-0">
                {/* Pokémon list */}
                <div className="flex flex-col rounded bg-white p-4 shadow-sm min-w-60">
                    <input
                        type="text"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search Pokémon..."
                        className="w-full max-w-xs rounded-lg border border-gray-300 px-3 py-2 mb-2 text-sm focus:outline-none"
                    />

                    <div className="flex flex-1 flex-col gap-2 overflow-y-auto" ref={scrollContainerRef}>
                        {filteredPokemonList?.map((pokemon) => (
                            <button
                                key={pokemon.name}
                                onClick={() => handleSelectPokemon(pokemon.name)}
                                className={`px-4 py-2 text-sm font-medium text-slate-700
                               hover:bg-blue-100 hover:text-blue-700 transition ${selectedPokemon === pokemon.name ? 'bg-blue-200 text-blue-800' : ''}`}

                            >
                                {pokemon.name}
                            </button>
                        ))}
                        <div ref={loadMoreRef} className="h-10 flex justify-center">
                            {isFetchingNextPage && <span>Loading...</span>}
                        </div>
                    </div>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm flex-1 min-h-0">
                    <PokemonDetail name={selectedPokemon} />
                </div>
            </div>
        </div>
    )
}

export default ReactQuery