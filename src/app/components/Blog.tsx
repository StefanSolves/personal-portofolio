import Footer from "./Footer"; // Import the Footer component

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Blog Section */}
      <section id="blog" className="w-full py-16 pt-[96px] flex-grow">
        {/* Space for future text with a horizontal line */}
        <div className="mb-12 text-center py-12 bg-gray-50">
          <p className="text-lg text-gray-700 mb-6">
            {/* Placeholder text for future content */}
            This is a place where additional information or description can be added later.
          </p>
          <hr className="border-t-2 border-gray-300 w-1/2 mx-auto" />
        </div>

        {/* Flex container for layout */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
          {/* Articles Section */}
          <div className="flex-1 space-y-8 pr-8">
            {/* Blog Post Item 1 */}
            <div
              id="article1"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">The Future of Web Development</h3>
              <p className="mt-2 text-gray-600">
                An in-depth look at the latest trends and emerging technologies in web
                development.
              </p>
              <a href="#article1" className="text-blue-500 mt-4 inline-block">
                Read more
              </a>
            </div>

            {/* Blog Post Item 2 */}
            <div
              id="article2"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">
                Cybersecurity Best Practices for 2024
              </h3>
              <p className="mt-2 text-gray-600">
                Learn about the most effective security measures to protect your websites
                and applications.
              </p>
              <a href="#article2" className="text-blue-500 mt-4 inline-block">
                Read more
              </a>
            </div>

            {/* Blog Post Item 3 */}
            <div
              id="article3"
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold">
                Introduction to Cloud Technologies
              </h3>
              <p className="mt-2 text-gray-600">
                A beginner's guide to understanding cloud computing and how it’s
                transforming businesses.
              </p>
              <a href="#article3" className="text-blue-500 mt-4 inline-block">
                Read more
              </a>
            </div>
          </div>

          {/* Sidebar for Article Links */}
          <div className="w-1/4 ml-8">
            <h3 className="text-2xl font-semibold mb-4">Jump to Article</h3>
            <ul className="space-y-4">
              <li>
                <a href="#article1" className="text-blue-500">
                  Article 1: The Future of Web Development
                </a>
              </li>
              <li>
                <a href="#article2" className="text-blue-500">
                  Article 2: Cybersecurity Best Practices for 2024
                </a>
              </li>
              <li>
                <a href="#article3" className="text-blue-500">
                  Article 3: Introduction to Cloud Technologies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Blog;
