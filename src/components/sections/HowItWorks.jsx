import code from "../../assets/icons/code.png";
import link from "../../assets/icons/material-symbols_link-rounded.png";
import automate from "../../assets/icons/mdi_automatic.png";

// How It Works Step Component
const HowItWorksStep = ({ icon, color, title, desc }) => {
  return (
    <div className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow rounded-xl p-6 relative h-[300px] shadow-[0px_4px_5px_0px_#64748B1A]" style={{ backgroundColor: '#FCFDFE'}}>
      <div 
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl mb-4`}
        style={{ background: color }}
    >
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-4 h-4 object-contain" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      icon: code,
      color: '#4786FF',
      title: 'Create Plans & Invoices',
      desc: 'Use our API or CLI to set up subscriptions, one-time payments, or multi-chain invoices in seconds. Integrate directly into your website or app.'
    },
    {
      icon: link,
      color: 'linear-gradient(180deg, #46B3A7 0%, #4786FF 100%)',
      title: 'Share Payment Links',
      desc: 'Customers choose their chain and token. Works with any wallet. QR codes and deeplinks included.'
    },
    {
      icon: automate,
      color: '#46B3A7',
      title: 'Automatic everything',
      desc: 'Webhooks notify your backend on payment. Auto-grant API credits, or downloads. Auto-revoke when subscriptions lapse.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600">Three simple steps to launch your stablecoin billing infrastructure</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <HowItWorksStep key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;