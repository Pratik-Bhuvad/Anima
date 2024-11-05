import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = ({ link}) => {
  return (
    <Link to={link.path} className='lg:text-xl flex items-center font-mono tracking-tight hover:text-[#ffa629] ease-in-out'>
      {link.name}
      <span className='w-2 h-2 border-2 border-white rounded-full ml-3 mt-[3px] lg:hidden'></span>
    </Link>
  )
}

export default Navlinks