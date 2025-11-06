import logo from "../../assets/logo.png"

const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center">
        <div className="w-12 h-12 flex items-center justify-center mb-6">
          <img src={logo} alt="logo" className=""/>
        </div>

        <div className="inline-block px-3 py-2 flex items-center justify-center rounded-full border border-teal-400 bg-teal-100">
          <span className="text-teal-600 text-xs font-medium tracking-wide">The Future of Crypto Billing</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The Non-Custodial<br />
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
          <button 
            style={{ background: "linear-gradient(270deg, #1C50D3 0%, #107375 100%)"}}
            className="cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium transition-colors"
          >
            Request Early Access
          </button>
        </div>
        <p className="text-sm text-gray-500">
          Free to integrate • No commitment • Start in minutes
        </p>
      </div>
    </section>
  );
};

export default HeroSection;