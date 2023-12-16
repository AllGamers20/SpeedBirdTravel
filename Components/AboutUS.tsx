import React, { useEffect, useRef } from 'react';
import HeadLine from './HeadLine';
import Image from 'next/image';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const LogoImage = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView && imageRef.current) {
      // Set initial styles (opacity: 0, translateY: -20px) before the animation starts
      anime.set(imageRef.current, { opacity: 0, translateY: -20 });

      // Create a drop-down animation
      anime({
        targets: imageRef.current,
        opacity: 1,
        translateY: 0,
        duration: 1000,
        easing: "easeInOutQuad",
        delay: 300,
      });
    }
  }, [inView]);

  return (
    <div
      ref={(el) => {
        ref(el);
        imageRef.current = el;
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};



const AboutUS = () => {
  return (
    <section id='AboutUs'>
      <div className='flex flex-wrap justify-center items-center flex-col gap-6 p-4 px-4 py-16'>
        <HeadLine title={'About Us'} />
        <div className='flex items-center justify-center flex-col gap-6 '>
          <p className='text-center text-xl md:text-3xl p-6  text-black font-nunito'>
            Speed Bird Travel Agency is your passport to exceptional travel experiences.  Founded by passionate travelers, our mission is to make your journeys stress-free and unforgettable.
          </p>
          <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-20 '>
            <LogoImage src={'/img/iatalogo.png'} alt='Logo' width={130} height={130} />
            <LogoImage src={'/img/MEA.png'} alt='Logo' width={200} height={200} />
            <LogoImage src={'/img/QatarAirways.png'} alt='Logo' width={150} height={150} />
            <LogoImage src={'/img/TurkishAirline.png'} alt='Logo' width={150} height={150} />
            <LogoImage src={'/img/Emirates.png'} alt='Logo' width={150} height={150} />
            <LogoImage src={'/img/ASL.png'} alt='Logo' width={150} height={150} />
            <LogoImage src={'/img/FlyDubai.png'} alt='Logo' width={150} height={150} />
            <LogoImage src={'/img/AirArabia.png'} alt='Logo' width={150} height={150} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
