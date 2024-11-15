import React from 'react'

const CharacterCard = ({character}) => {
    
    return (
        <div id='character' className='w-full h-full px-2 lg:px-0 flex items-center justify-between bg-[#2a2b2e] *:w-[45%] *:h-full *:rounded-xl *:flex *:items-center *:font-medium text-xs md:text-sm'>
            <div id="char">
                <img src={character.character_img} alt="" loading='lazy' className='w-14 h-14 my-2 rounded-full lg:rounded-none lg:w-[55%] lg:rounded-tl-xl lg:rounded-bl-xl xl:mr-5 mr-2 lg:h-full object-cover' />
                <p>{character.name}</p>
            </div>
            <div id="VA">
                <span className='h-full flex flex-col justify-center gap-2 w-3/5'>
                    <p>{character.voice_artist_name}</p>
                    <p>{character.va_voice}</p>
                </span>
                <img src={character.va_img} alt="" loading='lazy' className='w-14 h-14 my-2 rounded-full lg:rounded-none lg:w-[55%] lg:rounded-tr-xl lg:rounded-br-xl xl:ml-5 ml-2 lg:h-full object-cover' />
            </div>
        </div>
    )
}

export default CharacterCard
