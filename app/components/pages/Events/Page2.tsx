"use client"
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Page2 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-full w-full relative overflow-hidden'>
      {/* Background avec overlay */}
      <div
        className='absolute inset-0 bg-cover bg-center bg-fixed'
        style={{
          backgroundImage: `url("/assets/events/EventsBg.jpeg")`,
          filter: 'brightness(0.7)'
        }}
      />

      {/* Overlay gradient pour améliorer la lisibilité */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40' />

      {/* Contenu principal */}
      <div className='relative z-10 min-h-screen flex flex-col justify-center items-center px-4 py-8'>
        <div className={`text-center text-white max-w-4xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>


          {/* Titre principal */}
          <h1 className='text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight'>
            <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Événements
            </span>
            <span className="block bg-gradient-to-r from-red-300 to-red-100 bg-clip-text text-transparent">
              Inoubliables
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-100">
            Mariages • Séminaires • Dîners • Détente
          </p>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Vivez des moments mémorables ensemble dans un cadre d&apos;exception
          </p>
        </div>

        {/* Flèche animée */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`} style={{ transitionDelay: '800ms' }}>
          <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 md:p-4 animate-bounce border border-white/20 hover:border-white/40 transition-all duration-300 group">
            <MdOutlineKeyboardArrowDown className="w-6 h-6 md:w-8 md:h-8 group-hover:text-red-300 transition-colors" />
          </button>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute top-1/4 left-4 w-2 h-2 md:w-4 md:h-4 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-8 w-3 h-3 md:w-6 md:h-6 bg-red-300/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 md:w-4 md:h-4 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  )
}

export default Page2