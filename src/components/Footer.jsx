import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3">PawsUp Pet Care</h2>
          <p className="text-gray-400 text-sm leading-6">
            Dedicated to providing the best care for your pets. From grooming to health services, 
            we treat every pet like family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {[
              { icon: faFacebookF, link: "https://facebook.com", label: "Facebook" },
              { icon: faTwitter, link: "https://twitter.com", label: "Twitter" },
              { icon: faInstagram, link: "https://instagram.com", label: "Instagram" },
              { icon: faLinkedinIn, link: "https://linkedin.com", label: "LinkedIn" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition duration-300"
              >
                <FontAwesomeIcon icon={item.icon} className="text-white text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Our Location</h3>
          <iframe
            title="Hirana Panadura Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63392.0939024072!2d79.9112827!3d6.7134446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae249a3f4878651%3A0x3c258e2754e97da5!2sHirana%2C%20Panadura!5e0!3m2!1sen!2slk!4v1709913761582!5m2!1sen!2slk"
            width="100%"
            height="200"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-gray-400 text-sm">
        <p>&copy; 2025 PawsUp Pet Care. All Rights Reserved.</p>
        <nav className="mt-2">
          <a href="#privacy" className="hover:text-white transition mx-2">Privacy Policy</a>|
          <a href="#terms" className="hover:text-white transition mx-2">Terms of Service</a>|
          <a href="#support" className="hover:text-white transition mx-2">Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
