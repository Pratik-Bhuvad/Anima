import React from 'react'
import Dwnbtn from '../Components/Dwnbtn'

const Download = () => {
    return (
        <div className='flex flex-col items-center bg-[#2a2b2e] py-5'>
            <button className='flex items-center justify-evenly w-[12%] text-xl font-semibold h-10'><i className="fa-solid fa-angle-down fa-lg"></i> The First Chapter</button>
            <div className='w-full px-7 flex items-center justify-between *:flex *:items-center *:justify-evenly *:w-[27%] *:text-lg'>
                <div className="watchguide !w-[10%]">
                    <i className="fa-solid fa-circle-question"></i>
                    Watch guide
                </div>
                <div className="">
                   The 16th episode will be broadcast one week late 
                    <i className="fa-regular fa-bell pt-1"></i>
                </div>
            </div>

            <div id="download_links">
                <div id="epsiodes" className='grid grid-cols-2 lg:grid-cols-4'>
                <Dwnbtn />
                <Dwnbtn />
                <Dwnbtn />
                <Dwnbtn />
                <Dwnbtn />
                </div>
            </div>
        </div>
    )
}

export default Download
