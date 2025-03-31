import React from 'react';

import bouffe1 from '../../assets/img/restaurant/bouffe/bouffe1.jpeg';
import bouffe2 from '../../assets/img/restaurant/bouffe/bouffe2.jpeg';
import bouffe3 from '../../assets/img/restaurant/bouffe/bouffe3.jpeg';
import bouffe4 from '../../assets/img/restaurant/bouffe/bouffe4.jpeg';
import bouffe5 from '../../assets/img/restaurant/bouffe/bouffe5.jpeg';

const Page1 = () => {
  return (
    <section className='w-screen h-screen flex-row py-[2vw]'>
      <div className='font-noto-poppins text-red-800 flex justify-between border-b-2 w-full h-fit mx-[6vw]'>
        <div>
          <h1 className='text-[4vw]'>DE LA HAUTE GASTRONOMIE</h1>
          <p className='text-[1.5vw]'>
            Au Kung Fu Hotel, dégustez des plats raffinés, alliant tradition <br/>
            et modernité, pour une expérience de haute gastronomie inoubliable.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center w-screen h-[30vw] gap-4 px-[6vw]'>
        <img src={bouffe1} alt='Dish 1' className='h-[28vw] w-[15vw] object-cover' />
        <img src={bouffe2} alt='Dish 2' className='h-[28vw] w-[15vw] object-cover mt-[16vw]' />
        <img src={bouffe3} alt='Dish 3' className='h-[28vw] w-[15vw] object-cover' />
        <img src={bouffe4} alt='Dish 4' className='h-[28vw] w-[15vw] object-cover mt-[16vw]' />
        <img src={bouffe5} alt='Dish 5' className='h-[28vw] w-[15vw] object-cover' />
      </div>
    </section>
  );
};

export default Page1;
