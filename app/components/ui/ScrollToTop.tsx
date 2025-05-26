"use client"
import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'
const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 p-3 bg-red-600 text-white rounded-full shadow-lg
          transition-opacity duration-300 hover:bg-red-700 focus:outline-none
          ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            aria-label="Scroll to top"
        >
            <ChevronUp className="h-6 w-6" />
        </button>
    );
}

export default ScrollToTop
