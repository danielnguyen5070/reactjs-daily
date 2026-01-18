const BASE = 'https://pokeapi.co/api/v2'

export const fetchPokemonDetail = async (name: string): Promise<any> => {
    const res = await fetch(`${BASE}/pokemon/${name}`)
    return res.json()
}