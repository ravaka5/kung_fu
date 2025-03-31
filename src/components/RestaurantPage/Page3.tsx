import rest1 from '../../assets/img/restaurant/Rectangle19.png'

const Page3 = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center' >
        <div className='h-100 w-screen bg-center bg-cover bg-fixed flex justify-center items-center' style={{ backgroundImage: `url(${rest1})` }}>
          <div className='text-center'>
            <h1 className='text-[72px] font-poppins text-white mb-4'>
              SAVOUREZ NOS SPECIALITES             
            </h1>
          </div>
        </div>
      </div>
  )
}

export default Page3
