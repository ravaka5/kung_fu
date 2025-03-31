import React from 'react'
import homeBg from '../../assets/img/Homebg.jpeg'

const Hero = () => {
  return (
    <section className='h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="bg-black/25"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[6vh] text-white font-semibold font-noto-serif mt-10'>
            DECOUVREZ UN CONFORT EXCEPTIONNEL
          </h1>
          <h2 className='text-[3vh] text-center font-poppins '>
            Kung Fu Hotel Ampefy - Luxe et Saveurs Exotiques
          </h2>

          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
            <button className='bg-red-600 w-70 py-2'>Hotel</button>
            <button className='border-2 w-70'>Restaurant</button>
          </div>
        </div>
      </section>
  )
}

export default Hero
