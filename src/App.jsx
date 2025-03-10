import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MoreInfo from "./components/MoreInfo";
import PetCare from "./components/PetCare"; 
import WelcomeSection from "./components/WelcomeSection";

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HeroSection />
            <WelcomeSection />
            <Services />
            <PetCare />
            <Footer />
          </>
        } />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/more-info" element={<MoreInfo />} />

      </Routes>
    </Router>
  );
}

export default App;
