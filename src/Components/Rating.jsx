import React from 'react'

const Rating = (rating) => {

  return (
    <div className='w-11 h-11 absolute top-1 left-1 flex items-center justify-center !rounded-full bg-[rgba(42,43,46,0.5)] backdrop-blur-md border-6'>
      <div className="flex items-center justify-center relative w-8 h-8 rounded-full after:content-[''] after:absolute after:w-4/5 after:h-4/5 after:bg-[rgb(42,43,46) after:rounded-full]" style={{background:`conic-gradient(#15de26 0% ${(rating.rated)*10}%, rgba(21, 222, 38, 0.2) ${(rating.rated)}% 100%)`}}>
        <span className="text-[12px] text-af-white-light z-10 w-6 h-6 flex items-center justify-center rounded-full bg-[rgba(42,43,46,1)]">{rating.rated}</span>
      </div>
    </div>
  )
}

export default Rating
 