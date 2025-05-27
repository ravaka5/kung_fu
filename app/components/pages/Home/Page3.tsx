"use client";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Page3 = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center text-white">
            <div
                className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/assets/homepage/Rectangle8.jpeg')` }}
            >
                <div className="relative z-10 px-4">
                    <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold mb-4">Kung Fu Hotel</h1>
                    <h2 className="text-[clamp(1rem,3vw,1.5rem)] mb-8">
                        Votre oasis événementiel à Madagascar
                    </h2>
                    <p className="text-[clamp(1.75rem,6vw,3rem)] font-light leading-relaxed">
                        Plongez dans le luxe, le plaisir
                        <br />
                        et des expériences inoubliables !
                    </p>
                    <div className="mt-8">
                        <button className="bg-white text-black p-3 rounded-full animate-bounce">
                            <MdOutlineKeyboardArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;
