"use client";
import Image from "next/image";

const Page4 = () => {

    const activities = [
        {
            id: 1,
            title: "Terrain de Basketball",
            description: "Un espace sportif professionnel pour vos moments de détente entre amis",
            image: "/assets/events/ball.png",
            features: ["Terrain aux normes", "Parfait pour organiser des parties en familles"]
        },
        {
            id: 2,
            title: "Espace Aquatique",
            description: "Une piscine rafraîchissante pour vos moments de relaxation",
            image: "/assets/events/piscine.png",
            features: ["Eau tempérée", "Zone de repos", "Service de conciergerie"]
        },
        {
            id: 3,
            title: "Salon de Jeux",
            description: "Un espace de divertissement moderne pour tous les âges",
            image: "/assets/events/gaming.png",
            features: ["Équipements modernes", "Ambiance conviviale", "Animations organisées"]
        }
    ];

    return (
        <section className="min-h-screen w-full bg-white flex flex-col justify-center px-4 py-20">
            {/* Header */}
            <div className="text-center mb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-6 leading-tight">
                    Activités & Loisirs
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                    Le Kung Fu Hotel met à votre disposition des espaces de détente et de loisirs pour enrichir votre expérience
                </p>
                <div className="mt-8 w-16 h-px bg-gray-300 mx-auto" />
            </div>

            {/* Activities Grid */}
            <div className="w-full max-w-6xl mx-auto">
                {/* Version Mobile */}
                <div className="md:hidden space-y-12">
                    {activities.map((activity) => (
                        <div key={activity.id}>
                            <div className="space-y-6">
                                <div className="relative h-64 rounded-lg overflow-hidden">
                                    <Image
                                        height={500}
                                        width={500}
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-light text-gray-800">{activity.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">{activity.description}</p>
                                    <div className="space-y-3">
                                        {activity.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <div className="w-1 h-1 rounded-full bg-gray-400" />
                                                <span className="text-gray-700 text-sm font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Version Desktop */}
                <div className="hidden md:grid md:grid-cols-3 gap-12">
                    {activities.map((activity) => (
                        <div
                            key={activity.id}
                            className="group cursor-pointer"
                        >
                            <div className="space-y-8">
                                {/* Image */}
                                <div className="relative h-80 rounded-lg overflow-hidden">
                                    <Image
                                        width={500}
                                        height={500}
                                        src={activity.image}
                                        alt={activity.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* Contenu */}
                                <div className="space-y-6">
                                    <h3 className="text-xl lg:text-2xl font-light text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                                        {activity.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light">
                                        {activity.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-4">
                                        {activity.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <div className="w-1 h-1 rounded-full bg-gray-400" />
                                                <span className="text-gray-700 text-sm font-light">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section informative */}
            <div className="mt-24 text-center max-w-4xl mx-auto">
                <div className="bg-gray-50 rounded-lg p-12 border border-gray-100">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                        Des installations pensées pour votre confort
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light mb-8 text-lg">
                        Nos espaces de loisirs complètent parfaitement votre séjour, que vous organisiez un événement professionnel ou personnel.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400" />
                            <span className="text-gray-700 font-light">Accès inclus</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-gray-400" />
                            <span className="text-gray-700 font-light">Service personnalisé</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4;