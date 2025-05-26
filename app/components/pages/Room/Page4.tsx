"use client"
import { useEffect, useRef } from 'react';
import SectionTitle from '../../ui/SectionTitle';
import Image from 'next/image';

const Page4 = () => {
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
      className="relative min-h-screen w-full py-16 px-4 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-[4vw] overflow-hidden"
    >
      {/* Red background section */}
      <div className="absolute inset-x-0 h-[30vh] bg-red-500 z-0 transform -skew-y-2 top-[60%] md:top-[40%]" />

      {/* Left column - Image */}
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 z-10 w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-[500px]">
          <Image
            height={600}
            width={800}
            src="/assets/room/Page4/img1.jpeg"
            alt="Room service"
            className="h-[60vw] md:h-[38vw] w-full rounded-2xl object-cover object-center shadow-xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </div>

      {/* Right column - Content */}
      <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 z-10 w-full md:w-1/2 max-w-2xl text-center md:text-left px-4">
        <SectionTitle
          title="Un room service impeccable"
          light={false}
          centered={true}
        />

        <div className="relative mt-6 mb-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-[1.2vw] text-white font-medium leading-relaxed">
            Profitez d&apos;un room service irréprochable, alliant rapidité et élégance. <br />
            Savourez des plats exquis, servis avec soin dans le confort de votre chambre. <br />
            Un service dédié à votre satisfaction et à votre confort absolu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page4;
