import RoomBg from '../../assets/img/RoomBg.png'

const Hero = () => {
  return (
      <section className='h-screen w-screen bg-bottom bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${RoomBg})` }}>
      <div className="bg-black/50"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[4vw] text-white font-semibold font-noto-serif mt-10'>
          DETENDEZ-VOUS DANS NOS CHAMBRES ELEGANTES</h1>
          <h2 className='text-[3vh] text-center font-poppins '>
          Nos chambres, alliant élégance et sérénité, sont conçues pour vous offrir <br/> un véritable cocon de détente après une journée bien remplie.         
          </h2>

          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
            <button className='bg-red-600 w-120 py-2
            cursor-pointer select-none
            active:translate-y-2  active:[box-shadow:0_0px_0_0_#A52A2A,0_0px_0_0_#A52A2A]
            active:border-b-[0px]
            transition-all duration-150 [box-shadow:0_10px_0_0_#A52A2A,0_10px_0_0_#A52A2A]
            border-[1px] border-red-500'>Decouvrez nos offres</button>
          </div>
        </div>
      </section>
  )
}

export default Hero
