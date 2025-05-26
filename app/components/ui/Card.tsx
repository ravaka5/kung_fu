"use client"
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
  imgUrl: string;
}

const Card = ({ title, subtitle, content, imgUrl }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          width={800}
          height={400}
          src={imgUrl}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
            }`}
        />

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'
          }`} />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500">
        <h3 className={`text-2xl font-bold mb-2 transform transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-0'
          }`}>
          {title}
        </h3>

        <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <p className="text-xl text-red-400 font-semibold mb-2">{subtitle}</p>
          <p className="text-gray-200">{content}</p>
          <Link href="/events">
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-sm
            transform hover:bg-red-700 transition-all duration-300
            shadow-lg hover:shadow-xl active:translate-y-1">
              En savoir plus
            </button></Link>

        </div>
      </div>
    </div>
  );
};

export default Card;