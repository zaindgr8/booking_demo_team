import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-400 text-sm">
            Copyright & Design By @DEVMATE Solutions - 2025
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.devmatesolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Website
            </a>
            <a
              href="https://www.instagram.com/devmatesolutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Instagram
            </a>
            <a
              href="mailto:contact@devmatesolutions.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
