export interface NamedAPIResource {
    name: string
    url: string
}

export interface PokemonListItem {
    id: number
    name: string
}

export interface PokemonFull {
    id: number
    name: string
    detail: any
    species: any
    types: any[]
    abilities: any[]
}

export interface PokemonState {
    list: PokemonFull[]
    loading: boolean
    error?: string
}
