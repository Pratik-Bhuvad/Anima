import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import Buttons from '../Components/Buttons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import animeData from '../Data/Anime.json'

const HeroCarousel = () => {
  const [currentslide, setCurrentslide] = useState(0)
  const totalslides = animeData.animes.length

  const sliderRef = useRef(null); // Create a ref for the Slider

  const settings = {
    dots: true,
    infinite: <tr></tr>,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleSliderLeft = (event) => {
    if (!event || event.type === "click" || event.key === "Enter" || event.key === "ArrowLeft") {
      setCurrentslide(prevSlide => prevSlide - 1);
      sliderRef.current.slickPrev();
    }
  };

  const handleSliderRight = (event) => {
    if (!event || event.type === "click" || event.key === "Enter" || event.key === "ArrowRight") {
      setCurrentslide(prevSlide => prevSlide + 1);
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='h-[80vh] lg:h-[calc(80vh-4.5rem)] font-mono overflow-hidden relative'>
      <Slider ref={sliderRef} {...settings}>
        {animeData.animes.map((image, index) => (
          <div key={index} className='h-[80vh] flex justify-center items-end relative  bg-gradient-to-t from-black via-transparent to-transparent lg:h-[calc(80vh-4.5rem)]'>
            <div className='absolute inset-0' style={{ background: `linear-gradient(90deg,rgba(24,24,24,0.9) 10%,rgba(24,24,24,0.8) 25%,rgba(24,24,24,0.7) 35%,rgba(24,24,24,0.6) 45%,rgba(24,24,24,0.5) 55%, rgba(24,24,24,0.3) 80%, rgba(24,24,24,0) 100%), url(${image.url}) center/cover no-repeat`, zIndex: -1 }} />
            <div id="animeInfo" className='w-full h-full flex flex-col justify-end pl-12 pb-40 *:my-3 lg:pb-40 lg:w-1/5'>
              <h1 id="title" className='font-bold text-3xl tracking-tighter lg:text=[2vw]'>{image.title}</h1>
              <div id="rating" className='flex items-center *:mr-5 lg:text-xl'>
                <span id="mal"><strong className='p-1 px-4 rounded-lg mr-2 tracking-tight text-sm bg-[rgb(32,79,217)] font-sans font-medium lg:text-lg'>MAL</strong>8.7</span>
                <span id="imdb"><strong className='p-1 px-4 rounded-lg mr-2 tracking-tight text-sm text-black bg-[rgb(255,166,41)] font-sans font-medium lg:text-lg'>IMDB</strong>8.7</span>
              </div>
              <div id="genres" className='w-[63%] flex justify-between *:bg-[rgba(42,43,46,1)] *:rounded-full *:px-[14px] *:py-[6px] *:text-[rgba(126,126,126,1)] *:cursor-pointer *:font-sans *:text-sm md:w-1/3 *:lg:text-base lg:w-3/4'>
                <span className='hover:text-white delay-100 font-mono'>Isekai</span>
                <span className='hover:text-white delay-100 font-mono'>Action</span>
                <span className='hover:text-white delay-100 font-mono'>Fantasy</span>
              </div>
              <button className='w-2/5 py-2 font-semibold rounded-xl tracking-widest bg-[#2a2b2e99] hover:bg-[#2a2b2ef8] transition-all duration-150 md:w-1/6 lg:w-[55%] lg:text-2xl'>Watch</button>
            </div>
          </div>
        ))}
      </Slider>
      <div className='hidden items-center justify-between pl-12 absolute bottom-20 transform -translate-y-1/2 lg:bottom-20 lg:w-[12%] md:flex'>
        <Buttons move="left" card={handleSliderLeft}  />
        <Buttons move="right" card={handleSliderRight} />
      </div>
    </div>
  );
}

export default HeroCarousel;