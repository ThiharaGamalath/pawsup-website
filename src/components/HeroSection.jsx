import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white px-6 bg-gradient-to-b from-black to-transparent">
      {/* Background Overlay with Enhanced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1981111/pexels-photo-1981111.jpeg?auto=compress&cs=tinysrgb&w=1920")' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8 text-shadow-md">
          Your Pet’s Health & Happiness Starts Here
        </h2>
        <p className="text-lg md:text-xl mb-12 opacity-90 sm:max-w-xl mx-auto text-gray-200">
          Our expert services ensure your furry friends are cared for and loved every step of the way. Join us in providing them the best care.
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-blue-300"
        >
          Discover Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
