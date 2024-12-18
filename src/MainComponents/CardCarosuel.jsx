import React, { useRef, useState, useEffect } from 'react'
import Card from '../Components/Card'
import View from '../Components/View'
import animeData from '../Data/Anime.json'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Buttons from '../Components/Buttons'

const CardCarosuel = (props) => {
  const heading = props.view || false

  const [currentslide, setCurrentslide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(7);
  const totalslides = (props.end - props.start)

  const sliderRef = useRef(null)

  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1200) {
      setSlidesToShow(7);
    } else if (window.innerWidth >= 1024) {
      setSlidesToShow(4)
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(2);
    }
  };

  useEffect(() => {
    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 2,
  };

  const handleSliderLeft = (event) => {
    if (event.type === "click") {
      if (currentslide > 0) {
        setCurrentslide(prevSlide => prevSlide - 1);
        sliderRef.current.slickPrev()
      }
    }
  };

  // Combined function to handle both click and key presses for moving right
  const handleSliderRight = (event) => {
    if (event.type === "click") {
      if (currentslide < totalslides - settings.slidesToShow) {
        setCurrentslide(prevSlide => prevSlide + 1);
        sliderRef.current.slickNext()
      }
    }
  };

  return (
    <div className='w-full h-[50vh] flex flex-col justify-between box-border backdrop-blur-md mb-3 md:mb-12'>
      <div id="head" className={`w-full flex items-center justify-between px-5 lg:px-16 ${(heading) ? '' : 'hidden'}`}> <View /> <h2 className='font-bold lg:text-3xl'>{props.title}</h2> </div>
      <div id="slider" className='w-full h-full relative flex justify-center items-center pl-3'>
        <Slider ref={sliderRef} {...settings} className='w-[95%] !flex !flex-row-reverse !items-center md:pl-3 xl:p-0 md:w-[90%] lg:w-[90%] z-50'>
          {animeData.animes.slice(props.start, props.end).map((anime, index) => (
            <Card key={index} anime={anime} />
          ))}
        </Slider>
        <div className={`w-[7%] px-2 absolute left-0 top-1/4 hidden md:flex md:w-[15%] md:top-1/3 lg:w-[12%] *:md:w-2/4 xl:w-[8%] *:xl:w-[42%] xl:top-1/3`}> <Buttons move="left" card={handleSliderLeft} cursor={(currentslide === 0) ? 'cursor-not-allowed' : 'cursor-pointer'} /> </div>
        <div className={`w-[7%] px-2 justify-end absolute right-0 top-1/4 hidden md:flex md:w-[15%] md:top-1/3 lg:w-[12%] *:md:w-2/4 xl:w-[8%] *:xl:w-[42%] xl:top-1/3`}> <Buttons move="right" card={handleSliderRight} cursor={(currentslide >= totalslides - settings.slidesToShow) ? 'cursor-not-allowed' : 'cursor-pointer'} /> </div>
      </div>
    </div>
  )
}

export default CardCarosuel