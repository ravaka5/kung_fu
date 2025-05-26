"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const navLinks = [
        {
            path: "/", label: "Accueil"
        },
        {
            path: "/room", label: "Chambres"
        },
        {
            path: "/restaurant", label: "Restaurant"
        },
        {
            path: "/events", label: "Evénements"
        }
    ]

    const isActive = (path: string) => pathname === path

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link href="/" className='flex items-center'>
                        <span className={`text-2xl font-bold ${isScrolled ? 'text-red-700' : 'text-white'}`}>
                            Kung Fu Hotel
                        </span>
                    </Link>

                    {/* Desktop Menu*/}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'
                                    } hover:text-red-600 ${isActive(link.path) ? 'font-semibold' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Positioned outside the flexbox for better layout */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg text-white">
                    <div className="relative w-full px-4 py-3">

                        <div className=" pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                        ? 'bg-red-600 text-white'
                                        : 'text-gray-800 hover:bg-red-50'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar