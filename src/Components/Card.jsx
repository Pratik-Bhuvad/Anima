import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating'

const Card = ({ anime }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [infoPosition, setInfoPosition] = useState('right');
  const cardRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (showInfo && cardRef.current && infoRef.current) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const infoRect = infoRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;

      if (cardRect.right + infoRect.width > windowWidth) {
        setInfoPosition('left');
      } else {
        setInfoPosition('right');
      }
    }
  }, [showInfo]);

  return (
    <div className="pt-10">
      <div className="relative h-[40vh] w-10/12 overflow-visible" ref={cardRef}>
        <div className="h-full flex flex-col justify-between">
          <Link to={`/detail/${anime.id}`} className="w-full h-[80%] rounded-2xl relative group overflow-visible" onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)} >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img src={anime.card_url} alt={anime.title || 'Anime cover'} loading='lazy' className="h-full w-full object-fill" />
              <span className="md:group-hover:invisible">
                <div className="absolute top-2 left-2  text-white px-2 py-1 rounded-lg">
                  <Rating rated={anime.rating} />
                </div>
              </span>
              <div className="w-full h-full hidden items-center justify-center absolute top-0 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:!flex">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#181818bd]">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.3)]">
                    <img src="play.png" alt="Play" loading='lazy' className="w-5 h-5 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            <div ref={infoRef} className={`hidden absolute z-40 w-72 h-[128%] bg-[#252525] rounded-2xl p-2 shadow-lg  ${infoPosition === 'right' ? ' -ml-1' : 'right-full -mr-4'} top-[52%] -left-0 -translate-y-1/2 transition-all duration-300 ease-out ${showInfo ? (infoPosition === 'right' ? 'translate-x-3/4' : '-translate-x-full') : 'translate-x-0 opacity-0'} opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto md:block *:mb-3`}
              style={{ transformOrigin: infoPosition === 'right' ? 'left center' : 'right center ' }} >
              <div id="title" className='flex items-end justify-between px-2 relative !mb-7'>
                <h2 className='font-semibold text-xl overflow-hidden pt-2'>{anime.title}</h2>
                <span className='w-10 h-14 flex items-center justify-center text-xl font-extrabold rounded-br-lg rounded-bl-lg border-4 border-[#ffa629] border-t-0 absolute right-0 -top-2'><i className="fa-solid fa-plus"></i></span>
              </div>
              <div id="basicinfo" className='flex items-center justify-around *:bg-[#ffa629] *:rounded-2xl *:px-2 *:py-1 *:text-sm *:text-black *:lowercase '>
                <span>{anime.rating} <i className="fa-regular fa-star fa-sm"></i></span>
                <span>{anime.views} <i className="fa-regular fa-eye fa-sm"></i></span>
                <span>{anime.type}</span>
                <span>{anime.status}</span>
              </div>
              <div className='w-11/12 float-end *:float-end *:font-medium *:text-end *:text-sm *:lg:text-base'>
                <span className='mb-2'>{anime.card_description}</span>
                <span>Seasons: {anime.seasons}</span>
              </div>
              <div id="genre" className='w-11/12 float-end *:text-end *:font-medium *:text-sm *:lg:text-base *:mb-3'>
                <h1>Genre: &nbsp;
                  {
                    
                    anime.genre.slice(0,3 ).map((gen,index) => (
                      <span key={index}>{gen}{index < 2 && ", "}&nbsp;</span>
                    ))
                  }
                </h1>
                <h1>Boradcast date: {anime.broadcast_date}</h1>
              </div>
              <div id="buttons" className='w-full px-2 pr-4 h-16 lg:h-20 flex items-center justify-between absolute -bottom-4 lg:-bottom-4 *:bg-[#ffa629] *:px-2 *:py-1 *:rounded-md '>
                <button className='w-1/4 h-3/5 flex items-center justify-center'><i className="fa-solid fa-share-nodes lg:fa-xl"></i></button>
                <button className='w-3/5 h-3/5 flex items-center justify-center'>view</button>
              </div>
            </div>
          </Link>
          <h1 className="font-semibold hover:text-[#ffa629]">{anime.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;