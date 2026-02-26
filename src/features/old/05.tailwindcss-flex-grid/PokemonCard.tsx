import React from 'react'

type PokemonCardProps = {
    url: string;
    hp: number;
    name: string;
    types: string[];
    attack: number;
    defense: number;
    speed: number;
    bgColor?: string;
}

const PokemonCard = (pokemon: PokemonCardProps) => {
    const { url, hp, name, types, attack, defense, speed, bgColor = "green" } = pokemon;

    return (
        <div className="relative overflow-hidden shadow-lg rounded-lg">
            <div className={`${generateBgColor()} h-92 w-92 rounded-full absolute -top-52`}></div>
            <div className='relative z-10'>
                <div className='flex justify-end m-4'>
                    <div className='rounded-full bg-white text-center px-3'>
                        <span className='font-bold mr-1'>HP</span>
                        <span className='text-xl'>{hp}</span>
                    </div>
                </div>
                <img src={url} className='w-52 m-auto mt-4' />
                <p className="text-2xl font-bold text-center text-gray-700 mt-4 font-mono">{name}</p>
                <div className='flex justify-center space-x-2 mt-4'>
                    {
                        types.map((type, index) => (
                            <p key={index} className={`rounded-full text-white ${TYPE_BG_MAP[type as keyof typeof TYPE_BG_MAP]} px-4 py-2`}>{type}</p>
                        ))
                    }
                </div>

                <div className='flex justify-between px-8 mt-8 mb-6'>
                    <div>
                        <p className='text-2xl font-bold text-gray-700 text-center'>{attack}</p>
                        <p className='text-gray-500 text-sm'>Attack</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-700 text-center'>{defense}</p>
                        <p className='text-gray-500 text-sm'>Defense</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-gray-700 text-center'>{speed}</p>
                        <p className='text-gray-500 text-sm'>Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function generateBgColor() {
    const colors = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-teal-500",
        "bg-orange-500",
        "bg-cyan-500",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}

const TYPE_BG_MAP = {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    ice: "bg-cyan-300",
    fighting: "bg-orange-600",
    poison: "bg-purple-500",
    ground: "bg-amber-600",
    flying: "bg-sky-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-stone-500",
    ghost: "bg-indigo-700",
    dragon: "bg-violet-600",
    dark: "bg-neutral-800",
    steel: "bg-gray-400",
    fairy: "bg-rose-400",
};

export default PokemonCard