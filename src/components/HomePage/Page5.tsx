import React from 'react'
import Slider from '../slider/Slider'

const Page5 = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center text-center'>
        <div>
        <div className='text-red-700 font-poppins'>
            <h1 className='text-[56px]'>
                Delices culinaires
            </h1>
            <p className='text-[22px] font-light'>
            Savourez le meilleur de la cuisine malgache et chinoise, où chaque bouchée <br/>
            est un véritable voyage gustatif ! Vos papilles vous remercieront !
            </p>
        </div>

        <div>
            <Slider/>
        </div>
        </div>
        
    </section>
  )
}

export default Page5
