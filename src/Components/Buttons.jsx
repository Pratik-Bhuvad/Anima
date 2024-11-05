import React from 'react'

const Buttons = (direction) => {
  return (
    <button className='w-[42%] h-11 bg-[rgba(42,43,46,1)] rounded-xl px-5 py-3 flex justify-center items-center cursor-pointer outline-none' onClick={direction.card} onKeyDown={direction.card}>
      <img src={`${direction.move}.png`} alt="Buttons" className='w-[110%] h-[110%] object-contain'/>
    </button>
  )
}

export default Buttons