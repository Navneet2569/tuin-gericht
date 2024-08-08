// components/FormSection.tsx
import React from "react";
import Image from "next/image";

const Offerte: React.FC = () => {
  return (
    <div className="relative w-full h-80 bg-white p-6 overflow-hidden">
      {/* Fixed Image Container */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/Contact.jpg" // Replace with your image path
          alt="Description of the image"
          layout="fill" // Fill the container
          objectFit="cover" // Cover the container, cropping if necessary
          className="absolute inset-0" // Ensure it covers the full area
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="p-6 w-full h-full flex items-center justify-center">
          {/* Add any content you want here */}

          <div className="relative w-full h-80">
            {/* Outer Box with Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/Contact.jpg" // Replace with your image path
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
            </div>

            {/* Inner Box */}
            <div className="relative z-10 p-6 bg-white bg-opacity-50 border border-white m-6">
              {/* Content inside the transparent box */}
              <div className="relative flex items-center justify-center h-full w-full">
                <p className="text-center">Content goes here</p>
              </div>
            </div>
          </div>

          {/* Add any content you want here */}
        </div>
      </div>
    </div>
  );
};

export default Offerte;
