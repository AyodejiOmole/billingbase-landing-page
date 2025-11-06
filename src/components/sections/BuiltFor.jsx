
const BuiltForCard = ({ icon, color, title, desc }) => {
  return (
    <div className="flex items-start space-x-4 py-8 px-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div 
      style={{ background: color }}
        className={`w-12 h-12 ${color} text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
    >
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

// Built For Section
const BuiltForSection = () => {
  const useCases = [
    {
      icon: '1',
      color: 'linear-gradient(180deg, #46B3A7 0%, #4786FF 100%)',
      title: 'Indie SaaS',
      desc: 'No chargebacks. Lower fees. Accept customers traditional processors reject.'
    },
    {
      icon: '2',
      color: '#596DF2',
      title: 'Crypto Startups',
      desc: 'Multi-chain checkout with compliance built-in. Non-custodial means simplified licensing.'
    },
    {
      icon: '3',
      color: '#1CC169',
      title: 'Creator Communities',
      desc: 'Charge members globally without geographic restrictions or payment processor limitations.'
    },
    {
      icon: '4',
      color: '#F76920',
      title: 'Small Builders Owners',
      desc: 'Accept crypto payments without exchange accounts or complex integrations. Get paid directly to your wallet.'
    }
  ];

  return (
    <section className="py-16 bg-[#F9FAFB80]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built For</h2>
          <p className="text-gray-600">
            Designed for everyone who needs flexible, global payment infrastructure.
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