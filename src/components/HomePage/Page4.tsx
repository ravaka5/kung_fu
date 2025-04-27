import Card from '../Card'
import img1 from "../../assets/img/homepage/Rectangle 9.png"
import img2 from "../../assets/img/homepage/Rectangle 9 (1).png"
import img3 from "../../assets/img/homepage/Rectangle 9 (2).png"
const Page4 = () => {
  return (
    <section className='w-screen h-screen flex-row justify-center items-center'>
        <div className='text-center font-poppins py-10 text-red-700'>
        <p className='text-[22px]'>Nos offres</p>
        <h1 className='text-[72px]'>Liberez le plaisir !</h1>
        <p className='text-[22px]'>Des mariages aux seminaires, nous avons tout ce qu'il
            <br/>
            vous faut!
        </p>
        </div>
        <div className='flex justify-around px-40'>
        <Card
        title='mariage'
        subtitle='Célébrations de rêve !'
        content='Épousez-vous avec style et élégance !'
        imgUrl={img1}
        />
        <Card
        title='Evenements'
        subtitle='Espace seminaire'
        content="Parfait pour des rassemblements d'entreprise et des ateliers !"
        imgUrl={img2}
        />
        <Card
        title='Loisirs'
        subtitle='Activités amusantes'
        content='Le basket, la piscine et les jeux vous attendent !'
        imgUrl={img3}
        />
        </div>
    
  </section>
  )
}

export default Page4
