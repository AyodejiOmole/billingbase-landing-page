import ProcessStep from "../ui/ProcessStep";

const PlanCreationSection = () => {
  const steps = [
    { icon: '👤', title: 'For Developers', desc: 'Integrate stablecoins billing with just one API call' },
    { icon: '💰', title: 'For Small Builders', desc: 'Launch your subscription product in minutes' },
    { icon: '📱', title: 'Connect your wallet', desc: 'Connect your wallet - no account creation' },
    { icon: '🔄', title: 'No-code dashboard', desc: 'Manage all your billing subscriptions without code' },
    { icon: '📊', title: 'Manage plans, invite customers', desc: 'Manage plans, invite customers and track payments' },
    { icon: '⚡', title: 'Automated settlements', desc: 'Get automatically settled to your wallet' }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Plan Creation to Instant Fulfillment
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <ProcessStep key={idx} icon={step.icon} title={step.title} description={step.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanCreationSection;