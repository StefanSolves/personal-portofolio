const Journey = () => {
    return (
      <section id="journey" className="w-full py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">My Journey</h2>
          <p className="text-lg text-gray-700 mb-8">
            Here’s a glimpse of my career journey and the experiences that shaped my skills as a developer, including my educational background, key milestones, and personal growth.
          </p>
  
          <div className="space-y-8">
            {/* Journey Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Education</h3>
              <p className="mt-2 text-gray-600">BSc in Business Management - University of Roehampton (2022)</p>
              <p className="mt-2 text-gray-600">Focus on programming, management, and leadership skills.</p>
            </div>
            
            {/* Journey Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">01Founders Coding School</h3>
              <p className="mt-2 text-gray-600">Software Engineer Learner - 01Founders (since 2022)</p>
              <p className="mt-2 text-gray-600">Learning full-stack web development with a focus on modern technologies and problem-solving.</p>
            </div>
  
            {/* Journey Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Professional Experience</h3>
              <p className="mt-2 text-gray-600">Head of Operations - 01Founders (since June 2023)</p>
              <p className="mt-2 text-gray-600">Led operational processes to drive business growth, while mentoring the next generation of software engineers.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Journey;
  