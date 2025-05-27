"use client";
import Slider from "@/app/components/ui/Slider";

const Page5 = () => {
    return (
        <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-16 text-center">
            <div className="text-red-700 font-poppins mb-10 max-w-4xl">
                <h1 className="text-[clamp(2rem, 5vw, 4rem)] font-bold mb-4">Délices culinaires</h1>
                <p className="text-[clamp(1rem, 2vw, 1.375rem)] font-light text-gray-700">
                    Savourez le meilleur de la cuisine malgache et chinoise, où chaque bouchée <br className="hidden md:block" />
                    est un véritable voyage gustatif ! Vos papilles vous remercieront !
                </p>
            </div>

            <Slider />
        </section>
    );
};

export default Page5;
