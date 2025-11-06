import { Check } from "lucide-react";
import checkmarkFilled from "../../assets/icons/checkmark-filled.png";

const PricingSection = () => {
  const includedFeatures = [
    'Multi-chain (Base, Polygon, Arbitrum)',
    'Subscriptions, invoices, refunds',
    'Webhooks, API & UI',
  ];

  const includedFeaturesTwo = [
    'All tokens (USDC, USDT, DAI)',
    'RiskService screening',
    'Automatic retries & grace periods'
  ]

  return (
    <section className="py-16 bg-[#E6F3FA40]">
      <div className="md:max-w-2/3 max-w-[90%] mx-auto p-8 md:p-12 shadow-[0px_15px_50px_0px_#36928926] rounded-2xl bg-white">
        <div className="">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-gray-600">
                    Everything you need, one straightforward price.
                </p>
            </div>

            <div className="w-fit px-3 py-2 flex items-center justify-center rounded-full border border-teal-400 bg-teal-50 mb-3 mx-auto">
                <span className="text-teal-600 text-sm font-medium tracking-wide">Standard Plan</span>
            </div>

            <div className="text-center mb-8">
                <span className="text-5xl md:text-6xl font-semibold text-gray-900 mb-4 mr-2">2.0%</span>
                <span className="text-sm text-gray-600 mb-8">per transaction</span>
            </div>

            <h4 className="text-gray-500 mb-4 text-center mx-auto">All features includes, no hidden fees.</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                    <ul className="space-y-3">
                        {includedFeatures.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            {/* <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /> */}
                            <img src={checkmarkFilled} alt="checkmark filled" className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-black text-sm">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <ul className="space-y-3">
                        {includedFeaturesTwo.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                            {/* <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" /> */}
                            <img src={checkmarkFilled} alt="checkmark filled" className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-black text-sm">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
                <button 
                    style={{ background: 'linear-gradient(270deg, #1C50D3 0%, #107375 100%)' }}
                    className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 font-medium transition-colors"
                >
                Start Building
                </button>
            </div>

            <div className="mx-auto flex justify-center align-center gap-6 mt-4">
                <div className="flex justify-center align-center gap-1">
                    <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                        No setup fees
                    </p>
                </div>

                <div className="flex justify-center align-center gap-1">
                    <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                        No monthly mininums
                    </p>
                </div>

                <div className="flex justify-center align-center gap-1">
                    <Check className="w-3 h-3 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-gray-500">
                        Cancel anytime
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;