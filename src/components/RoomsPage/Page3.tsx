import AnimatedCard from "../Card/AnimatedCard"

import img1 from "../../assets/img/room/Page3/vip.jpeg"
import img2 from "../../assets/img/room/Page3/Famille1.jpeg"
import img3 from "../../assets/img/room/Page3/Famille6.jpeg"
import img4 from "../../assets/img/room/Page3/chambre.jpeg"
import img5 from "../../assets/img/room/Page3/Famille62.jpeg"
import img6 from "../../assets/img/room/Page3/chambre2.jpeg"

const Page3 = () => {
  return (
    <section className='h-fit pt-[4vw] w-screen flex flex-col text-center justify-center items-center gap-[2vw]'>
      <div>
        <h1 className="border-b-1 pb-[1vw] font-Poppins font-bold text-[2vw] uppercase">Les offres de chambre que nous proposons</h1>
        <p className="text-[1.2vw] font-Poppins">Nous proposons des offres varies allant des chambres classiques a la suite VIP</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[4vw]">
        <div className="flex flex-row gap-[4vw]">
          <AnimatedCard
            header="Suite VIP"
            price="400 000 MGA"
            description="1 personne"
            imgUrl={img1}
          />
          <AnimatedCard
            header="Chambre classique"
            price="200 000 MGA"
            description="1 personne"
            imgUrl={img4}
          />
        </div>
        <div className="flex gap-[4vw]">
          <AnimatedCard
            header="Chambre familiale"
            price="500 000 MGA"
            description="6 personnes"
            imgUrl={img3}
          />
          <AnimatedCard
            header="Chambre familiale"
            price="400 000 MGA"
            description="4 personnes"
            imgUrl={img2}
          />
        </div>
        <div className="flex gap-[4vw]">
          <AnimatedCard
            header="Chambre pour couples"
            price="300 000 MGA"
            description="2 personnes"
            imgUrl={img6}
          />
          <AnimatedCard
            header="Chambre familiale"
            price="600 000 MGA"
            description="6 personnes"
            imgUrl={img5}
          />
        </div>
      </div>
    </section>
  )
}

export default Page3
