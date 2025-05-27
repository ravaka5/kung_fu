"use client";
import Card from "@/app/components/ui/Card";

const Page4 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center font-poppins text-red-700 mb-12">
        <p className="text-[clamp(1.1rem, 2.5vw, 1.375rem)]">Nos offres</p>
        <h1 className="text-[clamp(2.5rem, 6vw, 4.5rem)] font-bold mb-4">Libérez le plaisir !</h1>
        <p className="text-[clamp(1.1rem, 2.5vw, 1.375rem)] text-gray-700">
          Des mariages aux séminaires, nous avons tout ce qu&apos;il
          <br className="hidden sm:block" />
          vous faut !
        </p>
      </div>

      <div className="w-full max-w-7xl flex flex-col gap-10 md:flex-row md:gap-8 justify-center items-center">
        <Card
          title="Mariage"
          subtitle="Célébrations de rêve !"
          content="Épousez-vous avec style et élégance !"
          imgUrl="/assets/homepage/Rectangle 9.png"
        />
        <Card
          title="Événements"
          subtitle="Espace séminaire"
          content="Parfait pour des rassemblements d'entreprise et des ateliers !"
          imgUrl="/assets/homepage/Rectangle 9 (1).png"
        />
        <Card
          title="Loisirs"
          subtitle="Activités amusantes"
          content="Le basket, la piscine et les jeux vous attendent !"
          imgUrl="/assets/homepage/Rectangle 9 (2).png"
        />
      </div>
    </section>
  );
};

export default Page4;
