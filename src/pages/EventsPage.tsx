import Eventsbg from '../assets/img/Eventsbg.jpeg'

const EventsPage = () => {
  return (
    <div className='scroll-smooth'>
      <div className='h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center ' style={{ backgroundImage: `url(${Eventsbg})` }}>
      <div className="bg-black/25"></div>
        <div className=' text-white'>
          <h1 className='text-center text-[6vh] text-white font-semibold font-noto-serif mt-10'>
          CELEBREZ VOS MOMENTS  INOUBLIABLES          </h1>
          <h2 className='text-[3vh] text-center font-poppins '>
          Transformez chaque evenement en une experience memorable          
          </h2>
          <div className=' mt-12 font-poppins text-center flex flex-row justify-center gap-8 text-[3.5vh]'>
          <button className='bg-red-600 w-120 py-2'>Voir Nos Événements</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
