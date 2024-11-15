import React, { useEffect, useState } from 'react'

const ListCard = (props) => {
    const anime = props.anime
    const [cards, setCards] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCards(3);
      } else {
        setCards(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <div className='w-full h-full'>
            <div id="heading" className='flex items-center justify-between h-1/5 md:p-3 md:py-2 '>
                <div id="ratings" className='flex items-center justify-evenly w-[55%] h-full md:w-2/5 *:flex *:items-center *:justify-center *:w-1/3 *:h-full *:gap-x-2'>
                    <span>{anime[0].saved}<img src="/bookmark.png" alt="" loading='lazy' className="w-2/5 h-2/3 md:w-2/4 md:h-full object-fit" /></span>
                    <span>4k<i className="fa-regular fa-heart xl:fa-lg text-[#ffa629]"></i></span>
                    <span>{anime[0].views}<i className="fa-regular fa-eye text-[#ffa629]"></i></span>
                </div>
                <div id="category" className='flex items-center justify-end gap-x-2 w-2/5 font-medium md:w-[35%]'>
                    <p className='text-ellipsis overflow-hidden whitespace-nowrap md:overflow-visible'>{props.title}</p>
                    <img src="https://rzw-gh.github.io/movie-streaming-website/images/profile/01.png" alt="" loading='lazy' className="rounded-full w-9 h-9 xl:w-11 xl:h-11" />
                </div>
            </div>
            <div id="cards" className='grid grid-cols-3 md:grid-cols-4 gap-x-3 overflow-hidden w-full h-4/5 md:h-3/4 lg:h-4/5'>
                {anime.slice(0, cards).map((anime, index) => (
                    <img src={anime.card_url} alt="" loading='lazy' className='h-[95%] md:h-5/6 lg:h-[95%] rounded-xl' />
                ))
                }
            </div>
        </div>
    )
}

export default ListCard
