import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Footer from './Footer'

const SocialMedia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      {/* <header className="w-full py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Connect with Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            Stay updated with my latest projects and thoughts. Follow me on my social media channels:
          </p>
        </div>
      </header> */}

      {/* Section 1 */}
      <section className="w-full py-16 bg-gray-200 mt-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">
            <span className="instagram-gradient-text">Instagram</span>
          </h3>
          <div className="flex justify-center space-x-6">
            {/* Add content for Instagram */}
            <div className="w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-white">
              <p>Instagram Content 1</p>
            </div>
            <div className="w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-white">
              <p>Instagram Content 2</p>
            </div>
            <div className="w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center text-white">
              <p>Instagram Content 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full py-16 bg-gray-300">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">
            <span className="tiktok-gradient-text">TikTok</span>
          </h3>
          <div className="flex justify-center space-x-6">
            {/* Add content for TikTok */}
            <div className="w-32 h-32 bg-black rounded-lg flex justify-center items-center text-white">
              <p>TikTok Content 1</p>
            </div>
            <div className="w-32 h-32 bg-black rounded-lg flex justify-center items-center text-white">
              <p>TikTok Content 2</p>
            </div>
            <div className="w-32 h-32 bg-black rounded-lg flex justify-center items-center text-white">
              <p>TikTok Content 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 bg-gray-400">
        <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">
            <span className="youtube-gradient-text">YouTube</span>
          </h3>
          <div className="flex justify-center space-x-6">
            {/* Add content for YouTube */}
            <div className="w-32 h-32 bg-red-600 rounded-lg flex justify-center items-center text-white">
              <p>YouTube Content 1</p>
            </div>
            <div className="w-32 h-32 bg-red-600 rounded-lg flex justify-center items-center text-white">
              <p>YouTube Content 2</p>
            </div>
            <div className="w-32 h-32 bg-red-600 rounded-lg flex justify-center items-center text-white">
              <p>YouTube Content 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default SocialMedia;

