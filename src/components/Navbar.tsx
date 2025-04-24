import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="https://devmatesolutions.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/logo1.png"
                  alt="DevMate Solutions"
                  className="h-16 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
