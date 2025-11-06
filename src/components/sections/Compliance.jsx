import ComplianceFeature from "../ui/ComplianceFeature";

import lock from "../../assets/icons/lock.png";
import security from "../../assets/icons/security.png";
import check from "../../assets/icons/check.png";

const ComplianceSection = () => {
  const features = [
    {
      icon: lock,
      color: 'bg-teal-100',
      title: 'Non-Custodial',
      desc: 'Customers pay directly to your wallet. We never hold funds.'
    },
    {
      icon: security,
      color: 'bg-teal-100',
      title: 'Built-in Screening',
      desc: 'RiskService screens wallets against sanctions lists automatically.'
    },
    {
      icon: check,
      color: 'bg-teal-100',
      title: 'Stay Compliant',
      desc: 'Reduced regulatory burden while maintaining security.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compliance Without Custody
          </h2>
          <p className="text-gray-600">
            Non-custodial architecture means no money transmitter licensing in most jurisdictions. RiskService adds wallet screening against OFAC sanctions and risk categories—without requiring payer KYC.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, idx) => (
            <ComplianceFeature key={idx} {...feature} />
          ))}
        </div>
        <div className="text-center border border-teal-500 bg-teal-50 rounded-sm py-4 w-full md:w-1/2 mx-auto">
          <button 
            className="text-black font-medium shadow-[0px_4px_10px_0px_#CCFBF180]"
        >
            Result: <span className="text-teal-700">Stay compliant while keeping control.</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection