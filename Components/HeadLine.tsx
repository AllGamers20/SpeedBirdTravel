import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const HeadLine = ({ title }: { title: any }) => {
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView && headlineRef.current) {
      // Set initial styles (opacity: 0, translateY: -20px) before the animation starts
      anime.set(headlineRef.current, { opacity: 0, translateY: -20 });

      // Create a drop-down animation
      anime({
        targets: headlineRef.current,
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
        headlineRef.current = el;
      }}
      className="flex items-center justify-center gap-6 h-72 bg-parallex bg-no-repeat bg-cover bg-center w-full rounded-3xl md:bg-fixed"
    >
      <div className="bg-main w-[100px] h-[2px]"></div>
      <h1 className="text-lime-500 uppercase text-2xl md:text-6xl font-dale">
        {title}
      </h1>
      <div className="bg-main w-[100px] h-[2px]"></div>
    </div>
  );
};

export default HeadLine;
