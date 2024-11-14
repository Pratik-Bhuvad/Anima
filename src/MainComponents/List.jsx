import React from 'react'
import ListCard from '../Components/ListCard'
import animeData from '../Data/Anime.json'

const List = () => {
    const finished = animeData.animes.filter(anime => anime.status === 'completed')
    const want = animeData.animes.filter(anime => anime.status === 'playing')
    const best = animeData.animes.filter(anime => anime.rated === 'PG-13')

    return (
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 w-[95%] mx-auto *:bg-[#2a2b2e] *:rounded-2xl *:p-2 *:w-full *:h-64 *:md:h-72'>
            <ListCard anime={finished} title="finished"/>
            <ListCard anime={want} title="I want to see"/>
            <ListCard anime={best} title="The best of Summer"/>
        </div>
    )
}

export default List
