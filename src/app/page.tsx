import Image from "next/image";
import Header from "./components/Header"; // Correct import for Header
import Footer from "./components/Footer"; // Correct import for Footer
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Blog from "./components/Blog";
import SocialMedia from "./components/SocialMedia";
import Link from 'next/link';
import AudioPlayer from "./components/ui/AudioPlayer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Branding and Photo Section */}
      <section className="w-full flex flex-col items-center py-16 mt-20 bg-white pt-40"> {/* Added mt-24 to move it down */}
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
          <h1 className="text-4xl font-bold mb-2 text-black">Stefan Cornea</h1>
          <p className="text-xl text-gray-700">Welcome to my portfolio</p>
          <p className="text-lg mt-4 text-black">Software engineer sharing insights in building innovative, user-friendly applications, merging creativity and technology to bring ideas to life.</p>
          {/* <AudioPlayer />  */}
        </div>
      </section>

      {/* Divider Line */}
      {/* <div className="w-full custom-divider"></div> */}
      


      {/* Recent Work Section */}
      <section className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black">Recent Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example of a work item */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          {/* Add more work items here */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2 text-gray-600">Description of your recent work here.</p>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer /> {/* Make sure it's correctly placed at the bottom */}
      <AudioPlayer />
    </div>
  );
}
