import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navlinks from '../Components/Navlinks'
import navData from '../Data/Navlinks.json'

const Navbar = () => {
  const [show, setShow] = useState(-100)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setShow(-100); // Sidebar hidden initially on smaller screens
      } else {
        setShow(0.5); // Sidebar always visible on larger screens
      }
    };

    // Check screen size on initial load and on resize
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className='h-[3.5rem] w-screen bg-[#2a2b2e99] z-40 sticky flex items-center justify-between overflow-x-hidden md:h-[4.5rem] '>
      <div className="profile w-full h-full flex items-center justify-evenly px-3 *:h-3/5 *:flex *:items-center lg:w-2/12">
        <span className='flex items-center justify-evenly w-[27%] cursor-pointer'>
          <i className="fa-solid fa-angle-down lg:fa-xl" style={{ color: 'white' }}></i>
          <img src="https://rzw-gh.github.io/movie-streaming-website/images/profile/01.png" alt="" className='rounded-full w-9 h-9 lg:w-11 lg:h-11' />
        </span>
        <Link to="/"><i className="fa-sharp fa-regular fa-bookmark fa-xl"></i></Link>
        <Link to="/"><i className="fa-regular fa-sun fa-xl" style={{ color: 'white' }}></i></Link>
        <Link to="/"><i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-xl" style={{ color: 'white' }}></i></Link>
        <span>
          <img src={navData.logo} alt="" className='w-10 h-10 lg:!hidden' />
          <span onClick={() => setShow(1)} className='mt-1'><i className="fa-solid fa-bars lg:!hidden" style={{ color: 'grey' }}></i></span>
        </span>
      </div>
      {show &&
        <div className='links w-9/12 h-[85vh] flex flex-col items-end fixed top-0 px-7 bg-[#1d1d1dfd] ease-in-out duration-500 lg:flex-row-reverse lg:items-center lg:h-[4.5rem] lg:w-5/12' style={{ right: `${show}%` }}>
          <span className='w-full flex items-center justify-between lg:w-auto lg:ml-4'>
            <i className="fa-solid fa-xmark fa-xl lg:!hidden" style={{ color: 'grey' }} onClick={() => setShow(-100)}></i>
            <img src={navData.logo} alt="" className='lg:object-cover inline-block w-16 my-2' />
          </span>
          <hr className='w-full my-4 lg:hidden lg:my-0' />
          <div className='w-full h-2/6 flex flex-col items-end justify-around lg:flex-row lg:items-center'>
            {
              navData.navLinks.map((link, index) => (
                <Navlinks key={index} link={link} />
              ))
            }
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar