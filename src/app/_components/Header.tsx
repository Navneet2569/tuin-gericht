import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="bg-white shadow-md"
      style={{ height: "191px" }}
      id="section-RybX3rky09"
    >
      <div
        className="container mx-auto flex justify-between items-center px-6"
        style={{ maxWidth: "1208px", height: "100%" }}
      >
        <div className="relative w-48 h-full max-w-full flex items-center">
          <Image
            src="/header-image.webp"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            className="w-full h-full max-w-full align-middle"
          />
        </div>
        <div className="flex flex-col justify-center items-start flex-nowrap p-2.5 pl-24 w-[78.1%] mb-0">
          <nav className="flex space-x-8 items-center" id="nav-menu-o0Rah-GZSB">
            <Link href="#section-aurvu1kMn3" passHref>
              <span className="text-gray-700 hover:text-green-700 text-lg font-medium cursor-pointer h-full flex items-center px-9 py-1.5 transition-all duration-300 ease-in-out no-underline">
                Over ons
              </span>
            </Link>
            <Link href="#section-5UsjiLS-Fu" passHref>
              <span className="text-gray-700 hover:text-green-700 text-lg font-medium cursor-pointer h-full flex items-center px-9 py-1.5 transition-all duration-300 ease-in-out no-underline">
                Diensten
              </span>
            </Link>
            <Link href="#form-d9x3hNmQBN" passHref>
              <span className="text-gray-700 hover:text-green-700 text-lg font-medium cursor-pointer h-full flex items-center px-9 py-1.5 transition-all duration-300 ease-in-out no-underline">
                Offerte aanvraag
              </span>
            </Link>
            <Link href="#section-7tyIP8U_mx" passHref>
              <span className="text-gray-700 hover:text-green-700 text-lg font-medium cursor-pointer h-full flex items-center px-9 py-1.5 transition-all duration-300 ease-in-out no-underline">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
