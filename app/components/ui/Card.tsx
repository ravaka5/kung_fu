"use client";
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
      className="relative w-[90vw] sm:w-[400px] h-[400px] rounded-xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image + overlay */}
      <div className="relative w-full h-full">
        <Image
          src={imgUrl}
          alt={title}
          width={800}
          height={400}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-500`} />
      </div>

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h3 className="text-2xl font-bold mb-2 capitalize">{title}</h3>
        <div className={`transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-90'}`}>
          <p className="text-red-400 font-semibold mb-1">{subtitle}</p>
          <p className="text-sm text-gray-200">{content}</p>
          <Link href="/events">
            <button className="mt-4 px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded-sm shadow-md transition-all duration-300 active:translate-y-1">
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
