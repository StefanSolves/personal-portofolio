import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Header from "./components/Header"; // Adjust the import path as necessary

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Branding and Photo Section */}
      <section className="w-full flex flex-col items-center py-16 mt-24"> {/* Added mt-24 to move it down */}
  <div className="w-full max-w-4xl text-center sm:text-left flex flex-col items-center sm:items-start">
    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6">
      <Image
        src="/img/115508407.jpeg" // Corrected image path
        alt="Stefan's Photo"
        width={160}
        height={160}
        className="object-cover"
      />
    </div>
    <h1 className="text-4xl font-bold mb-2">Stefan Cornea</h1>
    <p className="text-xl text-gray-700">Welcome to my portfolio</p>
    <p className="text-lg mt-4">I specialize in web development, cybersecurity, and more.</p>
  </div>
</section>

      {/* Divider Line */}
      <div className="w-full border-t border-gray-300 my-16"></div>

      {/* Recent Work Section */}
      <section className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6">Recent Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example of a work item */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          {/* Add more work items here */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
