import React from 'react'
import Showinfo from '../Components/showinfo'
import { useParams } from 'react-router-dom'
import animaData from '../Data/Anime.json'
import Related from '../MainComponents/Related'

const Detail = () => {
  const { id } = useParams()

  return (
    <div className='w-full *:w-full' onLoad={window.scrollTo(0, 0)}>
      <Showinfo anime={animaData.animes.find(anime => anime.id === id)} />
      <div className='bg-[#181818] flex justify-center *:w-11/12 *:rounded-lg'>
        <Related />
      </div>
    </div>
  )
}

export default Detail