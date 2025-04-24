import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-24">
          <Link
            to="https://devmatesolutions.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/logo.png"
              alt="DevMate Solutions"
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
