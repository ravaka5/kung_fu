import page1 from "@/public/assets/homepage/page1.png";
import page1_2 from "@/public/assets/homepage/Rectangle 50.png";
import Image from "next/image";

const Page1 = () => {
    return (
        <section id='about' className='relative overflow-hidden py-16 md:py-0 md:h-screen w-full'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='flex flex-col md:flex-row items-center'>

                    <div className='md:hidden w-full mb-8'>
                        <div className='relative mx-auto'>
                            <Image
                                className='w-full h-64 object-cover rounded-lg shadow-xl'
                                src={page1}
                                alt="Kung Fu Hotel"
                            />
                        </div>
                    </div>

                    <div className='hidden md:block md:w-2/5 lg:w-1/2 relative'>
                        <div className='relative z-10'>
                            <Image
                                className='object-cover rounded-lg shadow-xl'
                                src={page1}
                                alt="Kung Fu Hotel"
                            />
                        </div>
                    </div>
                    <div className='w-full md:w-3/5 lg:w-1/2 md:pl-12 z-20'>
                        <div className='text-red-700 mb-8'>
                            <h3 className='text-lg md:text-xl font-poppins'>L&apos;expérience inoubliable d&apos;Ampefy,</h3>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold font-noto-serif mt-2'>
                                Bienvenue au Kung Fu Hotel
                            </h1>
                            <h2 className='text-xl md:text-2xl font-poppins mt-2 flex items-center'>
                                Ampefy, Ankorondrano
                                <span className='ml-2 inline-flex'>🏮</span>
                            </h2>
                        </div>

                        {/* Description Text */}
                        <div className='bg-white/60 p-4 md:p-6 rounded-lg shadow-sm'>
                            <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                                En route vers l&apos;inattendu, le Kung Fu Hotel
                                se révèle comme un sanctuaire d&apos;émotions où
                                chaque instant se réinvente, tel un conte réécrit
                                mille fois, ne laissant derrière lui qu&apos;un écho
                                mystérieux. Ici, les murmures d&apos;histoires anciennes
                                se mêlent aux rires complices, invitant chacun à retrouver
                                l&apos;essence de la convivialité.
                            </p>

                            <p className='text-base md:text-lg text-gray-700 leading-relaxed mt-4'>
                                Niché à Ampefy, Ankorondrano et ouvert depuis 2021,
                                le Kung Fu Hotel vous accueille 24h/24, 7j/7 pour
                                des expériences uniques. Savourez notre menu fusion,
                                mariant subtilement saveurs chinoises et malgaches,
                                défiez vos amis sur notre terrain de basket,
                                ressourcez-vous dans notre piscine ou plongez
                                dans l&apos;univers ludique de notre game room.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Small Accent Image */}
            <div className='hidden md:block absolute right-10 bottom-20 xl:right-20 xl:bottom-40 z-10'>
                <Image
                    src={page1_2}
                    alt="Kung Fu Hotel Accent"
                    className='w-32 xl:w-40 h-auto shadow-lg rounded-lg'
                />
            </div>
        </section>
    );
};

export default Page1;