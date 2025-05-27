"use client";
import Slider from "@/app/components/ui/Slider";

const Page5 = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 text-center">
            <div className="text-red-700 font-poppins mb-12 max-w-5xl px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                    Délices culinaires
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-light text-gray-700 max-w-4xl leading-relaxed">
                    Savourez le meilleur de la cuisine malgache et chinoise, où chaque bouchée est un véritable voyage gustatif ! Vos papilles vous remercieront !
                </p>
            </div>

            <Slider />
        </section>
    );
};

export default Page5;
