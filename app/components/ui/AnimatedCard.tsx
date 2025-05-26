"use client"
import { useState } from 'react';
import Image from 'next/image';

interface AnimatedCardProps {
  header: string;
  price: string;
  description: string;
  imgUrl: string;
}

const AnimatedCard = ({ header, price, description, imgUrl }: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden group rounded-xl w-[280px] h-[400px] lg:w-[22vw] lg:h-[28vw] shadow-lg transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          height={400}
          width={280}
          src={imgUrl}
          alt={header}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />

        {/* Overlay gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'}`} />
      </div>

      {/* Content container */}
      <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10 transform transition-transform duration-500">
        <h3 className="text-xl md:text-2xl font-bold mb-2">{header}</h3>

        <div className={`transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-xl font-semibold text-red-400">{price}</p>
            <p className="text-sm text-gray-300">{description}</p>
          </div>

          <div className="flex justify-center mt-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;