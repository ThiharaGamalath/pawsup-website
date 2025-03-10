import React from "react";
import { motion } from "framer-motion"; // Animation library

const PetCare = () => {
  // Pet care services data
  const careSteps = [
    {
      title: "Regular Health Checkups",
      image: "https://images.pexels.com/photos/7469231/pexels-photo-7469231.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Our professional veterinarians provide regular checkups to ensure your pet’s health.",
    },
    {
      title: "Nutritious Meal Plans",
      image: "https://images.pexels.com/photos/6568942/pexels-photo-6568942.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "We offer tailored, balanced meal plans to meet your pet’s specific dietary needs.",
    },
    {
      title: "Exercise & Play",
      image: "https://images.pexels.com/photos/19017773/pexels-photo-19017773/free-photo-of-trainer-holding-ring-over-dog.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Engaging activities and exercises keep your pet active, fit, and happy.",
    },
    {
      title: "Grooming & Hygiene",
      image: "https://images.pexels.com/photos/19145877/pexels-photo-19145877/free-photo-of-a-dog-at-a-groomer.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Our grooming services keep pets clean, fresh, and free from infections.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-6">How We Care for Your Pets</h2>
        <p className="text-lg text-gray-700 mb-12">
          We prioritize your pet’s health and happiness with exceptional care services.
        </p>

        {/* Care Steps Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {careSteps.map((step, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300"
            >
              <img src={step.image} alt={step.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition duration-200">{step.title}</h3>
                <p className="text-gray-600 mt-3">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCare;
