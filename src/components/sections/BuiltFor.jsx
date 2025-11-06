// Built For Card Component
const BuiltForCard = ({ icon, color, title, description }) => {
  return (
    <div className="flex items-start space-x-4 p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}>
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

// Built For Section
const BuiltForSection = () => {
  const useCases = [
    {
      icon: '🚀',
      color: 'bg-blue-100',
      title: 'Web3 SaaS',
      desc: 'For developers to take Web3 services without customer verification and KYC friction.'
    },
    {
      icon: '🎮',
      color: 'bg-teal-100',
      title: 'NFT Clubs',
      desc: 'Launch NFT memberships and cryptocurrencies and automate community access and renewal.'
    },
    {
      icon: '🌱',
      color: 'bg-green-100',
      title: 'Creator Communities',
      desc: 'Content creators can monetize work through subscriptions, no payment processor needed.'
    },
    {
      icon: '📱',
      color: 'bg-orange-100',
      title: 'Small Builders/ Startups',
      desc: 'Perfect for bootstrapped startups and indie makers who need simple payment infrastructure without compliance overhead.'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built For</h2>
          <p className="text-gray-600">
            Designed for builders who need flexible, global payment infrastructure
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, idx) => (
            <BuiltForCard key={idx} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForSection;