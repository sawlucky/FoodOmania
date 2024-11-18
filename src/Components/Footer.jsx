import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 brightness-60 opacity-100 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>123 Food Street, Food City</p>
          <p>Email: info@foodapp.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-orange-400">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" className="hover:text-orange-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        {/* Important Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <a href="/about" className="hover:text-orange-400">
            About Us
          </a>
          <a href="/privacy" className="hover:text-orange-400">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-orange-400">
            Terms & Conditions
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>© {new Date().getFullYear()} FoodApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
