import React from 'react'
import Download from './Download'

const Related = ({anime}) => {
    const episodes = anime.episodes
    
  return (
    <div className='pb-10 relative'>
        <div className="btns w-full grid grid-cols-2 grid-rows-2 items-center justify-items-center gap-y-2 pt-3 *:p-2 absolute right-0 lg:p-0 lg:justify-items-end lg:h-16 lg:grid-cols-4 lg:gap-x-2 lg:w-2/4 lg:-top-4 *:flex *:text-sm *:items-center *:justify-evenly *:bg-[#2a2b2e] *:lg:p-2  *:rounded-md *:lg:font-semibold *:lg:text-xl *:w-10/12">
            <button className='lg:!w-[140%] hover:bg-[#ffa629]'>Characters and employees <i className="fa-solid fa-user-group"></i></button>
            <button className='hover:bg-[#ffa629]'>Related Lists <i className="fa-solid fa-bars"></i></button>
            <button className='hover:bg-[#ffa629]'>Related Anime <i className="fa-solid fa-shuffle"></i></button>
            <button className='hover:bg-[#ffa629]'>Download <i className="fa-solid fa-download"></i></button>
        </div>
        <div className="content pt-36 *:px-2 *:rounded-lg lg:pt-10">
            <Download ep={episodes}/>
        </div>
    </div>
  )
}

export default Related
