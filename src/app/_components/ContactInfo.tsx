import React from "react";
import Image from "next/image";

const ContactInfo: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Overons.jpg')" }}
    >
      {/* Overlay for Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex">
        {/* Left Section with Contact Info */}
        <div className="w-2/3 p-8 text-white flex flex-col justify-center">
          <h2 className="text-5xl font-bold mb-8">Contact</h2>
          <div className="space-y-6 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:Tuingericht@gmail.com" className="underline">
                Tuingericht@gmail.com
              </a>
            </p>
            <p>
              <strong>Adres:</strong> De Skeauwen 6E, 9247BT Ureterp
            </p>
            <p>
              <strong>Openingstijden:</strong>
            </p>
            <p>Man – zat 9:00 – 18:00</p>
            <p>Zondag – Gesloten</p>
            <p>
              <strong>Telefoon Nummer:</strong> 06 12335995
            </p>
            <p>
              <strong>KVK Nummer:</strong> 91304237
            </p>
            <p>
              <strong>BTW Nummer:</strong> NL865611993B01
            </p>
          </div>
        </div>

        {/* Right Section with Map */}
        <div className="w-1/3 p-8 flex items-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJmS6xzARPyEcR8irFHpwbddI"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Maps Location"
            className="w-full"
          >
            <div className="relative w-full h-64">
              <Image
                src="/map.jpg"
                alt="Map Location"
                layout="fill"
                objectFit="cover"
                className="shadow-lg"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
