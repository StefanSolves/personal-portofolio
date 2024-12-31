import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section id="social-media" className="w-full py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Stay updated with my latest projects and thoughts. Follow me on my social media channels:
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-3xl text-gray-800 hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-3xl text-gray-800 hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;

