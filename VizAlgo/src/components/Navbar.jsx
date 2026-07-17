import { Link } from "react-router-dom";
import { FaHome, FaCode } from "react-icons/fa"; // Importing icons for Home and Algorithm
import logoImg from "../../public/Logo.png"; // Import the logo image

export default function Navbar() {
  return (
    <header className="w-full min-w-[400px] bg-[#0D7C66] p-2 sm:p-4 shadow-md">
      <div className="container mx-auto flex justify-around items-center px-4">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-extrabold flex items-center text-white hover:text-[#D7C3F1] transition-colors duration-300"
        >
          <div className="w-[240px] h-[80px] sm:w-[280px] md:w-[320px] lg:w-[360px] sm:h-[90px] md:h-[100px] relative">
            <img
              src={logoImg}
              alt="Logo"
              className="w-full h-full object-contain absolute top-0 left-0"
            />
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="ml-4">
          <ul className="flex space-x-3 sm:space-x-6 md:space-x-8 text-base sm:text-lg">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 sm:gap-4 text-white font-medium py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:bg-white hover:text-[#0D7C66] transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaHome size={18} className="sm:text-[22px]" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>

            <li>
              <Link
                to="/algorithm"
                className="flex items-center gap-2 sm:gap-4 text-white font-medium py-1 sm:py-2 px-2 sm:px-4 rounded-full hover:bg-white hover:text-[#0D7C66] transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <FaCode size={18} className="sm:text-[22px]" />
                <span className="hidden sm:inline">Algorithm</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
