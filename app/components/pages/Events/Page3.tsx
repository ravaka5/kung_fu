import Image from "next/image";

const Page3 = () => {
    return (
        <div className='w-screen' >
            <div className="flex">
                <div className="bg-red-100 w-[50%]">
                    <Image
                        alt="Events Background"
                        height={500}
                        width={500}
                        src="/assets/events/Eventsbg1.jpeg" className="w-full" />
                </div>
                <div className="w-[50%] ">
                    <div className="flex justify-center items-center h-[100%]">
                        <div className=" w-[80%]">
                            <h1 className="text-[4vw] font-noto-serif text-red-700">Mariages</h1>
                            <p className="text-[1.4vw] font-poppins text-red-700">Transformez votre jour spécial en un souvenir inoubliable chez Kung Fu Hotel.Avec un cadre élégant et une ambiance unique, nous offrons :
                            </p>
                            <hr className="my-[1vw]" />
                            <ul className=" list-disc ps-[1vw] text-[1vw] font-poppins">
                                <li >Des espaces somptueux pour votre cérémonie et réception.</li>
                                <li>Un service personnalisé pour répondre à toutes vos attentes.</li>
                                <li>Un menu raffiné qui ravira vos invités.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-[50%]">
                    <div className="flex justify-center items-center h-[100%]">
                        <div className=" w-[80%]">
                            <h1 className="text-[4vw] font-noto-serif text-red-700">Séminaires</h1>
                            <p className="text-[1.4vw] font-poppins text-red-700">Boostez votre productivité et inspirez votre équipe avec nos solutions pour séminaires :
                            </p>
                            <hr className="my-[1vw]" />
                            <ul className=" list-disc ps-[1vw] text-[1vw] font-poppins">
                                <li >Salles de conférence modernes, équipées de technologies de pointe.</li>
                                <li>Espaces modulables pour s&apos;adapter à vos besoins professionnels.</li>
                                <li>Pauses café et déjeuners gourmands pour dynamiser vos sessions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-red-100 w-[50%]">
                    <Image
                        height={500}
                        width={500}
                        alt="Events Image"
                        src="/assets/events/pg3/img2.png" className="w-full" />
                </div>
            </div>
            <div className="flex">
                <div className="bg-red-100 w-[50%]">
                    <Image
                        height={500}
                        width={500}
                        alt="Events Image"
                        src="/assets/events/pg3/img3.jpeg" className="w-full" />
                </div>
                <div className="w-[50%]">
                    <div className="flex justify-center items-center h-[100%]">
                        <div className=" w-[80%]">
                            <h1 className="text-[4vw] font-noto-serif text-red-700">Anniversaire en Famille</h1>
                            <p className="text-[1.4vw] font-poppins text-red-700">Célébrez cette journée spéciale autour d&apos;un moment mémorable :
                            </p>
                            <hr className="my-[1vw]" />
                            <ul className=" list-disc ps-[1vw] text-[1vw] font-poppins">
                                <li >Ambiance chaleureuse et conviviale pour vos retrouvailles.</li>
                                <li>Plats variés et savoureux pour satisfaire toutes les générations.</li>
                                <li>Service attentionné pour que chacun se sente comme chez soi.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-[50%]">
                    <div className="flex justify-center items-center h-[100%]">
                        <div className=" w-[80%]">
                            <h1 className="text-[4vw] font-noto-serif text-red-700">Détente en Groupe</h1>
                            <p className="text-[1.4vw] font-poppins text-red-700">Offrez-vous une pause bien méritée avec vos proches ou collègues :
                            </p>
                            <hr className="my-[1vw]" />
                            <ul className=" list-disc ps-[1vw] text-[1vw] font-poppins">
                                <li >Espaces détente et loisirs pour s’amuser et se relaxer.</li>
                                <li>Activités de groupe pour renforcer les liens.</li>
                                <li>Un cadre apaisant pour échapper au stress quotidien</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-red-100 w-[50%]">
                    <Image
                        height={500}
                        width={500}
                        alt="Events Image"
                        src="/assets/events/pg3/img4.jpeg" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Page3
