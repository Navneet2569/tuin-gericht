// components/Hero.tsx
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-black border-2 border-black py-[250px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524247108137-732e0f642303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')",
          opacity: 0.5,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Inner Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-start justify-center h-full c-wrapper">
        {/* Heading */}
        <div className="text-left mb-4 c-sub-heading">
          <p className="text-xl font-bold text-white mb-2">
            Wij staan voor kwaliteit
          </p>
        </div>

        {/* Main Text */}
        <div className="text-left mb-8 c-sub-heading">
          <p className="text-2xl font-extrabold text-white leading-tight">
            Wij zijn Tuingericht, een team van groen liefhebbers met een passie
            voor het creëren van prachtig onderhouden tuinen.
          </p>
          <p className="text-2xl font-extrabold text-white leading-tight">
            Onze missie is simpel: jouw buitenruimte omtoveren tot een groen
            paradijs waarvan je elke dag geniet.
          </p>
        </div>

        {/* Button */}
        <Link href="#sub-heading-T1wdcsXk_7" passHref>
          <div className="bg-green-800 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg text-center cursor-pointer">
            Gratis offerte aanvragen
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
