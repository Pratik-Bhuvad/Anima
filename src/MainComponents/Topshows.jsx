import React, { useEffect, useState } from 'react'
import View from '../Components/View'
import Shows from '../Components/Shows'
import animeData from '../Data/Anime.json'
import { Link } from 'react-router-dom'

const Topshows = (props) => {
  const [sorting, setSorting] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSorting(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const viewshow = props.view || false
  return (
    <div className='w-full xl:h-[72vh] flex flex-col justify-between px-2 my-5 lg:px-12' >
      <div id="head" className={`w-full flex items-center ${(viewshow) ? 'justify-between' : 'justify-end'} px-4`}>
        {viewshow &&
          <div>
            <View />
            <button className='relative p-2 px-3 ml-3 rounded-xl text-xs tracking-wider bg-[#2a2b2e] text-[#787878] lg:p-3 lg:rounded-2xl duration-75 md:text-sm lg:text-base group' onClick={() => setSorting(!sorting)}>
              <span className='hover:text-[#ffa629]'>
                <i className="fa-solid fa-angle-down fa-lg"></i> &nbsp;
                Sorting
              </span>
              {sorting && <div className='w-full h-28 rounded-xl z-50 mt-[2px] flex flex-col justify-evenly invisible *:w-full *:flex *:items-center *:justify-between *:px-2 *:h-full absolute left-0 top-full bg-[#2a2b2e] text-white group-hover:visible'>
                <Link to={`/sort/date`} className='rounded-md hover:bg-[#787878]'><span className='w-1/3 flex justify-between items-center'><i className="fa-solid fa-arrow-down"></i><i className="fa-solid fa-arrow-up"></i></span>Date</Link>
                <Link to={`/sort/like`} className='rounded-md hover:bg-[#787878]'><span className='w-1/3 flex justify-between items-center'><i className="fa-solid fa-arrow-down"></i><i className="fa-solid fa-arrow-up"></i></span>Like</Link>
                <Link to={`/sort/answer`} className='rounded-md hover:bg-[#787878]'><span className='w-1/3 flex justify-between items-center'><i className="fa-solid fa-arrow-down"></i><i className="fa-solid fa-arrow-up"></i></span>Answer</Link>
              </div>}
            </button>
          </div>}
        <h2 className='font-bold lg:text-3xl'>{props.title}</h2> </div>
      <div className="w-full h-auto md:h-[130vh] lg:h-[90%] p-5 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-7 items-center justify-center">
        {
          animeData.animes.slice(props.start, props.end).map((anime, index) => (
            <Shows key={index} anime={anime} />
          ))
        }
      </div>
    </div>
  )
}

export default Topshows
