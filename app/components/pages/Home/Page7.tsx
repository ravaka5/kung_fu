const Page7 = () => {
    return (
        <section className="w-screen min-h-screen flex justify-center items-center text-center px-4 md:px-12 py-12">
            <div className="w-full max-w-screen-xl">
                {/* Titre */}
                <h1 className="font-poppins text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-[2.5vw] text-red-700 font-bold mb-6">
                    Où nous trouver ?
                </h1>

                {/* Carte */}
                <div className="w-full h-[80vw] sm:h-[40vw] md:h-[28vw] lg:h-[34vw] rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4154.9463955132705!2d46.73603920000001!3d-19.025615300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21fb23e058efb66b%3A0x44fca43857889e53!2sKung%20Fu%20Hotel!5e1!3m2!1sen!2smg!4v1743451677416!5m2!1sen!2smg"
                        className="w-full h-full"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default Page7;
