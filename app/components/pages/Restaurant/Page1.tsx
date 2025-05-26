import Image from 'next/image'

const Page1 = () => {
  return (
    <section className="w-screen h-fit mt-[4vw] flex flex-col  align-center justify-center ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-red-700 mb-4 font-noto-serif font-bold">UN MOMENT INOUBLIABLE</h2>
          <p className="text-xl font-poppins text-gray-600 mb-2">
            Que ce soit en famille ou en tête-à-tête, profitez d&apos;une expérience culinaire exceptionnelle
          </p>
          <hr className="text-gray-600 border-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              height={400}
              width={600}
              src="/assets/restaurant/family.jpeg"
              alt="Family dining"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Repas en Famille</h3>
                <p>Partagez des moments précieux autour d&apos;une table gourmande</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl group">
            <Image
              height={400}
              width={600}
              src="/assets/restaurant/couple.jpeg"
              alt="Romantic dinner"
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Dîner Romantique</h3>
                <p>Une ambiance intime pour vos moments à deux</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page1
