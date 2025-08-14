import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaInstagram, FaLinkedin, FaTiktok, FaGithub } from "react-icons/fa"; // Social media icons

export default function Header() {
  return (
<header className="bg-[#003B49] text-white py-6 px-8 shadow-md fixed w-full z-50">      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/Stefan Solves.svg" // Image path
              alt="Stefan Solves Logo"
              width={160} // Adjust width as needed
              height={40} // Adjust height as needed
              className="object-contain" // Ensures the logo is contained within the size
            />
          </Link>
        </h1>

        {/* Centered Navigation Links */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-lg">
          <Link href="/socialmedia" className="hover:text-gray-400">
            Social Media
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/journey" className="hover:text-gray-400">
            Journey
          </Link>
          <Link href="/blog" className="hover:text-gray-400">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        {/* Social Media Icons */}
<div className="flex space-x-4">
  <a
    href="https://www.instagram.com/stefan.solves/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="transition-all duration-300 transform hover:scale-150 hover:opacity-80"
  >
    <FaInstagram size={24} />
  </a>
  <a
    href="https://www.linkedin.com/in/stefansolves/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="transition-all duration-300 transform hover:scale-150 hover:opacity-80"
  >
    <FaLinkedin size={24} />
  </a>
  <a
    href="https://www.tiktok.com/@stefan.solves"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
    className="transition-all duration-300 transform hover:scale-150 hover:opacity-80"
  >
    <FaTiktok size={24} />
  </a>
  <a
    href="https://github.com/StefanSolves"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="transition-all duration-300 transform hover:scale-150 hover:opacity-80"
  >
    <FaGithub size={24} />
  </a>
</div>
      </div>
    </header>
  );
}
