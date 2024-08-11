import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-500 text-white py-8 h-40">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            <strong>Locatie:</strong> Ureterp
          </p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            <strong>Telefoonnummer:</strong> 06 12335995
          </p>
        </div>
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Tuingericht@gmail.com" className="text-white">
              Tuingericht@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center md:text-left">
          <p>
            <strong>Site:</strong>{" "}
            <a
              href="https://www.tuingericht.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              www.Tuingericht.nl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
