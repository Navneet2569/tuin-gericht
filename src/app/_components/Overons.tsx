// components/OverOns.tsx
import React from "react";

const OverOns: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/path/to/your/background-image.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 bg-white bg-opacity-95 p-8 shadow-lg max-w-4xl w-full mx-4">
        {/* Sub-Heading */}
        <div className="text-left mb-2">
          <p className="text-2xl font-bold text-green-700">
            Wat Tuingericht voor u kan betekenen
          </p>
        </div>

        {/* Heading */}
        <div className="text-left mb-4">
          <p className="text-lg text-gray-800">
            Welkom bij Tuingericht, waar groen niet zomaar gras is, maar een
            passie die bloeit in de vorm van prachtig onderhouden tuinen. Onze
            missie is helder: jouw buitenruimte omtoveren tot een groen paradijs
            waarvan je elke dag geniet. Laat jouw tuindromen werkelijkheid
            worden met het gepassioneerde team van Tuingericht!
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-start">
          <img
            src="/path/to/your/image.jpg"
            alt="Tuingericht team"
            className="w-56 h-56 object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OverOns;
