import React from "react";

const MoreInfo = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-80 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/4588011/pexels-photo-4588011.jpeg?auto=compress&cs=tinysrgb&w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-5xl font-extrabold">Pet Care & Wellness</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto py-12 px-6">
        <p className="text-lg text-gray-700 text-center mb-8">
          Ensuring your pet’s well-being requires a mix of proper nutrition, hygiene,
          training, and healthcare. Explore our expert tips to keep your furry friend
          happy and healthy!
        </p>

        {/* Grid Layout for Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Nutrition */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🥕 Nutrition & Diet
            </h3>
            <p className="text-gray-600">
              A balanced diet is key to a pet’s health. Provide species-appropriate
              food, ensure proper hydration, and avoid harmful human foods.
            </p>
          </div>

          {/* Card 2: Grooming */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🛁 Grooming & Hygiene
            </h3>
            <p className="text-gray-600">
              Regular grooming keeps your pet clean and prevents infections. Brush
              their fur, clean their paws, and schedule vet-approved baths.
            </p>
          </div>

          {/* Card 3: Training */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🐶 Training & Behavior
            </h3>
            <p className="text-gray-600">
              Positive reinforcement training builds a strong bond with your pet.
              Teach basic commands, address behavioral issues, and provide mental
              stimulation.
            </p>
          </div>

          {/* Card 4: Healthcare */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              🏥 Healthcare & Vet Visits
            </h3>
            <p className="text-gray-600">
              Regular vet check-ups, vaccinations, and parasite prevention are
              essential for a long, healthy life.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Contact Us for Expert Advice
          </a>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
