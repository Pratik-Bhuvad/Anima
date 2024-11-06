import React, { useRef } from 'react';
import Slider from 'react-slick';
import Buttons from '../Components/Buttons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/01.png", title: "Castlevania" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/02.png", title: "Attack on Titan" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/03.png", title: "Jujutsu Kaisen" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/04.png", title: "Vinland Saga" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/05.png", title: "Tokyo Ghoul" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/06.png", title: "Mushoku Tensei" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/07.png", title: "Re:Zero" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/08.png", title: "Frieren" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/09.png", title: "Kaiju No.8" },
    { url: "https://rzw-gh.github.io/movie-streaming-website/images/show/backdrops/10.png", title: "Oshi no Ko" }
  ];

  const sliderRef = useRef(null); // Create a ref for the Slider

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl:true,
  };

  // Function to move the slider left
  const handleSliderLeft = (event) => {
    if (!event || event.type === "click" || event.key === "Enter" || event.key === "ArrowLeft") {
      sliderRef.current.slickPrev();
    }
  };
  
  // Combined function to handle both click and key presses for moving right
  const handleSliderRight = (event) => {
    if (!event || event.type === "click" || event.key === "Enter" || event.key === "ArrowRight") {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className='h-[80vh] lg:h-[calc(80vh-4.5rem)] font-mono overflow-hidden relative'>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className='h-[80vh] flex justify-center items-end relative  bg-gradient-to-t from-black via-transparent to-transparent lg:h-[calc(80vh-4.5rem)]'>
            <div className='absolute inset-0'  style={{ background: `linear-gradient(90deg,rgba(24,24,24,0.9) 10%,rgba(24,24,24,0.8) 25%,rgba(24,24,24,0.7) 35%,rgba(24,24,24,0.6) 45%,rgba(24,24,24,0.5) 55%, rgba(24,24,24,0.3) 80%, rgba(24,24,24,0) 100%), url(${image.url}) center/cover no-repeat`,  zIndex: -1  }} />
            <div id="animeInfo" className='w-full h-full flex flex-col justify-end pl-12 pb-40 *:my-3 lg:pb-60 lg:w-1/5'>
              <h1 id="title" className='font-bold text-3xl tracking-tighter lg:text=[2vw]'>{image.title}</h1>
              <div id="rating" className='flex items-center *:mr-5 lg:text-xl'>
                <span id="mal"><strong className='p-1 px-4 rounded-lg mr-2 tracking-tight text-sm bg-[rgb(32,79,217)] font-sans font-medium lg:text-lg'>MAL</strong>8.7</span>
                <span id="imdb"><strong className='p-1 px-4 rounded-lg mr-2 tracking-tight text-sm text-black bg-[rgb(255,166,41)] font-sans font-medium lg:text-lg'>IMDB</strong>8.7</span>
              </div>
              <div id="genres" className='w-[63%] flex justify-between *:bg-[rgba(42,43,46,1)] *:rounded-full *:px-[14px] *:py-[6px] *:text-[rgba(126,126,126,1)] *:cursor-pointer *:font-sans *:text-sm *:lg:text-base lg:w-3/4'>
                <span className='hover:text-white delay-100 font-mono'>Isekai</span>
                <span className='hover:text-white delay-100 font-mono'>Action</span>
                <span className='hover:text-white delay-100 font-mono'>Fantasy</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex items-center justify-between pl-12 absolute bottom-20 transform -translate-y-1/2 lg:bottom-40 lg:w-[12%]'>
        <Buttons move="left" card={handleSliderLeft} />
        <Buttons move="right" card={handleSliderRight} />
      </div>
    </div>
  );
}

export default Carousel;