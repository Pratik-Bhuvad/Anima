import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Shows = ({ anime }) => {
  return (
    <div className='w-full h-full '>
      <Link to={`/`} className='h-full'>
        <div className='relative w-full h-[90%] rounded-2xl group' style={{ background: `url(${anime.url}) center/cover` }}>
          <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded-lg z-50">
            <Rating rated={anime.rating} />
          </div>
          <div id="info" className='w-full h-full rounded-2xl flex justify-center invisible z-10 group-hover:visible bg-[#1b1b1bb4]'>
            <div id="basicinfo" className='absolute top-8 right-2 h-9 flex items-center justify-end group-hover:top-4 duration-100 *:bg-[#ffa629] *:rounded-2xl *:px-2 *:py-1 *:text-xs *:text-black *:lowercase *:mx-1'>
              <span>{anime.views} <i className="fa-regular fa-eye fa-sm"></i></span>
              {
                anime.genre.slice(0, 3).map((gen, index) => (
                  <span key={index}>{gen}</span>
                ))
              }
            </div>
            <p className='w-11/12 font-medium leading-6 absolute -bottom-2 text-end group-hover:bottom-3 duration-75'>{anime.card_description}</p>
          </div>
        </div>
      </Link>
      <h1 className='w-full font-semibold text-lg text-end mt-2'>{anime.title}</h1>
    </div>
  )
}

export default Shows
