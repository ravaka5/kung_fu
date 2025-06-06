"use client"
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover z-0"
        style={{
          backgroundImage: `url("/assets/restaurant/Restaurantbg.png")`,
          transform: `translateY(${offset * 0.4}px)`
        }}
      />

      <div className="absolute inset-0 bg-black/25 z-10" />

      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-[4vw] font-semibold font-noto-serif mb-6">
            SAVOUREZ LA FUSION DES CULTURES
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-[3vh] mb-12 max-w-3xl mx-auto font-poppins">
            Bienvenue au Kung Fu Hotel, où la cuisine malgache rencontre la cuisine chinoise !
          </h2>

          <button className="mt-8 px-8 py-3 bg-red-600 text-white font-poppins
            transform hover:bg-red-700 transition-all duration-300
            shadow-lg hover:shadow-xl active:translate-y-1">
            Accèder au menu
          </button>
        </div>

        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="absolute bottom-10 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-10 w-10 text-white opacity-80" />
        </button>
      </div>
    </section>
  );
};

export default Hero;