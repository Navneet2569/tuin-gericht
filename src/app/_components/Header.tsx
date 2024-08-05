import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-8">
      {" "}
      {/* Adjusted background color */}
      <div className="container mx-auto flex justify-between items-center px-6">
        {" "}
        {/* Adjusted padding */}
        {/* Image with next/image for better performance */}
        <div className="w-32 h-auto">
          {" "}
          {/* Adjust the width and height as needed */}
          <Image
            src="/header-image.webp"
            alt="Hero Image"
            width={128} // Width in pixels
            height={64} // Height in pixels
            layout="responsive" // Ensure responsive behavior
            objectFit="contain" // Preserve aspect ratio
          />
        </div>
        <nav className="space-x-6">
          {" "}
          {/* Adjust spacing */}
          <Link
            href="#section-over-ons"
            className="text-gray-700 hover:text-green-700 text-lg font-medium"
          >
            {" "}
            {/* Added font weight */}
            Over ons
          </Link>
          <Link
            href="#section-diensten"
            className="text-gray-700 hover:text-green-700 text-lg font-medium"
          >
            Diensten
          </Link>
          <Link
            href="#section-offerte-aanvraag"
            className="text-gray-700 hover:text-green-700 text-lg font-medium"
          >
            Offerte aanvraag
          </Link>
          <Link
            href="#section-contact"
            className="text-gray-700 hover:text-green-700 text-lg font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
