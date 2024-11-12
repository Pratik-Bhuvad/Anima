import React from 'react'
import Showinfo from '../Components/showinfo'
import { useParams } from 'react-router-dom'
import animaData from '../Data/Anime.json'
import Related from '../MainComponents/Related'

const Detail = () => {
  const { id } = useParams()
  const anime = animaData.animes.find(anime => anime.id === id)

  return (
    <div className='w-full *:w-full' onLoad={window.scrollTo(0, 0)}>
      <Showinfo anime={anime} />
      <div className='bg-[#181818] flex justify-center *:w-full *:lg:w-[95%] *:rounded-lg'>
        <Related anime={anime}/>
      </div>
    </div>
  )
}

export default Detail