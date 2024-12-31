import Image from "next/image";
import Header from "./components/Header"; // Adjust the import path as necessary

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Main Content Section */}
      <main className="flex flex-col items-center sm:items-start p-8 gap-16 sm:p-20">
        <section className="w-full text-center sm:text-left">
          <h1 className="text-4xl font-bold">Welcome to Stefan's Portfolio</h1>
          <p className="mt-4 text-xl">Explore my projects, CV, blog, and get in touch!</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full p-8 bg-gray-100">
          <h2 className="text-3xl font-semibold">Projects</h2>
          {/* Add details about your projects here */}
        </section>

        {/* CV Section */}
        <section id="cv" className="w-full p-8">
          <h2 className="text-3xl font-semibold mb-6">CV</h2>

          {/* CV Card with Zoom Effect */}
          <div className="relative w-full sm:w-[350px] mx-auto overflow-hidden group">
            {/* Card Wrapper */}
            <div className="relative p-6 bg-gray-100 rounded-lg shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-xl">Stefan Cornea</h3>
              <p className="text-sm">Click to View CV</p>
            </div>

            {/* Hover Effect: Show PDF with Zoom */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <div className="relative w-full h-full">
                <embed
                  src="/cv/Stefan_Cornea_CV.pdf#page=1"
                  width="100%"
                  height="100%"
                  type="application/pdf"
                  className="object-cover rounded-lg overflow-y-auto"
                />
              </div>
            </div>

            {/* Glow Effect and Zoom */}
            <div className="absolute inset-0 bg-white/90 group-hover:bg-none group-hover:ring-4 group-hover:ring-blue-500 group-hover:ring-opacity-50 transition-all duration-300"></div>
          </div>

          {/* Download Button */}
          <a
            href="/cv/Stefan_Cornea_CV.pdf"
            download
            className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-blue-600"
          >
            Download CV
          </a>
        </section>

        {/* Blog Section */}
        <section id="blog" className="w-full p-8 bg-gray-100">
          <h2 className="text-3xl font-semibold">Blog</h2>
          {/* Add blog content or a link to your blog */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full p-8">
          <h2 className="text-3xl font-semibold">Contact</h2>
          {/* Add your contact form or details here */}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="flex gap-6 flex-wrap items-center justify-center p-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
