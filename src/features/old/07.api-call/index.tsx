import { useState, useEffect, useRef } from "react"
// https://pokeapi.co/api/v2/pokemon?limit=10

// count: 1350
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

type Pokemon = {
    name: string
    url: string
}

type PokemonResponse = {
    count: number,
    results: Pokemon[]
}

const URL = "https://pokeapi.co/api/v2/pokemon?limit=100"
const DELAY_TIME = 500

function API() {
    const [search, setSearch] = useState<string>("")
    const searchDebounce = useDebounce(search, DELAY_TIME)

    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(URL)

                if (!response.ok) throw Error(`HTTP ${response.status}`)

                const data: PokemonResponse = await response.json()

                setPokemons(data.results)
            } catch (err) {
                setError((err as Error).message)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>

    const filterData = pokemons.filter((item) => item.name.toLowerCase().includes(searchDebounce.toLowerCase()))

    return (
        <>
            <input value={search} onChange={(e) => setSearch(e.target.value)}></input>
            <div>{searchDebounce}</div>
            {
                filterData.map((item: Pokemon) => {
                    return (
                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

function useDebounce<T>(value: T, delay: number) {
    const [debounce, setDebounce] = useState(value)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        
        timer.current = setTimeout(() => {
            setDebounce(value)
        }, delay)

        return () => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [value])

    return debounce
}

export default API