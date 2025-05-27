"use client";

import SpecialitiesCard from "../../ui/SpecialitiesCard";

const Page3 = () => {
  return (
    <>
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-red-700 mb-6">
            DE LA HAUTE GASTRONOMIE
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Au Kung Fu Hotel, dégustez des plats raffinés, alliant tradition et modernité,
            pour une expérience de haute gastronomie inoubliable.
          </p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <SpecialitiesCard
            title="Achard chinois"
            content="Achard chinois aux vermicelles, légumes croquants et bœuf sauté, servi avec une sauce soja – une entrée fraîche d’inspiration asiatique."
            price="17 000 MGA"
            imgUrl="/assets/restaurant/dishesImg/plat41.jpeg"
          />
          <SpecialitiesCard
            title="Le Hen’omby ritra"
            content="Un ragoût de bœuf malgache aux épices locales, mijoté à la perfection pour des saveurs authentiques."
            price="15 000 MGA"
            imgUrl="/assets/restaurant/dishesImg/plat43.jpeg"
          />
        </div>
      </section>
    </>
  );
};

export default Page3;
