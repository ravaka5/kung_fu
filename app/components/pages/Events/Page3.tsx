"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    features: string[];
}

const services: Service[] = [
    {
        id: 1,
        title: "Mariages",
        description:
            "Transformez votre jour spécial en un souvenir inoubliable chez Kung Fu Hotel. Avec un cadre élégant et une ambiance unique, nous offrons :",
        image: "/assets/events/Eventsbg1.jpeg",
        features: [
            "Des espaces somptueux pour votre cérémonie et réception",
            "Un service personnalisé pour répondre à toutes vos attentes",
            "Un menu raffiné qui ravira vos invités",
        ],
    },
    {
        id: 2,
        title: "Séminaires",
        description:
            "Boostez votre productivité et inspirez votre équipe avec nos solutions pour séminaires :",
        image: "/assets/events/pg3/img2.png",
        features: [
            "Salles de conférence modernes, équipées de technologies de pointe",
            "Espaces modulables pour s'adapter à vos besoins professionnels",
            "Pauses café et déjeuners gourmands pour dynamiser vos sessions",
        ],
    },
    {
        id: 3,
        title: "Anniversaire en Famille",
        description:
            "Célébrez cette journée spéciale autour d'un moment mémorable :",
        image: "/assets/events/pg3/img3.jpeg",
        features: [
            "Ambiance chaleureuse et conviviale pour vos retrouvailles",
            "Plats variés et savoureux pour satisfaire toutes les générations",
            "Service attentionné pour que chacun se sente comme chez soi",
        ],
    },
    {
        id: 4,
        title: "Détente en Groupe",
        description:
            "Offrez-vous une pause bien méritée avec vos proches ou collègues :",
        image: "/assets/events/pg3/img4.jpeg",
        features: [
            "Espaces détente et loisirs pour s'amuser et se relaxer",
            "Activités de groupe pour renforcer les liens",
            "Un cadre apaisant pour échapper au stress quotidien",
        ],
    },
];

const Page3 = () => {
    const [visibleSections, setVisibleSections] = useState<number[]>([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleSections([0, 1, 2, 3]);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full bg-white">
            {/* Header Section */}
            <section className="text-center py-20 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6">
                        Nos Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        Une expertise reconnue pour des événements d&apos;exception
                    </p>
                    <div className="mt-8 w-16 h-px bg-gray-300 mx-auto" />
                </div>
            </section>

            {/* Services Sections */}
            <section className="max-w-6xl mx-auto px-4">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`transition-all duration-1000 transform ${visibleSections.includes(index)
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                            }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        {/* Mobile View */}
                        <div className="lg:hidden py-16 border-b border-gray-100 last:border-b-0">
                            <div className="space-y-8">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        height={500}
                                        width={500}
                                        alt={service.title}
                                        src={service.image}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-light text-gray-800">
                                        {service.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                    <div className="space-y-4">
                                        {service.features.map((feature, idx) => (
                                            <div
                                                key={`mobile-${service.id}-${idx}`}
                                                className="flex items-start space-x-4"
                                            >
                                                <div className="w-1 h-1 rounded-full bg-gray-400 mt-3 flex-shrink-0" />
                                                <p className="text-gray-700 leading-relaxed font-light">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop View */}
                        <div className="hidden lg:block py-20 border-b border-gray-100 last:border-b-0">
                            <div
                                className={`flex items-center ${index % 2 === 0 ? "" : "flex-row-reverse"
                                    } gap-16`}
                            >
                                {/* Image */}
                                <div className="flex-1">
                                    <div className="relative h-96 rounded-lg overflow-hidden group">
                                        <Image
                                            height={500}
                                            width={500}
                                            alt={service.title}
                                            src={service.image}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="max-w-lg">
                                        <h2 className="text-3xl lg:text-4xl font-light text-gray-800 mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                                            {service.description}
                                        </p>

                                        <div className="space-y-5 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div
                                                    key={`desktop-${service.id}-${idx}`}
                                                    className="flex items-start space-x-4"
                                                >
                                                    <div className="w-1 h-1 rounded-full bg-gray-400 mt-3 flex-shrink-0" />
                                                    <p className="text-gray-700 leading-relaxed font-light">
                                                        {feature}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="bg-gray-700 py-20">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-6">
                        Discutons de votre projet
                    </h3>
                    <p className="text-gray-300 text-lg mb-10 font-light">
                        Contactez-nous au +261 34 56 87 10 / +261 33 21 305 15 pour un
                        entretien personnalisé.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Page3;
