import {useState} from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import img1 from "../../assets/img/homepage/slider/img1.png"
import img2 from "../../assets/img/homepage/slider/img2.png"
import img3 from "../../assets/img/homepage/slider/img3.png"



const Slider = () => {

    const slides = [
        {
            bgImg:img1,
            text1: "De la nourriture",
            text2: "traditionnelle Malagasy"
        },
        {
            bgImg:img2,
            text1: "L'alliance exquise",
            text2: "de saveurs"
        },
        {
            bgImg:img3,
            text1: "Des chef d'oeuvre",
            text2: "culinaires chinoises"
        },
    ]

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }


    const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='max-w-[70vw] h-[30vw] w-[70vw] m-auto py-[5vw] px-[2vw] relative group'>
        <div className='flex w-full h-full px-[4vw]'>
            <div className="w-[40vw] flex items-center">
                <h1 className='text-left text-[32px]'>
                {slides[currentIndex].text1}
                <br/>{slides[currentIndex].text2}
                </h1>
            </div>
            <div style={{backgroundImage:`url(${slides[currentIndex].bgImg})`}} className={`w-full h-full bg-cover bg-center duration-400 ease-in-out`}>
            </div>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-[-50%] translate-y-0 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30}/>
        </div>

        <div className='hidden group-hover:block absolute top-[50%] -translate-x-[50%] right-5 translate-y-0 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30}/>
        </div>

            <div className='flex top-4 justify-center py-2'>
    {slides.map((_, index) => (
        <div 
        key={index} 
        onClick={() => setCurrentIndex(index)} 
        className='text-2xl cursor-pointer'>
        <RxDotFilled/>
        </div>
    ))}
    </div>

      
    </div>
  )
}

export default Slider
