import React from 'react'
import View from '../Components/View'
import Shows from '../Components/Shows'
import animeData from '../Data/Anime.json'

const Topshows = (props) => {
  return (
    <div className='w-full lg:h-[72vh] flex flex-col justify-between px-12'>
      <div id="head" className='w-full flex items-center justify-between lg:px-4'>
        <div>
          <View />
          <button className='p-2 px-3 ml-3 rounded-xl text-xs tracking-wider bg-[#2a2b2e] text-[#787878] lg:p-3 lg:rounded-2xl hover:text-[#ffa629] duration-75 md:text-sm lg:text-base'>
            <i className="fa-solid fa-angle-down fa-lg"></i> &nbsp;
            Sorting
          </button>
        </div>
        <h2 className='text-xl font-bold lg:text-3xl'>{props.title}</h2> </div>
      <div className="w-full lg:h-[90%] p-5 grid grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-2 gap-5 gap-y-7 items-center justify-center">
        {
          animeData[props.anime].slice(0,8).map((anime, index) => (
            <Shows key={index} anime={anime} />
          ))
        }
      </div>
    </div>
  )
}

export default Topshows
