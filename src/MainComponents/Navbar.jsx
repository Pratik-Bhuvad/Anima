import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navlinks from '../Components/Navlinks'
import genresData from '../Data/Genres.json'
import navData from '../Data/Navlinks.json'

const Navbar = () => {
  const [show, setShow] = useState(-100)
  const [search, setSearch] = useState(false)
  const searchRef = useRef(null)

  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [showProfileLinks, setShowProfileLinks] = useState(false);
  let hideProfileTimeout;

  useEffect(() => {
    if (isProfileHovered) {
      setShowProfileLinks(true);
    } else {
      hideProfileTimeout = setTimeout(() => setShowProfileLinks(false), 300);
    }

    return () => clearTimeout(hideProfileTimeout);
  }, [isProfileHovered]);

  const [isLinkHovered, setIsLinkHovered] = useState(false);
  const [isGridHovered, setIsGridHovered] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    let hideGridTimeout;

    if (isLinkHovered || isGridHovered) {
      setShowGrid(true);
    } else {
      hideGridTimeout = setTimeout(() => setShowGrid(false), 300);
    }

    return () => clearTimeout(hideGridTimeout);
  }, [isLinkHovered, isGridHovered]);


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
      } else {
        setShow(0.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (search && searchRef.current) {
      searchRef.current.focus()
    }
  }, [search])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("form is working")
  }

  return (
    <nav className='h-[3.5rem] w-[calc(100vw-17 px)] bg-[#2a2b2e99] z-40 sticky top-0 flex items-center justify-between overflow-x-hidden lg:h-[4.5rem]'>
      <div className="profile w-full h-full flex items-center justify-between px-3 lg:w-3/12 xl:w-2/12">
        <div className="w-3/5 flex items-center justify-evenly md:w-1/4 lg:w-[120%]">
          <span className="flex items-center justify-between w-[32%] cursor-pointer lg:w-1/4" onClick={() => { setShowProfileLinks(!showProfileLinks) }} onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)} >
            <i className="fa-solid fa-angle-down xl:fa-xl" style={{ color: 'white' }}></i>
            <img src="https://rzw-gh.github.io/movie-streaming-website/images/profile/01.png" alt="" loading='lazy' className="rounded-full w-9 h-9 xl:w-11 xl:h-11" />
          </span>
          <Link to="/"> <i className="fa-sharp fa-regular fa-bookmark fa-xl"></i> </Link>
          <Link to="/"> <i className="fa-regular fa-sun fa-xl" style={{ color: 'white' }}></i> </Link>
          <span onClick={() => setSearch((prevSearch) => !prevSearch)}> <i className="fa-solid fa-magnifying-glass fa-flip-horizontal fa-xl cursor-pointer" style={{ color: 'white' }}></i> </span>
        </div>
        <span className="w-1/3 flex items-center justify-around md:w-1/5 lg:!hidden">
          <Link to="/"> <img src={navData.logo} alt="" loading='lazy' className="w-10 h-10 " /> </Link>
          <span onClick={() => setShow(0.1)} className="mt-1"> <i className="fa-solid fa-bars fa-xl" style={{ color: 'grey' }}></i> </span>
        </span>

        {showProfileLinks && (
          <div className="fixed w-[53%] h-[70vh] top-[3.7rem] left-6 flex flex-col items-center bg-[#242527] md:w-1/4 xl:w-[12.5vw] xl:top-[4.5rem] xl:left-10 z-60" onMouseEnter={() => setIsProfileHovered(true)} onMouseLeave={() => setIsProfileHovered(false)} >
            <div id="sub" className="flex flex-col items-center justify-evenly w-full h-[30%] border-b-[0.3px]">
              <img src="https://rzw-gh.github.io/movie-streaming-website/images/profile/01.png" alt="" loading='lazy' className="object-contain w-24 h-24 rounded-full" />
              <h2>Username</h2>
              <Link to="/sub" className="w-11/12 h-1/6 flex items-center justify-center rounded-full tracking-wide bg-[#ffa629] text-white text-xs xl:text-lg mb-1" > Buy a subscription <i className="fa-solid fa-crown ml-1"></i> </Link>
            </div>
            <div id="profileLinks" className="w-full h-[70%] flex flex-col justify-around *:text-xs xl:*:text-lg">
              {navData.profileLinks.map((link, index) => (
                <Link onClick={() => setShowProfileLinks(false)} className={`w-full h-2/4 flex items-center justify-end text-lg text-end font-mono tracking-tighter pr-3 hover:text-[#ffa629] ease-in-out duration-150 ${(index === 2 || index === 4 || index === 7) ? 'border-b-[0.3px]' : 'border-none'}`} to={link.path} key={index}>
                  {link.name}
                  <i className={`fa-solid ${link.icon} ml-4 mt-1`}></i>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {search &&
        <form onSubmit={handleSubmit}>
          <input ref={searchRef} type="text" name="" id="" className='w-[90vw] fixed left-5 top-16 text-xl rounded-sm p-1 px-3 border-2 border-white bg-[rgba(0,0,0,0.5)] text-white md:left-12 lg:w-[25%] lg:top-[15px] lg:left-[23%] xl:w-[30%] xl:left-[20%]' />
        </form>
      }
      {show &&
        <div className='links w-9/12  h-[80vh] flex flex-col items-end fixed top-0 px-7 lg:px-0 xl:px-7 bg-[#1d1d1dfd] lg:bg-transparent ease-in-out duration-500 md:w-2/5 lg:flex-row-reverse lg:items-center lg:h-[4.5rem] lg:w-6/12 xl:w-5/12' style={{ right: `${show}%` }}>
          <span className='w-full flex items-center justify-between  lg:w-auto xl:ml-4'>
            <i className="fa-solid fa-xmark fa-xl lg:!hidden" style={{ color: 'grey' }} onClick={() => setShow(-100)}></i>
            <Link to="/"> <img src={navData.logo} alt="" loading='lazy' className='lg:object-cover inline-block w-16 my-2' /> </Link>
          </span>
          <hr className='w-full my-4 lg:hidden lg:my-0' />
          <div className="w-full h-full flex flex-col items-end overflow-auto lg:flex-row lg:items-center lg:justify-around lg:overflow-hidden *:my-2">
            {
              navData.navLinks.map((link, index) => (
                <div key={index} onClick={() => { setShowGrid(link.name === 'Genres' ? !showGrid : false) }} onMouseEnter={() => setIsLinkHovered(link.name === 'Genres')} onMouseLeave={() => setIsLinkHovered(false)}>
                  <Navlinks link={link} />
                  {showGrid && (link.name === 'Genres') && (
                    <div className="w-11/12  lg:absolute lg:top-[4.5rem] lg:-left-[40%] lg:items-center lg:text-center lg:justify-center lg:grid lg:grid-cols-5 lg:grid-rows-5 lg:gap-4 lg:gap-y-6 lg:p-5 lg:py-7 lg:rounded-2xl lg:bg-[#2a2b2e] font-semibold flex flex-col text-end pr-5" onMouseEnter={() => setIsGridHovered(true)} onMouseLeave={() => setIsGridHovered(false)} >
                      {
                        genresData.genres.map((link, index) => (
                          <Link onClick={() => setShowGrid(false)} key={index} to={link.path} className="w-full h-full py-1 rounded-full hover:bg-[#ffa629] hover:text-black transition-all ease-in-out" >
                            {link.name}
                          </Link>
                        ))
                      }
                    </div>
                  )}

                </div>
              ))
            }
          </div>
        </div>
      }
    </nav>
  )
}

export default Navbar