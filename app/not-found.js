"use client";
import { Home, ArrowLeft, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const Not_found = () => {

    return (
        <div
            className="relative bg-center bg-cover w-screen h-screen overflow-hidden flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url("/assets/404/404.jpg")`,
            }}
        >
            {/* Overlay élégant */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>

            {/* Contenu principal */}
            <div className={`relative z-10 text-center text-white px-6 max-w-2xl mx-auto transition-all duration-700 ease-out `}>

                {/* Titre principal minimaliste */}
                <div className="mb-12">
                    <h1 className="text-8xl md:text-9xl font-light text-white/90 mb-6 tracking-wider font-noto-serif">
                        404
                    </h1>
                    <div className="w-24 h-px bg-red-600 mx-auto mb-8"></div>
                    <h2 className="text-2xl md:text-3xl font-light text-white/80 mb-4 font-noto-serif">
                        Page introuvable
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed font-poppins font-light max-w-md mx-auto">
                        La page que vous recherchez n&apos;existe pas ou a été déplacée.
                    </p>
                </div>

                {/* Boutons d'action épurés */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <Link href="/">
                        <button className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium transition-all duration-300 border border-red-600 hover:border-red-700 font-poppins">
                            <Home size={18} />
                            Retour à l&apos;accueil
                        </button>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="group flex items-center gap-3 bg-transparent border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-3 text-base font-medium transition-all duration-300 font-poppins"
                    >
                        <ArrowLeft size={18} />
                        Page précédente
                    </button>
                </div>

                {/* Navigation simple */}
                <div className="border-t border-white/20 pt-8">
                    <p className="text-white/60 text-sm mb-6 font-poppins">
                        Ou explorez nos services
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/rooms" className="text-white/70 hover:text-red-400 transition-colors duration-300 text-sm font-medium font-poppins">
                            Chambres
                        </Link>
                        <Link href="/restaurant" className="text-white/70 hover:text-red-400 transition-colors duration-300 text-sm font-medium font-poppins">
                            Restaurant
                        </Link>
                        <Link href="/events" className="text-white/70 hover:text-red-400 transition-colors duration-300 text-sm font-medium font-poppins">
                            Événements
                        </Link>
                    </div>
                </div>

                {/* Contact discret */}
                <div className="mt-12 text-center">
                    <div className="flex justify-center items-center gap-6 text-white/50">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <a href="tel:+261345687100" className="hover:text-red-400 transition-colors duration-300 text-sm font-poppins">
                                +261 34 56 87 10
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span className="text-sm font-poppins">Ampefy, Madagascar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Not_found;