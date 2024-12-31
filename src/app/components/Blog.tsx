const Blog = () => {
    return (
      <section id="blog" className="w-full py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">My Blog</h2>
          <p className="text-lg text-gray-700 mb-8">
            I share my thoughts, experiences, and knowledge on topics related to web development, cybersecurity, cloud technologies, and more. Feel free to explore my articles.
          </p>
  
          <div className="space-y-8">
            {/* Blog Post Item 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold">The Future of Web Development</h3>
              <p className="mt-2 text-gray-600">An in-depth look at the latest trends and emerging technologies in web development.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
            
            {/* Blog Post Item 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold">Cybersecurity Best Practices for 2024</h3>
              <p className="mt-2 text-gray-600">Learn about the most effective security measures to protect your websites and applications.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
  
            {/* Blog Post Item 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold">Introduction to Cloud Technologies</h3>
              <p className="mt-2 text-gray-600">A beginner's guide to understanding cloud computing and how it’s transforming businesses.</p>
              <a href="#" className="text-blue-500 mt-4 inline-block">Read more</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Blog;
  