import React from 'react'
import restBg from '../../assets/img/Restaurantbg.jpeg'

const Hero = () => {
  return (
    <section className='h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${restBg})` }}>
      <div className="bg-black/25"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[7vh] text-white font-semibold font-noto-serif mt-10'>
            SAVOUREZ LA FUSION DES CULTURES
          </h1>
          <h2 className='text-[3vh] text-center font-poppins '>
          Bienvenue au Kung Fu Hotel, où la cuisine malgache rencontre la cuisine chinoise !
          </h2>

          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
          <button className='bg-red-600 w-120 py-2'>Acceder au menu</button>

          </div>
        </div>
      </section>
  )
}

export default Hero
