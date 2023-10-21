import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      text: 'SpeedBird Travel',
      subtext: 'Company offers you the fastest route to unforgettable global adventures',
      url:
        'https://lp-cms-production.imgix.net/2019-06/GettyImages-140533581_large.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75',
      textcolor: 'dodgerblue',
    },
    {
      text: 'Fast-Track Adventures',
      subtext: 'Your passport to high-speed exploration and lasting memories.',
      url:
      'https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:29-9?ts=1656740748478&dpr=off',
      textcolor: 'lime'
    },
    {
      text: 'Exploration',
      subtext: 'Jet-Set Exploration for the modern traveler.',
      url:
        'https://i.natgeofe.com/k/84807eaf-d314-42fe-b329-7cf391ddc8d0/Bolivia-La-Paz.jpg?w=1084.125&h=609',
      textcolor:'orange'
    },
    {
      text: ' Faster to the Worlds Wonders',
      subtext: 'you can experience the worlds wonders without delay.',
      url: 
        'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/04/01/195589.jpg',
      textcolor: 'red'
    },
    {
      text: 'Travel at the Speed of Dreams',
      subtext: 'Your express ticket to extraordinary journeys.',
      url: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/475000/475296-Turkey.jpg',
      textcolor: 'blue'
    },
  ];

  const loopedSlides = [...slides, ...slides, ...slides];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-full w-full m-auto relative group">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        initialSlide={slides.length}
      >
        {loopedSlides.map((slide, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div
              className="w-full h-60 md:h-[600px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/60 text-start  flex flex-col gap-[20px] md:gap-[40px] items-center justify-center'>
                <h1 className='text-3xl text-main md:text-7xl tracking-wider font-bold'>
                  {slide.text}
                </h1>
                <p className='font-light text-sm md:text-md tracking-wider text-lime-400'>
                  {slide.subtext}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`h-2 w-20 bg-white mx-2 cursor-pointer ${
              currentIndex === slideIndex ? 'bg-blue-700' : ''
            }`}
            onClick={() => setCurrentIndex(slideIndex)}
          ></div>
        ))}
      </div>

      <div className="hidden md:absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center font-nunito font-bold">
        <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target="_blank">
          <FaFacebook
            size={25}
            className="text-main hover:translate-x-1.5 duration-300 hover:text-blue-700"
          />
        </Link>
        <Link href={'https://wa.me/+96171367510'} target="_blank">
          <FaWhatsapp
            size={25}
            className="text-main hover:translate-x-1.5 duration-300 hover:text-green-500"
          />
        </Link>
        <Link href={'https://www.instagram.com/speedbirdtravellb/'} target="_blank">
          <FaInstagram
            size={25}
            className="text-main hover:translate-x-1.5 duration-300 hover:text-yellow-300"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
