// components/Card.tsx
import Image from "next/image";
import React from "react";
import { CardData } from "../lib/types";

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-white shadow-md border   p-4 flex flex-col items-center max-w-xs mx-auto">
      <div className="w-[75px] h-auto mb-4">
        <Image
          src={data.imageSrc}
          alt={data.title}
          layout="intrinsic"
          width={75}
          height={75}
          className="object-contain"
        />
      </div>
      <div className="text-center mb-2">
        <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-8">
          {data.title}
        </h1>
      </div>
      <div className="text-center">
        <p className="text-gray-700 text-2xl mt-0 mb-8">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;
