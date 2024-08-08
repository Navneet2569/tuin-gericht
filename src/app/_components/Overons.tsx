// components/OverOns.tsx
import React from "react";
import Image from "next/image";

const OverOns: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-[90%] max-w-full bg-cover bg-center  p-8"
        style={{
          backgroundImage: "url(/Overons.webp)", // Replace with your image URL
        }}
      >
        {/* Add your content here */}
        <div className="flex justify-center items-center bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col items-center p-8 max-w-screen-lg mx-auto">
            <div className="bg-transparent border-none rounded-none">
              <h2 className="text-5xl font-bold mb-4">
                Wat Tuingericht voor u kan betekenen
              </h2>
            </div>
          </div>
        </div>
        {/*Inside component */}
        {/* Inside box */}
        <div className="flex justify-center items-center w-[98%] mx-auto bg-white p-6  shadow-lg">
          {/* Add your content here */}
          <div className="w-full max-w-full">
            <div className="text-xl font-bold mb-5 mt-5">
              <div className="text-green-500">
                <p>Over ons</p>
                <p>
                  <br />
                </p>
              </div>
            </div>
            <p className="text-gray-600 text-xl">
              Welkom bij Tuingericht, waar groen niet zomaar gras is, maar een
              passie die bloeit in de vorm van prachtig onderhouden tuinen. Onze
              missie is helder: jouw buitenruimte omtoveren tot een groen
              paradijs waarvan je elke dag geniet. Laat jouw tuindromen
              werkelijkheid worden met het gepassioneerde team van Tuingericht!
            </p>
            <div className="flex justify-center mt-5 mb-8">
              <div
                className="relative"
                style={{ width: "225px", height: "200px" }}
              >
                <Image
                  src="/Overons.webp"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Inside box */}
      </div>
    </div>
  );
};

export default OverOns;
