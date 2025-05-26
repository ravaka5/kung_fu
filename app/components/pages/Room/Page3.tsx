"use client"
import { useEffect, useRef } from 'react';
import SectionTitle from '../../ui/SectionTitle';
import AnimatedCard from "../../ui/AnimatedCard";

const Page3 = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));

    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen py-20 px-4 flex flex-col text-center justify-center items-center"
    >
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 mb-16 max-w-4xl">
        <SectionTitle
          title="Les offres de chambre que nous proposons"
          subtitle="Nous proposons des offres variées allant des chambres classiques à la suite VIP"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-16 md:gap-[4vw]">
        {/* First row */}
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[4vw]">
          <AnimatedCard
            header="Suite VIP"
            price="400 000 MGA"
            description="1 personne"
            imgUrl="/assets/room/Page3/vip.jpeg"
          />
          <AnimatedCard
            header="Chambre classique"
            price="200 000 MGA"
            description="1 personne"
            imgUrl="/assets/room/Page3/chambre.jpeg"
          />
        </div>

        {/* Second row */}
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[4vw]">
          <AnimatedCard
            header="Chambre familiale"
            price="500 000 MGA"
            description="6 personnes"
            imgUrl="/assets/room/Page3/Famille6.jpeg"
          />
          <AnimatedCard
            header="Chambre familiale"
            price="400 000 MGA"
            description="4 personnes"
            imgUrl="/assets/room/Page3/Famille1.jpeg"
          />
        </div>

        {/* Third row */}
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-[4vw]">
          <AnimatedCard
            header="Chambre pour couples"
            price="300 000 MGA"
            description="2 personnes"
            imgUrl="/assets/room/Page3/chambre2.jpeg"
          />
          <AnimatedCard
            header="Chambre familiale"
            price="600 000 MGA"
            description="6 personnes"
            imgUrl="/assets/room/Page3/Famille62.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Page3;
