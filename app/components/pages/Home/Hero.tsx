'use client';

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import homeBg from "../../../../public/assets/homepage/Homebg.png";

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    transform: `translateY(${offset * 0.4}px)`
                }}
            >
                <Image
                    src={homeBg}
                    alt="Hotel background"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/25 z-10" />

            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-white px-4">
                <div className="max-w-6xl text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] font-semibold font-noto-serif mb-4 sm:mb-6 px-4">
                        DECOUVREZ UN CONFORT EXCEPTIONNEL
                    </h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[3vh] mb-8 sm:mb-12 max-w-3xl mx-auto font-poppins px-4">
                        Kung Fu Hotel Ampefy - Luxe et Saveurs Exotiques
                    </h2>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
                        <Link href="/room" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3 bg-red-600 text-white font-poppins
                                transform hover:bg-red-700 transition-all duration-300
                                shadow-lg hover:shadow-xl active:translate-y-1">
                                Hotel
                            </button>
                        </Link>

                        <Link href="/restaurant" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-poppins
                                transform hover:bg-white/10 transition-all duration-300
                                shadow-lg hover:shadow-xl active:translate-y-1">
                                Restaurant
                            </button>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="absolute bottom-10 animate-bounce cursor-pointer"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="h-8 w-8 sm:h-10 sm:w-10 text-white opacity-80" />
                </button>
            </div>
        </section>
    );
};

export default Hero;