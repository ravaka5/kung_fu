import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Page2 = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' >
      <div className='py-[8vw] w-screen bg-center bg-cover bg-fixed flex justify-center items-center' style={{ backgroundImage: `url("/assets/restaurant/Rectangle19.png")` }}>
        <div className='text-center'>
          <h1 className='text-[4vw] font-poppins text-white mb-4'>
            SAVOUREZ NOS SPECIALITES
          </h1>
          <div className="flex w-full justify-center ">
            <button className="bg-gray-100 text-black rounded-full animate-bounce mt-[2vw] p-[vw]">
              <MdOutlineKeyboardArrowDown className=" w-[3vw] h-[3vw]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page2
