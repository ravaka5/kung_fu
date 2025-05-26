import SpecialitiesCard from '../../ui/SpecialitiesCard'

const Page3 = () => {
  return (
    <>
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-red-700 mb-6">DE LA HAUTE GASTRONOMIE</h2>
          <p className="text-xl text-gray-600 mb-12">
            Au Kung Fu Hotel, dégustez des plats raffinés, alliant tradition et modernité,
            pour une expérience de haute gastronomie inoubliable.
          </p>
        </div>
      </section>
      <section className='w-screen h-screen flex justify-center items-center mt-[4vw]'>
        <div className='flex gap-[10vw]'>
          <SpecialitiesCard
            title='Le Ravitoto'
            content='Rôti de porc aux feuilles de manioc, un véritable classique malgache.'
            price='50 000 MGA'
            imgUrl="/assets/restaurant/bouffe/bouffe5.jpeg"
          />
          <SpecialitiesCard
            title='Le Hen’omby ritra'
            content='Un ragoût de bœuf malgache aux épices locales, mijoté à la perfection pour des saveurs authentiques.'
            price='80 000 MGA'
            imgUrl="/assets/restaurant/bouffe/bouffe6.jpeg"
          />
        </div>

      </section>
    </>
  )
}

export default Page3
