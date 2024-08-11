import React from "react";
import Image from "next/image";

const Klanten: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-app-background">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/Overons.webp)", // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 w-[90%] max-w-6xl h-auto flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <p className="text-white text-3xl font-semibold mb-6">
            Klanten Reviews
          </p>
          <p className="text-4xl font-bold text-white mb-8">
            Ontdek wat onze klanten te zeggen hebben over hun ervaringen met
            onze diensten en waarom ze voor ons kiezen.
          </p>
        </div>
        {/* New Component Start */}
        <div className="w-full bg-white p-6 shadow-lg text-center">
          <div className="relative w-[120px] h-[120px] mx-auto mb-4">
            <Image
              src="/raking.png" // Replace with your image URL
              alt="Review"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-gray-700">
            Tuingericht heeft mijn verwachtingen overtroffen! Het team was
            professioneel, efficiënt en vriendelijk. Ze luisterden naar mijn
            wensen, werkten nauw met me samen en leverden een prachtige tuin op
            die zowel esthetisch als functioneel is. Van de punctualiteit tot
            het vakmanschap, alles was top. Ik ben enorm tevreden met het
            resultaat en beveel Tuingericht van harte aan!
          </p>
        </div>
        {/* New Component End */}
      </div>
    </div>
  );
};

export default Klanten;
