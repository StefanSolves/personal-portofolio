const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section id="contact" className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-black">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            I&apos;d love to hear from you! Fill out the form below, and I&apos;ll get back to you as soon as possible.
          </p>

          <form className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block text-left text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-left text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                placeholder="Type your message here..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
