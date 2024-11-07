import React from 'react'
import HeroCarousel from '../MainComponents/HeroCarousel'
import CardCarosuel from '../MainComponents/CardCarosuel'

const Home = () => {
  return (
    <div className='w-full'>
      <HeroCarousel />
      <section className='*:mt-20' style={{background:'linear-gradient(transparent 0.3%,#181818)'}}>
        <CardCarosuel anime='posters' title='Playing' />
        <CardCarosuel anime='posters' title='The hottest of the week' />
        <CardCarosuel anime='posters' title='Suggestion' />
        <CardCarosuel anime='posters' title='Soon' />
      </section>
    </div>
  )
}

export default Home
