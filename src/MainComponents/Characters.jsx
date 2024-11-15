import React from 'react'
import CharacterCard from '../Components/characterCard'

const Characters = ({ch}) => {
    
    return (
        <div id='characters' className='w-full lg:h-1/3 lg:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 *:rounded-xl'>
            { ch.map((character, index) => (
                <CharacterCard key={index} character={character}/>
            ))
            }
        </div>
    )
}

export default Characters
