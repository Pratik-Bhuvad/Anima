import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Shows = ({ anime }) => {
  return (
    <div className='w-full h-full '>
      <Link to={`/`} className='h-full'>
        <div className='relative w-full h-[90%] rounded-2xl group'>
        <img src={anime.url} alt={anime.title} className='h-full object-contain rounded-3xl' loading='lazy'/>
          <div className="absolute top-4 left-1  text-white px-2 py-1 rounded-lg z-50 lg::top-2">
            <Rating rated={anime.rating} />
          </div>
          <div id="info" className='w-full h-full absolute top-0 rounded-2xl flex justify-center invisible z-10 group-hover:visible bg-[#1b1b1bb4]'>
            <div id="basicinfo" className='absolute top-8 right-2 h-9 flex items-center justify-end group-hover:top-4 duration-100 *:bg-[#ffa629] *:rounded-2xl *:px-2 *:py-1 *:text-[8px] *:mx-[2px] *:text-black *:lowercase md:*:text-[10px] lg:*:text-xs'>
              <span>{anime.views} <i className="fa-regular fa-eye fa-sm"></i></span>
              {
                anime.genre.slice(0, 3).map((gen, index) => (
                  <span key={index}>{gen}</span>
                ))
              }
            </div>
            <p className='w-11/12 font-medium leading-6 absolute -bottom-2 text-end group-hover:bottom-3 duration-75 text-xs md:text-sm lg:text-base'>{anime.card_description}</p>
          </div>
        </div>
      </Link>
      <h1 className='w-full font-semibold text-lg text-end lg:mt-2'>{anime.title}</h1>
    </div>
  )
}

export default Shows
