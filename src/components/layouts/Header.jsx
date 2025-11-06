import React from "react";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "../../assets/logo.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src={logo} alt="logo" className=""/>
            </div>
            <span className="text-xl font-semibold text-gray-900">BillingBase</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors"
              style={{ background: "linear-gradient(270deg, #1C50D3 0%, #107375 100%)"}}
            >
              Join the Waitlist
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-600 py-2">Product</a>
            <a href="#" className="block text-gray-600 py-2">Use Cases</a>
            <a href="#" className="block text-gray-600 py-2">Developers</a>
            <a href="#" className="block text-gray-600 py-2">Company</a>
            <a href="#" className="block text-gray-600 py-2">Pricing</a>
            <a href="#" className="block text-gray-600 py-2">Login</a>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-2">
              Request Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;