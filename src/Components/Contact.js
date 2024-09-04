import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent mt-7 mb-8">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        Have any questions or want to reach out? Feel free to send us a message, and we’ll get back to you as soon as possible.
      </p>
      <form className="mt-8 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg h-32"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105 text-center"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
