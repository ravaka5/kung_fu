"use client";
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
    const slides = [
        {
            bgImg: "/assets/homepage/slider/img1.png",
            text1: "De la nourriture traditionnelle Malagasy",
        },
        {
            bgImg: "/assets/homepage/slider/img2.png",
            text1: "L'alliance exquise de saveurs",
        },
        {
            bgImg: "/assets/homepage/slider/img3.png",
            text1: "Des chefs-d'œuvre culinaires chinoises",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToPrevious = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prevIndex => prevIndex === 0 ? slides.length - 1 : prevIndex - 1);
    }, [isAnimating, slides.length]);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
    }, [isAnimating, slides.length]);

    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        const autoSlide = setInterval(goToNext, 5000);
        return () => clearInterval(autoSlide);
    }, [goToNext]);

    return (
        <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] group rounded-2xl overflow-hidden shadow-lg">
            <div
                className="absolute w-full h-full transition-opacity duration-500"
                style={{
                    backgroundImage: `url(${slides[currentIndex].bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Text content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2">{slides[currentIndex].text1}</h3>
                </div>
            </div>

            {/* Left arrow */}
            <button
                onClick={goToPrevious}
                aria-label="Slide précédent"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white
        hover:bg-black/70 transition-all z-10"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Right arrow */}
            <button
                onClick={goToNext}
                aria-label="Slide suivant"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white
        hover:bg-black/70 transition-all z-10"
            >
                <ChevronRight size={28} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        aria-label={`Aller au slide ${index + 1}`}
                        onClick={() => {
                            if (!isAnimating) {
                                setIsAnimating(true);
                                setCurrentIndex(index);
                            }
                        }}
                        className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300
            ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
