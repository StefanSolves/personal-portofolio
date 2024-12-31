// components/Footer.js
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center sm:flex-row justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} Stefan Solves. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
