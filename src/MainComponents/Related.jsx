import React from 'react'
import Download from './Download'

const Related = () => {
  return (
    <div className='h-52 relative '>
        <div className="btns w-3/5 h-16 flex items-center justify-between absolute px-2 right-0 lg:-top-8 *:w-1/5 *:flex *:items-center *:justify-evenly *:bg-[#2a2b2e] *:p-2 *:px-5 *:rounded-md *:font-semibold *:text-xl">
            <button className='!w-[30%] hover:bg-[#ffa629]'>Characters and employees <i Name="fa-solid fa-user-group"></i></button>
            <button className='hover:bg-[#ffa629]'>Related Lists <i className="fa-solid fa-bars"></i></button>
            <button className='hover:bg-[#ffa629]'>Related Anime <i className="fa-solid fa-shuffle"></i></button>
            <button className='hover:bg-[#ffa629]'>Download <i className="fa-solid fa-download"></i></button>
        </div>
        <div className="content pt-10 *:rounded-lg">
            <Download />
        </div>
    </div>
  )
}

export default Related
