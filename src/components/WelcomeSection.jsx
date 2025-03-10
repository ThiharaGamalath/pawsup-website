import React from "react";

const WelcomeSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 p-10 rounded-lg shadow-lg my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-4">
          Welcome to <span className="text-blue-600">PawsUp</span> – Where Every Paw Matters!
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold">PawsUp</span>, we believe that every pet deserves love, care, and happiness. 
          Our dedicated team of professionals ensures your furry friends receive the best attention, comfort, and wellness services. 
          From grooming and daycare to health check-ups and fun activities, we provide a safe and loving environment where pets thrive. 
          Because at PawsUp, it's not just pet care – it's family care. 🐾
        </p>
        <a
          href="#services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default WelcomeSection;
