'use client';
import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {

    const slides = [
        {
            bgImg: "/assets/homepage/slider/img1.png",
            text1: "De la nourriture",
            text2: "traditionnelle Malagasy"
        },
        {
            bgImg: "/assets/homepage/slider/img2.png",
            text1: "L'alliance exquise",
            text2: "de saveurs"
        },
        {
            bgImg: "/assets/homepage/slider/img3.png",
            text1: "Des chef d'oeuvre",
            text2: "culinaires chinoises"
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToPrevious = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prevIndex => {
            const isFirstSlide = prevIndex === 0;
            return isFirstSlide ? slides.length - 1 : prevIndex - 1;
        });
    }, [isAnimating, slides.length]);

    const goToNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(prevIndex => {
            const isLastSlide = prevIndex === slides.length - 1;
            return isLastSlide ? 0 : prevIndex + 1;
        });
    }, [isAnimating, slides.length]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    // Auto-advance slides
    useEffect(() => {
        const slideInterval = setInterval(goToNext, 5000);
        return () => clearInterval(slideInterval);
    }, [goToNext]);

    return (
        <div className="relative h-[500px] w-full group">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
                {/* Current Slide */}
                <div
                    className="absolute w-full h-full transition-opacity duration-500"
                    style={{
                        backgroundImage: `url(${slides[currentIndex].bgImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">{slides[currentIndex].text1}</h3>
                        <p className="text-lg text-gray-200">{slides[currentIndex].text2}</p>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full
            text-white cursor-pointer hover:bg-black/50 transition-colors
            opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full
            text-white cursor-pointer hover:bg-black/50 transition-colors
            opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (!isAnimating) {
                                    setIsAnimating(true);
                                    setCurrentIndex(index);
                                }
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider