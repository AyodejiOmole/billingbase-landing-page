import planLogo from "../../assets/icons/streamline_subscription-cashflow.png";
import invoicesLogo from "../../assets/icons/basil_document-outline.png";
import paymentsLogo from "../../assets/icons/material-symbols_refresh-rounded.png";
import refundLogo from "../../assets/icons/refund-back.png";
import shieldLogo from "../../assets/icons/shield.png";
import multiChainLogo from "../../assets/icons/streamline_web.png";

import ellipse from "../../assets/icons/Ellipse 21.png";
import ellipseOne from "../../assets/icons/ellipse-1.png";
import ellipseTwo from "../../assets/icons/ellipse-2.png";
import ellipseThree from "../../assets/icons/ellipse-3.png";

// Core Feature Card Component
const CoreFeatureCard = ({ icon, color, title, desc, ellipseIcon }) => {
  return (
    <div className="relative p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow h-[300px] shadow-[0px_4px_5px_0px_#64748B1A]" style={{ backgroundColor: '#FCFDFE'}}>
      <div 
        style={{ backgroundColor: color }}
        className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4`}
    >
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="w-4 h-4 object-contain" />
        ) : (
          <span className="text-2xl">{icon}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <img src={ellipseIcon} alt={"Ellipse"} className="absolute right-0 bottom-0" />
    </div>
  );
};

// Core Features Section
const CoreFeaturesSection = () => {
  const features = [
    { 
      icon: planLogo,
      color: '#4786FF',
      title: 'Plans & Subscriptions',
      desc: 'Recurring billing with automatic retries and grace periods. Accept USDC, USDT, or DAI across Base, Polygon, and Arbitrum.',
      ellipseIcon: ellipseOne || ellipse,
    },
    {
      icon: invoicesLogo,
      color: '#45BFB2',
      title: 'Invoices & Omni Invoices',
      desc: 'One link, multiple chains. Customers pick their preferred network and token—no confusion, no underpays.',
      ellipseIcon: ellipseTwo || ellipse,
    },
    {
      icon: paymentsLogo,
      color: '#9638EC',
      title: 'Automatic Retries & Revocation',
      desc: 'Missed payment? We retry 5 times. When billing lapses, access revokes automatically.',
      ellipseIcon: ellipse,
    },
    {
      icon: refundLogo,
      color: '#F66F14',
      title: 'Refunds',
      desc: 'Issue full or partial refunds with complete audit trails.',
      ellipseIcon: ellipseThree || ellipse,
    },
    {
      icon: shieldLogo,
      color: '#E93B3B',
      title: 'RiskService',
      desc: 'Real-time wallet screening against sanctions lists. Protect your business without becoming a gatekeeper.',
      ellipseIcon: ellipseTwo || ellipse,
    },
    {
      icon: multiChainLogo,
      color: '#1FBD59',
      title: 'Multi-Chain Support',
      desc: 'Base, Polygon, Arbitrum. Multiple tokens (USDC, USDT, DAI). Webhooks for instant notifications.',
      ellipseIcon: ellipse,
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-gray-600">
            Everything you need to run subscription and billing workflows in crypto
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <CoreFeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;