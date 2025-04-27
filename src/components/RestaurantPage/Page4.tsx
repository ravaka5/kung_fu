import SpecialitiesCard from '../SpecialitiesCard'
import bouffe from "../../assets/img/restaurant/bouffe/bouffe5.jpeg"
import bouffe1 from "../../assets/img/restaurant/bouffe/bouffe6.jpeg"

const Page4 = () => {
  return (
    <section className='w-screen h-screen flex justify-center items-center mt-[4vw]'>
        <div className='flex gap-[10vw]'>
          <SpecialitiesCard
            title='Le Ravitoto'
            content='Rôti de porc aux feuilles de manioc, un véritable classique malgache.'
            price='50 000 MGA'
            imgUrl={bouffe}
          />
          <SpecialitiesCard
            title='Le Hen’omby ritra'
            content='Un ragoût de bœuf malgache aux épices locales, mijoté à la perfection pour des saveurs authentiques.'
            price='80 000 MGA'
            imgUrl={bouffe1}
          />
        </div>
        
    </section>
  )
}

export default Page4
