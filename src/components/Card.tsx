import React from 'react'

interface CardProps
{
    title: string,
    subtitle: string,
    content: string,
    imgUrl: string
}

const Card: React.FC<CardProps> = ({title,subtitle,content,imgUrl}) => {
  return (
    <div className='rounded-3xl w-80  shadow-md'>
        <div className='h-90 w-full'>
            <img style={{backgroundImage:`url(${imgUrl})`}}/>
        </div>
        <div className='px-4 bg-gray-100 py-10 w-full h-fit  rounded-b-3xl  font-poppins'>
            <h1 className='uppercase font-semibold'>{title}</h1>
            <h2 className='font-light text-[22px] pb-4'>{subtitle}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default Card
