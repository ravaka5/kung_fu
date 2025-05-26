'use client';

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import homeBg from "../../../../public/assets/homepage/Homebg.png"; // Adjust the path as necessary

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
            {/* Background with parallax effect */}
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
                    className="object-cover object-bottom"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/25 z-10" />

            <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-white px-4">
                <div className="max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-[4vw] font-semibold font-noto-serif mb-6">
                        DECOUVREZ UN CONFORT EXCEPTIONNEL
                    </h1>

                    <h2 className="text-xl md:text-2xl lg:text-[3vh] mb-12 max-w-3xl mx-auto font-poppins">
                        Kung Fu Hotel Ampefy - Luxe et Saveurs Exotiques
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                        <Link href="/room">
                            <button className="px-8 py-3 bg-red-600 text-white font-poppins w-full md:w-auto
                transform hover:bg-red-700 transition-all duration-300
                shadow-lg hover:shadow-xl active:translate-y-1">
                                Hotel
                            </button>
                        </Link>

                        <Link href="/restaurant">
                            <button className="px-8 py-3 border-2 border-white text-white font-poppins w-full md:w-auto
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
                    <ChevronDown className="h-10 w-10 text-white opacity-80" />
                </button>
            </div>
        </section>
    )
}

export default Hero