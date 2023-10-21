import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      url:
        'https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b1j0_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=1600x900',
    },
    {
      url:
        'https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:29-9?ts=1656740748478&dpr=off',
    },
    {
      url:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/96/cc/68/isla-del-sol.jpg?w=1200&h=-1&s=1',
    },
    {
      url: 
        'https://idsb.tmgrup.com.tr/ly/uploads/images/2022/04/01/195589.jpg',
    },
    {
      url: 'https://meydanbesiktasotel.com/wp-content/uploads/2019/11/taksim.jpg',
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
              className="w-full h-60 md:h-[750px] bg-cover bg-center"
              // Adjust the height for mobile (e.g., h-60) and tablet/desktop (e.g., md:h-80)
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>
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
