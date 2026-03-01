import PokemonView from './PokemonView'
import { usePokemonList } from '../hooks/usePokemonList'

const PokemonPage = () => {
    const props = usePokemonList()
    return (
        <>
            <PokemonView {...props} />
        </>
    )
}

export default PokemonPage