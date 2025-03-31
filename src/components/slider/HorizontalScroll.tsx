import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import img1 from "../../assets/img/homepage/slider2/1.png";
import img2 from "../../assets/img/homepage/slider2/2.png";
import img3 from "../../assets/img/homepage/slider2/3.png";
import img4 from "../../assets/img/homepage/slider2/4.png";
import img5 from "../../assets/img/homepage/slider2/5.png";
import img6 from "../../assets/img/homepage/slider2/6.png";
import img7 from "../../assets/img/homepage/slider2/7.png";
import img8 from "../../assets/img/homepage/slider2/8.png";
import img9 from "../../assets/img/homepage/slider2/9.png";
import img10 from "../../assets/img/homepage/slider2/10.png";

interface ImageItem {
  bg: string;
}

const img: ImageItem[] = [
  { bg: img1 },
  { bg: img2 },
  { bg: img3 },
  { bg: img4 },
  { bg: img5 },
  { bg: img6 },
  { bg: img7 },
  { bg: img8 },
  { bg: img9 },
  { bg: img10 },
];

const HorizontalScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  let scrollInterval: number;

  const startScrolling = (direction: number) => {
    if (scrollRef.current) {
      scrollInterval = window.setInterval(() => {
        scrollRef.current?.scrollBy({ left: direction * 10, behavior: 'smooth' });
      }, 100);
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  return (
    <div className='relative flex items-center'>
      <MdChevronLeft
        size={50}
        className='cursor-pointer'
        onMouseEnter={() => startScrolling(-100)}
        onMouseLeave={stopScrolling}
      />

      <div
        ref={scrollRef}
        className='w-[95vw] h-[30vw] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {img.map(item => (
          <div
            key={item.bg}
            className="w-[26vw] rounded-2xl bg-cover bg-center h-full cursor-pointer hover:scale-105 ease-in-out duration-300 inline-block mr-4"
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            
          </div>
          
        ))}
      </div>

      <MdChevronRight
        size={50}
        className='cursor-pointer'
        onMouseEnter={() => startScrolling(100)}
        onMouseLeave={stopScrolling}
      />
    </div>
  );
};

export default HorizontalScroll;
