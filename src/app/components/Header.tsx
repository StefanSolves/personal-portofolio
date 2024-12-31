import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-black text-white py-6 px-8 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Stefan's Portfolio</Link>
        </h1>

        {/* Centered Navigation Links */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-lg">
          <Link href="#projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="#cv" className="hover:text-gray-400">
            CV
          </Link>
          <Link href="#blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram size={24} className="hover:text-gray-400" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={24} className="hover:text-gray-400" />
          </Link>
          <Link href="https://www.tiktok.com" target="_blank" aria-label="TikTok">
            <FaTiktok size={24} className="hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
