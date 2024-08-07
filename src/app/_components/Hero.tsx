// components/Hero.tsx
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524247108137-732e0f642303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "brightness(1.2)", // Increases brightness
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>{" "}
        {/* Reduced opacity */}
      </div>

      {/* Inner Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-start justify-center h-full">
        {/* Heading */}
        <div className="text-left mb-1">
          {" "}
          {/* Adjusted margin-bottom */}
          <p className="text-lg font-normal text-white mb-1">
            {" "}
            {/* Adjusted margin-bottom */}
            Wij staan voor kwaliteit
          </p>
        </div>

        {/* Main Text */}
        <div className="text-left mb-8">
          <p className="text-4xl font-extrabold text-white leading-tight">
            Wij zijn Tuingericht, een team van groen liefhebbers met een passie
            voor het creëren van prachtig onderhouden tuinen.
          </p>
          <p className="text-4xl font-extrabold text-white leading-tight">
            Onze missie is simpel: jouw buitenruimte omtoveren tot een groen
            paradijs waarvan je elke dag geniet.
          </p>
        </div>

        {/* Button */}
        <Link href="#sub-heading-T1wdcsXk_7" passHref>
          <div className="bg-green-400 text-2xl hover:bg-green-300 text-white font-semibold py-4 px-8 rounded-lg text-center cursor-pointer">
            Gratis offerte aanvragen
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
