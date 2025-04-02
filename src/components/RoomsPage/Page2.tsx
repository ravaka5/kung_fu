import img1 from "../../assets/img/room/Page2/Rectangle 41.png"
import img2 from "../../assets/img/room/Page2/Rectangle 42.png"
import img3 from "../../assets/img/room/Page2/Rectangle 43.png"

const Page2 = () => {
  return (
    <section className='h-screen w-screen flex flex-col text-center justify-center items-center gap-[2vw]'>
        <div className="text-red-700">
            <h1 className="text-[3vw] font-bold">
            Equipements de Qualité
            </h1>
            <p className="text-[1vw] py-[1vw]">
            Tout ce dont vous avez besoin pour un sejour agreable
            </p>
        </div>
        <div className="gap-[2vw] flex ">
            <div className="flex flex-col w-[22vw]">
                <img src={img1}/>
                <h1 className="text-[1.2vw] font-bold">
                    Piscine
                </h1>
                <p>
                Profitez de notre piscine pour un moment de détente et de fraîcheur.
                Idéale pour nager ou se relaxer en toute tranquillité.
                </p>
            </div>
            <div className="flex flex-col w-[22vw]">
                <img src={img3}/>
                <h1 className="text-[1.2vw] font-bold">
                Salle de Jeu
                </h1>
                <p>
                Amusez-vous dans notre salle de jeux, équipée pour tous les âges. 
                Un espace idéal pour se divertir et partager de bons moments.
                </p>
            </div>
            <div className="flex flex-col w-[22vw]">
                <img src={img2}/>
                <h1 className="text-[1.2vw] font-bold">
                Télévision à Écran Plat
                </h1>
                <p>
                Détendez-vous avec notre télévision à écran plat dans chaque chambre, 
                offrant un large choix de chaînes nationales et internationales.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Page2
