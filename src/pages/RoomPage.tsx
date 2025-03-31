import RoomBg from '../assets/img/Roombg.jpeg'

const RoomPage = () => {
  return (
    <div>
      <div className='scroll-smooth'>
      <div className='h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${RoomBg})` }}>
      <div className="bg-black/25"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[6vh] text-white font-semibold font-noto-serif mt-10'>
          DETENDEZ-VOUS DANS NOS CHAMBRES ELEGANTES           </h1>
          <h2 className='text-[3vh] text-center font-poppins '>
          “Votre confort, notre priorité”.          
          </h2>

          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
            <button className='bg-red-600 w-120 py-2'>Decouvrez nos offres</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RoomPage
