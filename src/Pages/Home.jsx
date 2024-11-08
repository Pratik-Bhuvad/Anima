import React from 'react'
import HeroCarousel from '../MainComponents/HeroCarousel'
import CardCarosuel from '../MainComponents/CardCarosuel'
import Topshows from '../MainComponents/Topshows'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroCarousel />
      <section className='' style={{background:'linear-gradient(transparent 1%,#181818,#181818,#181818,#181818)'}}>
        <CardCarosuel anime='posters' title='Playing' />
        <CardCarosuel anime='posters' title='The hottest of the week' />
        <Topshows anime='animes' title="Serials" />
        <Topshows anime='animes' title="Movies" />
        <CardCarosuel anime='posters' title='Suggestion' />
        <CardCarosuel anime='posters' title='Soon' />
      </section>
    </div>
  )
}

export default Home
