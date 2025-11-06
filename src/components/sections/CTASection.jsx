const CTASection = () => {
  return (
    <section 
        className="py-16 md:py-16"
        style={{ background: "linear-gradient(180deg, #DAEAFD 0%, #D5F2FE 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-3 py-2 flex items-center justify-center rounded-full border border-teal-400 bg-teal-100 mb-4">
          <span className="text-teal-600 text-xs font-medium tracking-wide">Join The Future of Crypto Billing</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
          Start Billing in<br />
          <span className="bg-gradient-to-b from-[#1F6CE0] to-[#369289] bg-clip-text text-transparent">Stablecoins Today</span>
        </h2>

        <p className="text-gray-600 text-sm mb-6">
            Join developers, creators, and small businesses 
            building the future of payments.
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
            Get Early Access
            </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;