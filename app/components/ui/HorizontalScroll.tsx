"use client";
import React, { useRef, useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const images: string[] = Array.from({ length: 10 }, (_, i) =>
  `/assets/homepage/slider2/${i + 1}.png`
);

const HorizontalScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let scrollInterval: number | null = null;
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen width
  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint in Tailwind
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Common scroll logic
  const scroll = (direction: number) => {
    scrollRef.current?.scrollBy({ left: direction, behavior: 'smooth' });
  };

  const startScroll = (direction: number) => {
    stopScroll();
    scrollInterval = window.setInterval(() => scroll(direction), 30);
  };

  const stopScroll = () => {
    if (scrollInterval) clearInterval(scrollInterval);
  };

  return (
    <div className="relative w-full max-w-screen-2xl mx-auto">
      {/* Arrows: only show on desktop */}
      {isDesktop && (
        <>
          <MdChevronLeft
            size={50}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 cursor-pointer"
            onMouseEnter={() => startScroll(-100)}
            onMouseLeave={stopScroll}
          />
          <MdChevronRight
            size={50}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 cursor-pointer"
            onMouseEnter={() => startScroll(100)}
            onMouseLeave={stopScroll}
          />
        </>
      )}

      <div
        ref={scrollRef}
        className={`flex overflow-x-auto scroll-smooth no-scrollbar px-4 md:px-12 py-4 md:py-6 ${isDesktop ? 'whitespace-nowrap' : 'space-x-4'
          }`}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`rounded-2xl bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 shrink-0 ${isDesktop
                ? 'inline-block mr-4 w-[26vw] h-[30vw]'
                : 'w-[65vw] sm:w-[40vw] h-[45vw] sm:h-[30vw]'
              }`}
            style={{ backgroundImage: `url(${src})` }}
            aria-label={`Image ${index + 1}`}
            role="img"
          />
        ))}
      </div>

      {/* Arrows for mobile (click only) */}
      {!isDesktop && (
        <>
          <button
            aria-label="Scroll left"
            onClick={() => scroll(-300)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition md:hidden"
          >
            <MdChevronLeft size={32} />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scroll(300)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition md:hidden"
          >
            <MdChevronRight size={32} />
          </button>
        </>
      )}
    </div>
  );
};

export default HorizontalScroll;
