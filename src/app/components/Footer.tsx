// components/Footer.js
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#003B49] text-white py-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Copyright Text Centered */}
        <p className="text-sm mx-auto">&copy; {new Date().getFullYear()} Stefan Solves. All rights reserved.</p>

        {/* Social Media Icons on the Right */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/stefan.solves/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/stefan-c-791b8a17b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="https://www.tiktok.com/@stefan.solves" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-xl" />
          </a>
          <a href="https://www.github.com/StefanCDev" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
