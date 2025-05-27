"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const Page1 = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const services = [
        {
            id: 1,
            image: "/assets/events/1.png",
            title: "Mariages de rêve",
            description: "Nous vous accompagnons dans l'organisation de votre mariage, en créant une ambiance romantique et unique qui correspond à vos souhaits.",
            icon: "💍"
        },
        {
            id: 2,
            image: "/assets/events/3.png",
            title: "Séminaires et conférences",
            description: "Nos espaces sont parfaitement adaptés pour accueillir des séminaires, offrant un cadre professionnel et des équipements modernes pour assurer le succès de votre événement.",
            icon: "🎯"
        },
        {
            id: 3,
            image: "/assets/events/2.png",
            title: "Événements sur mesure",
            description: "Que ce soit un anniversaire, une réunion de famille ou un événement d'entreprise, nous personnalisons chaque détail pour répondre à vos besoins spécifiques.",
            icon: "✨"
        }
    ]

    return (
        <section className="min-h-screen w-full bg-gradient-to-br from-rose-50 via-white to-red-50 flex flex-col justify-center items-center px-4 py-8 md:py-16">
            {/* Header avec animation */}
            <div className={`text-center mb-8 md:mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <div className="inline-block p-2 bg-red-100 rounded-full mb-4">
                    <span className="text-2xl">🎉</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-4 leading-tight">
                    Planifiez votre événement avec nous
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    Des souvenirs inoubliables, organisés avec soin et passion
                </p>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
            </div>

            {/* Services Grid */}
            <div className="w-full max-w-7xl">
                {/* Version mobile : Stack vertical */}
                <div className="md:hidden space-y-6">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    height={300}
                                    width={400}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
                                    <span className="text-xl">{service.icon}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Version desktop : Grid horizontal */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="relative h-56 lg:h-64 overflow-hidden">
                                <Image
                                    height={300}
                                    width={400}
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                                    <span className="text-xl">{service.icon}</span>
                                </div>
                            </div>
                            <div className="p-6 lg:p-8">
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 group-hover:text-red-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Décoration de fond */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-rose-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-3/4 left-1/3 w-16 h-16 bg-red-300 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </section>
    )
}

export default Page1