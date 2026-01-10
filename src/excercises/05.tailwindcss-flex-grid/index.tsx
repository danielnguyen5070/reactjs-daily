import React from 'react'
import PokemonCard from './PokemonCard';
const FlexGrid = () => {
    return (
        <div className='max-w-6xl m-auto'>
            <div className="grid grid-cols-3 gap-x-8 gap-y-12 p-12 mx-auto">
                <PokemonCard url='src/assets/1.png' hp={39} name='Bulbasaur' types={['grass', 'poison']} attack={49} defense={49} speed={45} />
                <PokemonCard url='src/assets/2.png' hp={58} name='Ivysaur' types={['grass', 'poison']} attack={62} defense={63} speed={60} />
                <PokemonCard url='src/assets/3.png' hp={78} name='Venusaur' types={['grass', 'poison']} attack={82} defense={83} speed={80} />
                <PokemonCard url='src/assets/4.png' hp={39} name='Charmander' types={['fire']} attack={52} defense={43} speed={65} bgColor='red' />
                <PokemonCard url='src/assets/5.png' hp={58} name='Charmeleon' types={['fire']} attack={64} defense={58} speed={80} bgColor='red' />
                <PokemonCard url='src/assets/6.png' hp={78} name='Charizard' types={['fire', 'flying']} attack={84} defense={78} speed={100} bgColor='red' />
                <PokemonCard url='src/assets/7.png' hp={44} name='Squirtle' types={['water']} attack={48} defense={65} speed={43} bgColor='blue' />
                <PokemonCard url='src/assets/8.png' hp={59} name='Wartortle' types={['water']} attack={63} defense={80} speed={58} bgColor='blue' />
                <PokemonCard url='src/assets/9.png' hp={79} name='Blastoise' types={['water']} attack={83} defense={100} speed={78} bgColor='blue' />
            </div>
        </div>
    )
}

export default FlexGrid