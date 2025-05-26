"use client"
import { useEffect, useRef } from 'react';
import SectionTitle from '../../ui/SectionTitle';
import Image from 'next/image';

interface AmenityCardProps {
    image: string;
    title: string;
    description: string;
    delay: number;
}

const AmenityCard = ({ image, title, description, delay }: AmenityCardProps) => {
    return (
        <div className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-${delay} flex flex-col w-full sm:w-[280px] md:w-[22vw] group`}>
            <div className="overflow-hidden rounded-lg mb-4">
                <Image
                    width={400}
                    height={300}
                    src={image}
                    alt={title}
                    className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <h3 className="text-xl md:text-[1.2vw] font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                {title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                {description}
            </p>
        </div>
    );
};

const Page2 = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen w-full py-20 px-4 flex flex-col justify-center items-center"
        >
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 mb-16 text-center">
                <SectionTitle
                    title="Équipements de Qualité"
                    subtitle="Tout ce dont vous avez besoin pour un séjour agréable"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[2vw] max-w-7xl">
                <AmenityCard
                    image="/assets/room/Page2/Rectangle 41.png"
                    title="Piscine"
                    description="Profitez de notre piscine pour un moment de détente et de fraîcheur. Idéale pour nager ou se relaxer en toute tranquillité."
                    delay={100}
                />
                <AmenityCard
                    image="/assets/room/Page2/Rectangle 43.png"
                    title="Salle de Jeu"
                    description="Amusez-vous dans notre salle de jeux, équipée pour tous les âges. Un espace idéal pour se divertir et partager de bons moments."
                    delay={200}
                />
                <AmenityCard
                    image="/assets/room/Page2/Rectangle 42.png"
                    title="Télévision à Écran Plat"
                    description="Détendez-vous avec notre télévision à écran plat dans chaque chambre, offrant un large choix de chaînes nationales et internationales."
                    delay={300}
                />
            </div>
        </section>
    );
};

export default Page2;
