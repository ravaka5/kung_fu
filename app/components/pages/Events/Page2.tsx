import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const Page2 = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' >
      <div className='h-100 w-screen bg-center bg-cover bg-fixed flex justify-center items-center' style={{ backgroundImage: `url("/assets/events/EventsBg.jpeg")` }}>
        <div className='text-center  text-white'>
          <h1 className='text-[72px] font-poppins'>
            Événements Inoubliables
          </h1>
          <p className="text-[2vw] font-semibold">Mariages, séminaires, dîners, détente.</p>
          <p className="text-[1.4vw] py-[1vw]">Vivez des moments mémorables ensemble.</p>
          <div className="flex w-full justify-center ">
            <button className="bg-gray-100 text-black rounded-full animate-bounce mt-[2vw]">
              <MdOutlineKeyboardArrowDown className=" w-[3vw] h-[3vw]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
