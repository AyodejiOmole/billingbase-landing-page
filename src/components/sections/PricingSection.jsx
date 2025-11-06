import { Check } from "lucide-react";

const PricingSection = () => {
  const includedFeatures = [
    'Unlimited Plans + Invoices + Customers',
    'Full API access + SDK',
    'Smart contract deployment',
    'Automated billing',
    'All features USDC, USDT, DAI, etc.',
    'Dunning & retry logic',
    'Analytics dashboard',
    'Email notifications'
  ];

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
        </div>
        <div className="border-2 border-gray-200 rounded-2xl p-8 md:p-12 bg-white shadow-sm">
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">2.0%</div>
            <div className="text-xl text-gray-600 mb-8">per transaction</div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
              <ul className="space-y-3">
                {includedFeatures.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 invisible md:visible">&nbsp;</h4>
              <ul className="space-y-3">
                {includedFeatures.slice(4).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-teal-500 text-white py-3 px-6 rounded-lg hover:bg-teal-600 font-medium transition-colors">
              Start Building
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 font-medium transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;