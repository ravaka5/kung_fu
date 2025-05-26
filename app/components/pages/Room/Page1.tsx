"use client"

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Image from "next/image"

const Page1 = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight * 3,
            behavior: 'smooth'
        });
    };

    return (
        <section className='min-h-screen w-full py-12 md:py-0 md:h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-12 lg:px-20 gap-6 md:gap-12'>
            {/* Image Container */}
            <div className="w-full md:w-2/5 lg:w-5/12 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                    <Image
                        width={800}
                        height={600}
                        src={"/assets/room/Rooms1.jpeg"}
                        alt="Luxury hotel room"
                        className="w-full h-64 md:h-96 lg:h-[38rem] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>

            {/* Text Container */}
            <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-red-700 mb-4 md:mb-6 font-noto-serif leading-tight">
                    Détendez-vous dans le confort de nos chambres
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-lg mb-8 font-poppins">
                    Profitez d&apos;un espace raffiné alliant élégance et confort.
                    Que ce soit pour un séjour romantique ou en famille,
                    nos chambres vous garantissent repos et sérénité absolue.
                </p>

                <div className="mt-4 md:mt-8">
                    <button
                        onClick={handleScroll}
                        className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full transition-all duration-300 transform hover:translate-y-1 flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                        <span className="font-medium">Explorer</span>
                        <MdOutlineKeyboardArrowDown className="w-5 h-5 animate-bounce" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Page1;