"use client";

const Page2 = () => {
    return (
        <section className="w-full min-h-screen flex justify-center items-center px-4 py-12 bg-white">
            <div className="text-center max-w-screen-md">
                <h1 className="text-red-700 font-poppins font-bold mb-6 text-[clamp(2rem,5vw,3.25rem)]">
                    Vivez une expérience inoubliable
                </h1>
                <hr className="w-32 mx-auto border-2 border-red-700 mb-6" />
                <p className="text-gray-700 text-[clamp(1rem,2.5vw,1.375rem)] font-poppins leading-relaxed">
                    Le Kung Fu Hôtel n&apos;est pas seulement un lieu où séjourner ; c&apos;est une expérience !
                    Avec notre thème vibrant, nous offrons un mélange unique de détente, de divertissement et de délices culinaires.
                    Rejoignez-nous pour une aventure inoubliable !
                </p>
            </div>
        </section>
    );
};

export default Page2;
