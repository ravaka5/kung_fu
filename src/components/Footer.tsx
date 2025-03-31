import footer from '../assets/img/homepage/Rectangle 14.jpg'

const Footer = () => {
  return (
    <footer className='w-100% mt-10 h-screen flex flex-col justify-end'>
        <div className='h-[25vw] bg-center bg-cover flex flex-row' style={{ backgroundImage: `url(${footer})` }}>
            <div className='text-white flex flex-col  justify-center ps-[10vw]'>
                <h1 className='text-6xl font-noto-serif font-extrabold '>Horaires de disponibilité</h1>
                <hr className='border-2 my-2'/>
                <div className='text-[32px] font-poppins font-semibold mt-[2vw]'>
                <p>
                    OUVERT 24H/24 ET 7J/7
                </p>
                <p className='italic font-normal'>
                   Sauf preavis *
                </p>
                </div>
                
            </div>
        </div>
        <div className='flex flex-row justify-around mt-[2vw] px-[2vw]'>
        <div>
            <h1 className='text-4xl font-noto-serif font-medium text-red-700   w-fit'>
                Contact
            </h1>
            <div className=' font-poppins text-2xl mt-8 text-gray-600'>
                <p className='mb-5'>+261 34 56 87 10 / +261 33 21 305 15</p>
                <p className='mb-5'>Kungfu.hotelampefy@gmail.com</p>
                <p>Ampefy ,Antananarivo ,Madagascar</p>
            </div>
        </div>
        <div>
            <h1 className='text-4xl font-noto-serif font-medium text-red-700   w-fit'>
                Services
            </h1>
            <div className='font-poppins text-2xl mt-8 text-gray-600'>
                <p className='mb-5'>Hotel</p>
                <p className='mb-5'>Restaurant</p>
                <p className='mb-5'>Evenementiel</p>
            </div>
        </div>
        <div>
            <h1 className='text-4xl font-noto-serif font-medium text-red-700   w-fit'>
                Reseaux Sociaux
            </h1>
            <div className=' font-poppins text-2xl mt-8 text-gray-600'>
                <p>Facebook</p>
            </div>
        </div>
        </div>
        <hr className='mx-[4vw] my-[2vw] border-2 border-gray-100'/>
        <div className='mx-[10vw] mb-[2vw]'>
            <h1 className='text-xl font-noto-serif'>Kung Fu Hotel .</h1>
            <p className='font-poppins text-gray-600'>A votre service depuis 2021</p>
        </div>
        <div className='justify-center flex '>
            <p>
                © 2025 Kung-Fu Hotel , Tout droits reservés 
            </p>
        </div>
    </footer>
  )
}

export default Footer
