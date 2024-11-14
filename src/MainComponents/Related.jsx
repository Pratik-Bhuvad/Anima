import React , {useState} from 'react'
import Download from './Download'
import CardCarosuel from './CardCarosuel'

const Related = ({ anime }) => {
  const episodes = anime.episodes
  const [activeComponent, setActiveComponent] = useState('download');

  const components = {
    characters: <Download ep={anime.episodes} />,  // fallback
    lists: <Download ep={anime.episodes} />,       // fallback
    related: <CardCarosuel start={10} end={20} />,
    download: <Download ep={anime.episodes} />
  };

  return (
    <div className='pb-10 relative'>
      <div className="btns w-full grid grid-cols-2 grid-rows-2 items-center justify-items-end gap-y-2 pt-3 *:p-2 absolute right-5 xl:p-0 xl:justify-items-end xl:h-16 xl:grid-cols-4 xl:gap-x-2 xl:w-2/4 xl:-top-4 *:flex *:text-sm *:items-center *:justify-evenly *:xl:p-2 *:rounded-md *:xl:font-semibold *:xl:text-xl *:w-10/12">
        <button onClick={() => setActiveComponent('characters')} className={`xl:!w-[140%] hover:bg-[#ffa629] bg-[#2a2b2e] ${activeComponent === 'characters'?'bg-[#ffa629]':''}`}>Characters and employees <i className="fa-solid fa-user-group"></i></button>
        <button onClick={() => setActiveComponent('characters')} className={`hover:bg-[#ffa629] bg-[#2a2b2e] ${activeComponent === 'characters'?'bg-[#ffa629]':''}`}>Related Lists <i className="fa-solid fa-bars"></i></button>
        <button onClick={() => setActiveComponent('related')} className={`hover:bg-[#ffa629] bg-[#2a2b2e] ${activeComponent === 'related'?'bg-[#ffa629]':''}`}>Related Anime <i className="fa-solid fa-shuffle"></i></button>
        <button onClick={() => setActiveComponent('download')} className={`hover:bg-[#ffa629] bg-[#2a2b2e] ${(activeComponent === 'download')?'bg-[#ffa629]':''}`}>Download <i className="fa-solid fa-download"></i></button>
      </div>
      <div className="pt-36 *:px-2 *:rounded-lg xl:pt-10">
        {components[activeComponent]}
      </div>
    </div>
  )
}

export default Related
