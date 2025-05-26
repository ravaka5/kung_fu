import { MdOutlineKeyboardArrowDown } from 'react-icons/md'


const Page3 = () => {
    return (
        <div className='w-screen h-screen flex-row justify-center items-center'>
            <div className='flex justify-center items-center h-screen text-center'>
                <div
                    className='h-fit border-1 bg-center bg-fixed bg-cover w-screen py-[4vw] text-white'
                    style={{ backgroundImage: `url('/assets/homepage/Rectangle8.jpeg')` }}
                >
                    <div>
                        <h1 className='text-[72px]'>Kung Fu Hotel</h1>
                        <h2 className='text-[22px]'>Votre oasis evenementiel a Madagascar</h2>
                    </div>
                    <div>
                        <p className='text-[48px]'>
                            Plongez dans le luxe , le plaisir
                            <br />
                            et des experiences inoubliables !
                        </p>
                    </div>
                    <div className="">
                        <button className="bg-gray-100 text-black rounded-full animate-bounce mt-[2vw]">
                            <MdOutlineKeyboardArrowDown className=" w-[3vw] h-[3vw]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3