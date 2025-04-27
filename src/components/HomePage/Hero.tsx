import homeBg from '../../assets/img/Homebg.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className='h-screen w-screen bg-bottom bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="bg-black/25"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[4vw] text-white font-semibold font-noto-serif mt-10'>
            DECOUVREZ UN CONFORT EXCEPTIONNEL
          </h1>
          <h2 className='text-[3vh] text-center font-poppins '>
            Kung Fu Hotel Ampefy - Luxe et Saveurs Exotiques
          </h2>

          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
            <Link to="/room">
              <button className='bg-red-600 w-[20vw] py-2 
              cursor-pointer select-none
              active:translate-y-2  active:[box-shadow:0_0px_0_0_#A52A2A,0_0px_0_0_#A52A2A]
              active:border-b-[0px]
              transition-all duration-150 [box-shadow:0_10px_0_0_#A52A2A,0_10px_0_0_#A52A2A]
              border-[1px] border-red-500 '>
                <span className=' h-full text-white'>Hotel</span></button>
            </Link>
            
            <Link to="/restaurant">
            <button className='border-3 w-[20vw] py-2
            cursor-pointer select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_white,0_2px_0_0_white]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_8px_0_0_white,0_8px_0_0_white]
             border-white'>
              <span className='h-full'>Restaurant</span></button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Hero
