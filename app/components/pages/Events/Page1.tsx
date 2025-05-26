import Image from "next/image"

const Page1 = () => {
    return (
        <section className='h-screen w-screen flex flex-col text-center justify-center items-center gap-[2vw]'>
            <div className="pt-[1vw]">
                <div className="text-red-700">
                    <h1 className="text-[2.6vw] font-bold font-noto-serif">
                        Planifiez votre evenement avec nous
                    </h1>
                    <p className="text-[1vw]">
                        Des souvenirs inoubliables, organises avec soin
                    </p>
                </div>
                <div className="gap-[2vw] text-center flex mt-[2vw] font-poppins">
                    <div className="flex flex-col w-[18vw]  hover:scale-105">
                        <Image
                            height={300}
                            width={400}
                            src="/assets/events/1.png"
                            alt="events image 1" />
                        <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                            Mariages de reve                </h1>
                        <p className="text-[1vw]">
                            Nous vous accompagnons dans l&apos;organisation de votre mariage, en créant une ambiance romantique et unique qui correspond à vos souhaits.                </p>
                    </div>
                    <div className="flex flex-col w-[18vw] hover:scale-105">
                        <Image
                            alt="events image 2"
                            height={300}
                            width={400}
                            src="/assets/events/3.png" />
                        <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                            Seminaires et conferences                </h1>
                        <p className="text-[1vw]">
                            Nos espaces sont parfaitement adaptés pour accueillir des séminaires, offrant un cadre professionnel et des équipements modernes pour assurer le succès de votre événement.
                        </p>
                    </div>
                    <div className="flex flex-col w-[18vw] hover:scale-105">
                        <Image
                            alt="events image 3"
                            height={300}
                            width={400}
                            src="/assets/events/2.png" />
                        <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                            Evenements sur mesure                </h1>
                        <p className="text-[1vw]">
                            Que ce soit un anniversaire, une réunion de famille ou un événement d&apos;entreprise, nous personnalisons chaque détail pour répondre à vos besoins spécifiques.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page1
