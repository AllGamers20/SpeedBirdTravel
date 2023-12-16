import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const Card = ({ image, title }: { image: any; title: any }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  useEffect(() => {
    if (inView && cardRef.current) {
      // Set initial styles (opacity: 0, translateY: -20px) before the animation starts
      anime.set(cardRef.current, { opacity: 0, translateY: -20 });

      // Create a drop-down animation
      anime({
        targets: cardRef.current,
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
        if (el) {
          cardRef.current = el;
        }
      }}
      className="rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300"
    >
      <Link href="./Form">
        <Image
          src={image}
          alt="/"
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          width={1000}
          height={200}
        />
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center justify-center gap-5 -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-bold text-2xl mt-4 text-lime-400 font-dale">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
