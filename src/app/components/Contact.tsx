import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
    <section id="contact" className="w-full bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out with any questions or inquiries. I'm happy to connect!
        </p>

        <div className="flex justify-center space-x-8">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl text-gray-800 mb-2" />
            <p className="text-lg text-gray-600">Email</p>
            <p className="text-gray-800">your.email@example.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-4xl text-gray-800 mb-2" />
            <p className="text-lg text-gray-600">Phone</p>
            <p className="text-gray-800">+123 456 7890</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl text-gray-800 mb-2" />
            <p className="text-lg text-gray-600">Location</p>
            <p className="text-gray-800">Your City, Country</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
  );
};

export default Contact;
