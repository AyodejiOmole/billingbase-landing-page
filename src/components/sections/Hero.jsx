import { Check } from "lucide-react";

import logo from "../../assets/logo.png";
import heroEllipse from "../../assets/hero-ellipse.png";
import graphBg from "../../assets/graph.png";
import star from "../../assets/icons/star.png";

const HeroSection = () => {
  return (
    // <section style={{ background: 'linear-gradient(0deg, #F0F8FD 40.38%, #F5FEFE 100%)' }} className="max-w-7xl py-12 mx-auto px-4 sm:px-6 lg:px-8 bg-[url('/images/graph.png')] bg-cover ">
    <section      
      style={{
        background: `linear-gradient(0deg, #F0F8FD 40.38%, #F5FEFE 100%), url(${graphBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${graphBg})`,
      }}
      className="max-w-7xl py-12 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
        <div className="w-12 h-12 flex items-center justify-center mb-6">
          <img src={logo} alt="logo" className=""/>
        </div>

        <div className="px-3 py-2 flex items-center justify-center gap-3 rounded-full border border-teal-400 bg-teal-100">
          <img src={star} alt={"star image"} className="w-3 h-3" />
          <div className="text-teal-600 text-xs font-medium tracking-wide">The Future of Crypto Billing</div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The Non-Custodial<br />
          <img src={heroEllipse} alt="hero blur" className="w-[200px] h-[200px] absolute right-[55%] top-[30%]"/>
          <span className="bg-gradient-to-b from-[#1F6CE0] to-[#369289] bg-clip-text text-transparent" style={{ color: "linear-gradient(0deg, #1F6CE0 27.4%, #369289 69.71%)" }}>Billing Layer</span><br />
          for Stablecoins
        </h1>
        <p className="text-gray-600 text-sm md:text-sm mb-8 max-w-2xl mx-auto">
          Launch subscriptions and invoices in minutes. Get paid globally in USDC, USDT, and DAI <span className="text-black-900 font-medium">without custody, chargebacks, or banks.</span>
        </p>

        <p className="text-black text-xl font-medium md:text-sm mb-3 max-w-2xl mx-auto">
          Join the Early Access Waitlist
        </p>
        <p className="text-gray-600 text-sm md:text-sm mb-3 max-w-2xl mx-auto">
          Get early access to the API/UI and help shape the future of stablecoin billing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-2 mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
          />
          <button 
            style={{ background: "linear-gradient(270deg, #1C50D3 0%, #107375 100%)"}}
            className="cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Request Early Access
          </button>
        </div>

        <p className="text-gray-600 text-sm md:text-sm mb-3 max-w-2xl mx-auto">
          By signing up, you'll be first in line for beta access and updates as we build.
        </p>
        
        <div className="mx-auto flex justify-center align-center gap-4">
          <div className="flex justify-center align-center gap-2">
            <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500">
              Free to integrate
            </p>
          </div>

          <div className="flex justify-center align-center gap-2">
            <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500">
              No chargeback risk.
            </p>
          </div>

          <div className="flex justify-center align-center gap-2">
            <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-500">
              Global from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;