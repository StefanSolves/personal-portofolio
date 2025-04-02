const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Add padding to avoid overlap with header */}
      <section id="projects" className="w-full py-16 pt-[96px]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-black">My Projects</h2>
          <p className="text-lg text-gray-700 mb-8">
            Here are some of the projects I&apos;ve worked on. Each project reflects my skills in web development,
            problem-solving, and creativity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-black">Ascii-art-web</h3>
              <p className="mt-2 text-gray-600">A brief description of the project.</p>
              <a href="https://github.com/StefanCDev/ascii-art-web" className="mt-4 text-blue-600">
                View Details
              </a>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold text-black">Make-your-game aka BrickBreaker</h3>
              <p className="mt-2 text-gray-600">A brief description of the project.</p>
              <a href="https://github.com/StefanCDev/make-your-game" className="mt-4 text-blue-600">
                View Details
              </a>
            </div>

            {/* Placeholder for future projects */}
            {[...Array(7)].map((_, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-black">Project Title {index + 3}</h3>
                <p className="mt-2 text-gray-600">A brief description of the project.</p>
                <a href="#" className="mt-4 text-blue-600">
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
