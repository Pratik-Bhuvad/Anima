import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Card = ({ anime }) => {
  return (
    <Link to="/" className='h-[40vh] w-10/12 flex flex-col justify-between'>
      <div className='w-full h-[80%] rounded-2xl *:rounded-2xl relative md:h-[86%] group'>
        <img src={anime.url} alt="" className='h-full' />
        <span className='group-hover:invisible'> <Rating rated={anime.rating} /> </span>
        <div id="play" className='w-full h-full flex items-center justify-center absolute top-0 backdrop-blur-md invisible group-hover:visible'>
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#181818bd]">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.3)]">
              <img src="play.png" alt="" className='w-5 h-5 object-contain flex justify-center items-center' />
            </div>
          </div>
        </div>
      </div>
      <h1 className='font-semibold hover:text-[#ffa629]'>{anime.title}</h1>
      <div id="play"></div>
    </Link>
  )
}

export default Card