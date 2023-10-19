import React, { useState } from 'react'
import Button from './Button'
import Link from 'next/link'
import {FaFacebook,FaWhatsapp,FaInstagram} from 'react-icons/fa'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Hero = () => {
    const slides = [
        {
          url: 'https://mmf5angy.twic.pics/ahstatic/www.ahstatic.com/photos/b1j0_ho_00_p_1024x768.jpg?ritok=65&twic=v1/cover=1600x900',
        },
        {
          url: 'https://s7g10.scene7.com/is/image/stena/20150820_berlin-brandenburg-gate:29-9?ts=1656740748478&dpr=off',
        },
        {
          url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/96/cc/68/isla-del-sol.jpg?w=1200&h=-1&s=1',
        },
    
        {
          url: 'https://youimg1.tripcdn.com/target/01018120008x848xp1F5C_C_880_350_R5.jpg',
        },
        {
          url: 'https://meydanbesiktasotel.com/wp-content/uploads/2019/11/taksim.jpg',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex: React.SetStateAction<number>) => {
        setCurrentIndex(slideIndex);
      };
    


      return (
        <div className='max-w-full w-full m-auto relative group '>
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
            className='w-full h-[780px] md:h-[480px] sm:h-[280px] bg-center duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
          <div className='hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center'>
            <Link href={'https://www.facebook.com/SpeedbirdLebanon'} target='_blank'>
              <FaFacebook size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-blue-700' />
            </Link>
            <Link href={'https://wa.me/+96171367510'} target='_blank'>
              <FaWhatsapp size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-green-500' />
            </Link>
            <Link href={'https://www.instagram.com/speedbirdtravellb/'} target='_blank'>
              <FaInstagram size={25} className='text-main hover:translate-x-1.5 duration-300 hover:text-yellow-300' />
            </Link>
          </div>
        </div>
      );
}

export default Hero