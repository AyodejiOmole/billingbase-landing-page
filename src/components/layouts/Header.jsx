import React from "react";
import { useState } from "react";

import { Menu, X } from "lucide-react";

import logo from "../../assets/logo.png"

const Header = ({ isVisible }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`bg-white/70 sticky backdrop-blur-md top-0 z-50 shadow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 hidden -translate-y-10 pointer-events-none'} `}>
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
            <button 
              className="text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors"
              style={{ background: "linear-gradient(270deg, #1C50D3 0%, #107375 100%)"}}
            >
              Join the Waitlist
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;