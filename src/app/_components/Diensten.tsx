// components/SubHeading.tsx
import React from "react";
import Card from "./Card";
import { cardDataArray } from "../constants/cardData";

const Diensten: React.FC = () => {
  return (
    <>
      <div className="bg-cover bg-center relative w-full h-auto">
        <div className="flex items-center justify-center mt-20 mb-10 p-6">
          <div className="text-center">
            <p className="text-5xl font-bold">Wij houden uw tuin levendig</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div
          className="w-[90%] max-w-full bg-cover bg-center  p-8"
          style={{
            backgroundImage: "url(/Overons.webp)", // Replace with your image URL
          }}
        >
          <div className="mt-10 mb-10 p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardDataArray.map((data, index) => (
              <Card key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Diensten;
