import React from 'react'
import StarRating from './StarRating'

const Showinfo = ({ anime }) => {
    const shared = true

    return (
        <div className='h-screen flex flex-col items-center gap-x-5 gap-y-3 pr-5 pl-5 py-5 *:h-3/5 md:*:h-4/5  md:grid md:grid-cols-2 xl:flex xl:h-[90vh] xl:py-0 xl:*:h-[65%] xl:flex-row-reverse xl:gap-y-0' style={{ background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${anime.backdrop_url}) center/cover no-repeat` }}>
            <div className="h-full relative group *:rounded-2xl">
                <img src={anime.card_url} alt="" className=' h-full object-contain rounded-2xl' />
                <div className="w-full h-full flex items-center justify-center absolute opacity-0 top-0 bg-[#18181871] group-hover:opacity-100 transition-opacity duration-300 md:!flex md:w-[88%] xl:w-full">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#181818ea]">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.3)]">
                            <img src="/play.png" alt="Play" className="w-5 h-5 object-contain" />
                        </div>
                    </div>
                </div>
                {shared && (
                    <div id='shared' className='absolute top-3 right-5 !rounded-lg bg-[#000000c0] p-1 px-4 tracking-normal text-[#FFA629] md:right-14 lg:right-2/4 xl:right-5'>
                        shared <i className="fa-solid fa-crown ml-1"></i>
                    </div>
                )}
                <button className="absolute left-1/4 bottom-2 bg-[#FFa629] text-xs !rounded-md w-3/6 h-[10%] flex items-center justify-evenly xl:text-2xl xl:-bottom-7 text-black px-2 md:left-16 lg:w-1/4 xl:left-1/4">Play Online <i className="bi bi-play text-2xl xl:text-4xl"></i></button>
            </div>
            <div id="info" className='h-full flex w-full flex-col gap-y-1 justify-between md:justify-center md:gap-y-5 xl:justify-between xl:items-end xl:w-3/5'>
                <h1 className="text-sm font-semibold xl:text-[2.5rem]">Anime: {anime.title}</h1>
                <p className='flex text-sm gap-1 flex-col xl:gap-2 xl:font-medium xl:items-end xl:text-base'>
                    {anime.title}: {anime.title}
                    <span>Genre: &nbsp;
                        {
                            anime.genre.slice(0, 3).map((gen, index) => (
                                <span key={index}>{gen}{index < 2 && ", "}</span>
                            ))
                        }
                    </span>
                </p>
                <div className="hidden grid-cols-4 grid-rows-2 gap-x-7 gap-y-5 mt-5 text-end text-lg xl:grid">
                    <span>Country of manufacture: {anime.country}</span>
                    <span>Time: {anime.time}</span>
                    <span className='flex justify-end'>Age Category: <pre className={(anime.rated ==='R' || anime.rated === 'R+')?'text-red-600':'text-green-400'}> {anime.rated}</pre> </span>
                    <span>Seasons: {anime.seasons}</span>
                    <span className='text-[#ffa629]'>More Information</span>
                    <span>Broadcast From: {anime.broadcast_date}</span>
                    <span>Studio: {anime.studio}</span>
                    <span>Newtork: {anime.network}</span>
                </div>
                <p className="desc text-sm text-justify xl:w-3/4 xl:mt-20 xl:leading-7 xl:text-base xl:text-end xl:font-medium">{anime.detail_description}</p>
                <div id="status" className='w-[37%] hidden justify-evenly items-center text-xl py-3 rounded-2xl bg-[#2a2b2e] xl:flex'>Status: {anime.currentStatus} <i className={`fa-solid fa-xl ${ anime.seasonStatus === 'completed' ? 'fa-circle-check' : anime.seasonStatus === 'playing' ? 'fa-circle-play' : anime.seasonStatus === 'hiatus' ? 'fa-pause' : anime.seasonStatus === 'announced' ? 'fa-bullhorn' :'fa-circle-question'}`}></i></div>
            </div>
            <div className='w-full xl:!h-1/2 flex justify-between md:col-span-2 md:gap-x-10  xl:flex-col xl:w-1/5 xl:gap-0'>
                <div className="offical-rating w-full flex flex-col justify-evenly  *:w-[32%] *:flex *:items-center *:justify-start  md:items-center xl:text-3xl xl:flex-row font-bold *:*:mr-3">
                    <span><img src="/mal.png" alt="" className='rounded-full w-7 h-7 xl:w-12 xl:h-12' />{anime.rating}</span>
                    <span><img src="/imdb.png" alt="" className=' w-10 h-7 xl:w-12 xl:h-8' />{anime.rating}</span>
                    <span className='relative -left-1 xl:left-0'> <div className='group h-full'><img src="/bookmark.png" alt="" className='w-7 h-7 xl:w-12 xl:h-12 cursor-pointer group max-w-max' /> <span className='absolute invisible xl:-top-9 xl:-left-8 xl:w-full rounded-md xl:p-2 bg-gray-600 text-center text-xs font-normal duration-150 xl:group-hover:visible'>Add to Watch list</span></div> {anime.saved}</span>
                </div>
                <div className="user-rating w-full px-4 flex flex-col items-center justify-center tracking-wide text-xs xl:text-lg font-semibold md:items-start xl:w-3/4">
                    <StarRating />
                    out of 590 points {anime.rating}
                </div>
            </div>
        </div>
    )
}

export default Showinfo
