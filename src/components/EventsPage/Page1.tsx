import img1 from "../../assets/img/eventspg/1.png"
import img2 from "../../assets/img/eventspg/2.png"
import img3 from "../../assets/img/eventspg/3.png"

const Page1 = () => {
  return (
    <section className='h-screen w-screen flex flex-col text-center justify-center items-center gap-[2vw]'>
        <div className="pt-[8vw]">
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
                <img src={img1}/>
                <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                Mariages de reve                </h1>
                <p className="text-[1vw]">
                Nous vous accompagnons dans l'organisation de votre mariage, en créant une ambiance romantique et unique qui correspond à vos souhaits.                </p>
            </div>
            <div className="flex flex-col w-[18vw] hover:scale-105">
                <img src={img3}/>
                <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                Seminaires et conferences                </h1>
                <p className="text-[1vw]">
                Nos espaces sont parfaitement adaptés pour accueillir des séminaires, offrant un cadre professionnel et des équipements modernes pour assurer le succès de votre événement.
                </p>
            </div>
            <div className="flex flex-col w-[18vw] hover:scale-105">
                <img src={img2}/>
                <h1 className="text-[1.4vw] py-[0.4vw] font-bold">
                Evenements sur mesure                </h1>
                <p className="text-[1vw]">
                Que ce soit un anniversaire, une réunion de famille ou un événement d'entreprise, nous personnalisons chaque détail pour répondre à vos besoins spécifiques.
                </p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Page1
