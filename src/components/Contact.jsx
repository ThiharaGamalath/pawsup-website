import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      <div className="max-w-lg text-center mb-12">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions? Reach out to us and we’ll get back to you shortly!
        </p>
      </div>
      
      {/* Contact Form */}
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6">
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
            placeholder="Your Name" 
            required 
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
            placeholder="Your Email" 
            required 
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300" 
            placeholder="Your Message" 
            rows="4" 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
