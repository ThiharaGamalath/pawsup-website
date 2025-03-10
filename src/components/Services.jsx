import React from "react";
import { FaPaw, FaStethoscope, FaHome } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <FaPaw />, title: "Pet Grooming", desc: "Professional grooming for your pets to keep them clean and happy." },
            { icon: <FaStethoscope />, title: "Veterinary Care", desc: "Comprehensive medical services to ensure your pet’s well-being." },
            { icon: <FaHome />, title: "Pet Sitting", desc: "Trustworthy pet sitting services when you're away from home." },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg transition transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <div className="text-blue-600 text-6xl mb-6">{service.icon}</div>
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
