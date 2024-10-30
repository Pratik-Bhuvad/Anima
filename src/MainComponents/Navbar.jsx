import React from 'react'
import { Link } from 'react-router-dom'
import Navlinks from '../Components/Navlinks'
import navData from '../Data/Navlinks.json'

const Navbar = () => {
  return (
    <nav className='h-[4.5rem] w-screen bg-[#2a2b2e99] z-40 sticky flex items-center justify-between'>
      <div className="profile w-2/12 h-full flex items-center justify-evenly *:h-3/5 *:flex *:items-center">
        <span className='flex items-center justify-evenly w-[27%] cursor-pointer'>
          <i className="fa-solid fa-angle-down fa-xl" style={{ color: 'white' }}></i>
          <img src="https://rzw-gh.github.io/movie-streaming-website/images/profile/01.png" alt="" className='rounded-full w-11 h-11' />
        </span>
        <Link to="/"><i className="fa-sharp fa-regular fa-bookmark fa-2xl"></i></Link>
        <Link to="/"><i className="fa-regular fa-sun fa-2xl" style={{ color: 'white' }}></i></Link>
        <Link to="/"><i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-2xl" style={{ color: 'white' }}></i></Link>
      </div>
      <div className="links w-5/12 h-full flex items-center justify-evenly *:font-bold *:h-4/5 *:flex *:items-center">
        {
          navData.navLinks.map((link, index) => (
            <Navlinks key={index} link={link} />
          ))
        }
        <img src={navData.logo} alt="" className='object-cover' />
      </div>
    </nav>
  )
}

export default Navbar
