import React from 'react'

const Dwnbtn = ({number}) => {
    
    return (
        <div className='w-full flex items-center justify-between p-3.5 px-0 bg-[#ededed] text-black rounded-md lg:pl-2'>
            <span className='w-3/4 relative h-full items-center justify-evenly hidden lg:flex'>
                <div className='relative group'>
                    <i className="fa-solid fa-play fa-xl cursor-pointer duration-75 hover:text-[#ffa629]"></i>
                    <span className='text-sm bg-[#2e2f31fd] text-white font-normal w-[4.5vw] p-2 rounded absolute -top-10 -left-7 invisible group-hover:visible duration-150'>Play online</span>
                </div>
                <div className='relative group'>
                    <i className="fa-solid fa-download fa-xl cursor-pointer duration-75 hover:text-[#ffa629]"></i>
                    <span className='text-sm bg-[#2e2f31fd] text-white font-normal w-[4.5vw] p-2 rounded absolute -top-10 -left-7 invisible group-hover:visible duration-150'>Download</span>
                </div>
            </span>
            <p className='w-full font-medium flex justify-center text-center px-3 xl:px-4'><span className='hidden mr-2 lg:block'>Part</span>{(number < 10)?('0'+number):number}</p>
        </div>
    )
}

export default Dwnbtn
