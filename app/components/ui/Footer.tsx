import { Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {


    return (
        <footer className='w-full mt-10'>
            {/* Top banner with availability information */}
            <div
                className='w-full bg-center bg-cover relative py-16 md:py-24 lg:py-32'
                style={{ backgroundImage: `url('/assets/homepage/Rectangle 14.jpg')` }}
            >
                <div className='absolute inset-0 bg-black/30'></div>
                <div className='relative z-10 container mx-auto px-6 md:px-12'>
                    <div className='text-white'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-noto-serif font-bold mb-4'>
                            Horaires de disponibilité
                        </h2>
                        <hr className='border-2 w-32 my-4' />
                        <div className='text-xl md:text-2xl font-poppins font-semibold mt-4'>
                            <p>OUVERT 24H/24 ET 7J/7</p>
                            <p className='italic font-normal mt-2'>Sauf preavis *</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className='container mx-auto px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {/* Contact information */}
                    <div>
                        <h3 className='text-2xl md:text-3xl font-noto-serif font-medium text-red-700 mb-6'>
                            Contact
                        </h3>
                        <div className='font-poppins text-lg text-gray-600 space-y-4'>
                            <div className='flex items-center gap-3'>
                                <Phone size={20} className='text-red-700 flex-shrink-0' />
                                <p>+261 34 56 87 10 / +261 33 21 305 15</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail size={20} className='text-red-700 flex-shrink-0' />
                                <p>Kungfu.hotelampefy@gmail.com</p>
                            </div>
                            <div className='flex items-center gap-3'>
                                <MapPin size={20} className='text-red-700 flex-shrink-0' />
                                <p>Ampefy, Antananarivo, Madagascar</p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-2xl md:text-3xl font-noto-serif font-medium text-red-700 mb-6'>
                            Services
                        </h3>
                        <ul className='font-poppins text-lg text-gray-600 space-y-4'>
                            <li className='transition-all hover:text-red-700 hover:translate-x-1 cursor-pointer'>
                                Hotel
                            </li>
                            <li className='transition-all hover:text-red-700 hover:translate-x-1 cursor-pointer'>
                                Restaurant
                            </li>
                            <li className='transition-all hover:text-red-700 hover:translate-x-1 cursor-pointer'>
                                Evenementiel
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className='text-2xl md:text-3xl font-noto-serif font-medium text-red-700 mb-6'>
                            Reseaux Sociaux
                        </h3>
                        <div className='flex gap-4'>
                            <a href="https://www.facebook.com/p/Kung-Fu-h%C3%B4tel-100063885877399/?locale=fr_FR&_rdr" className='w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-red-700 hover:text-white transition-all'>
                                <Facebook size={20} />
                            </a>

                        </div>
                    </div>
                </div>

                <hr className='my-10 border border-gray-200' />

                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-6 md:mb-0'>
                        <h4 className='text-xl font-noto-serif'>Kung Fu Hotel.</h4>
                        <p className='font-poppins text-gray-600 text-sm'>A votre service depuis 2021</p>
                    </div>
                    <p className='text-sm text-gray-500'>
                        © 2025 Kung-Fu Hotel, Tout droits reservés
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;