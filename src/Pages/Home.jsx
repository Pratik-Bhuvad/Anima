import React from 'react'
import HeroCarousel from '../MainComponents/HeroCarousel'
import CardCarosuel from '../MainComponents/CardCarosuel'
import Topshows from '../MainComponents/Topshows'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroCarousel slides={10} />
      <section className='' style={{background:'linear-gradient(transparent 1%,#181818,#181818,#181818,#181818,#181818,#181818,transparent)'}}>
        <CardCarosuel start={0} end={10} title='Playing' />
        <CardCarosuel start={0} end={10} title='The hottest of the week' />
        <Topshows start={0} end={8} title="Serials" />
        <Topshows start={2} end={10} title="Movies" />
        <CardCarosuel start={10} end={20} title='Suggestion' />
        <CardCarosuel start={10} end={20} title='Soon' />
      </section>
    </div>
  )
}

export default Home
