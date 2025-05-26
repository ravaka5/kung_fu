import Image from 'next/image'

interface SpecialitiesCardProps {
  title: string,
  content: string,
  imgUrl: string,
  price: string
}

const SpecialitiesCard: React.FC<SpecialitiesCardProps> = ({ imgUrl, title, content, price }) => {
  return (
    <div>
      <div className='rounded-3xl w-[20vw] shadow-md flex flex-col'>
        <div className='h-full w-[fit]'>
          <Image
            width={400}
            height={300}
            src={imgUrl}
            className='w-full h-[20vw] rounded-t-4xl object-cover'
            alt='Speciality Image' />
          <div className="bg-gray-200 w-fit px-[1vw] rounded-[5px]  ms-[2vw] mt-[1vw]">
            <p>{price}</p>
          </div>
        </div>
        <div className='px-[3vw] py-[2vw] w-full h-fit  rounded-b-3xl  font-poppins'>
          <h1 className='font-semibold text-[1.4vw] mb-[1vw]'>{title}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default SpecialitiesCard
