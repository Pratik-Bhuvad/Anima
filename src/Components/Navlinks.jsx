import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = ({link}) => {
  return (
    <Link to={link.path} className='text-xl font-mono tracking-tight hover:text-[#ffa629] delay-100'>
        {link.name}
    </Link>
  )
}

export default Navlinks