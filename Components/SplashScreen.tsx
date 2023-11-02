import { useEffect, useState } from 'react';
import React from 'react';
import anime from 'animejs';
import Image from 'next/image';

const SplashScreen = ({ finishLoading }: { finishLoading: any }) => {
  const [isMount, setisMount] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    // First animation: Scale up the logo
    loader.add({
      targets: "#Logo",
      scale: 1,
      duration: 400,
      easing: "easeInOutExpo",
    });
    loader.add({
      targets: "#Logo",
      scale: 1.50,
      duration: 300,
      easing: "easeInOutExpo",
    });

    // Second animation: Move the logo to the right and fade out
    loader.add({
      targets: "#Logo",
      translateX: '100%',
      opacity: 0,
      duration: 600,
      easing: "easeOutExpo",
      delay: 200, // Delay after the first animation
    });
  };

  useEffect(() => {
    // Add a delay before starting the fade-in animation
    const fadeInTimeout = setTimeout(() => {
      setisMount(true);
    }, 600);

    // Start the animations
    animate();

    return () => {
      clearTimeout(fadeInTimeout);
    };
  }, []);

  return (
    <div className={`flex h-screen items-center justify-center ${isMount ? 'fade-in' : ''} bg-parallex bg-fixed bg-cover bg-no-repeat`}>
      <Image id='Logo' src="/img/Logo.png" alt='' width={200} height={200} />
    </div>
  );
};

export default SplashScreen;
