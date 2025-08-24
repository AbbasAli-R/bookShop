
import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-stone-900 shadow-md">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-10 gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-stone-400 text-center md:text-left">
            Subscribe to our Newsletter
          </h2>
          <form className="w-full md:w-1/2 lg:w-1/3 relative">
            <input
              type="text"
              placeholder="Enter your Email"
              className="py-3 px-3 rounded-full shadow-md w-full text-white border border-stone-300 bg-transparent placeholder-stone-400 text-sm sm:text-base"
            />
            <button className="bg-gray-200 py-2 sm:py-3 px-4 rounded-full absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-sm sm:text-base">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="text-white py-10 border-t border-stone-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Info */}
            <div>
              <img src={logo} alt="Logo" className="my-4 w-40 sm:w-48 md:w-56" />
              <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
                Your one-stop shop for PC parts & accessories.
                Quality you can trust, prices you’ll love.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 mt-5 flex-wrap">
                <Facebook size={32} className="text-stone-400 rounded-md p-1.5 cursor-pointer" />
                <Twitter size={32} className="text-stone-400 rounded-md p-1.5 cursor-pointer" />
                <Youtube size={32} className="text-stone-400 rounded-md p-1.5 cursor-pointer" />
                <Instagram size={32} className="text-stone-400 rounded-md p-1.5 cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold my-4">Quick Links</h2>
              <ul className="space-y-2 text-stone-300 text-sm sm:text-base">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Categories</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">Contact</Link></li>
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold my-4">Customer Support</h2>
              <ul className="space-y-2 text-stone-300 text-sm sm:text-base">
                <li><Link to="/">FAQs</Link></li>
                <li><Link to="/">Shipping & Returns</Link></li>
                <li><Link to="/">Warranty Policy</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold my-4">Get in Touch</h2>
              <p className="text-stone-300 text-sm sm:text-base">123 Street, ABC, India</p>
              <p className="text-stone-300 text-sm sm:text-base">+91 98765 43210</p>
              <p className="text-stone-300 text-sm sm:text-base">support@Readify.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto text-center py-4 text-stone-400 border-t border-stone-700 text-sm sm:text-base">
        <p>Copyright &copy; 2025 Readify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
