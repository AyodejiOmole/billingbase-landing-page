import ComplianceFeature from "../ui/ComplianceFeature";

const ComplianceSection = () => {
  const features = [
    {
      icon: '🔐',
      color: 'bg-teal-100',
      title: 'Non-Custodial',
      desc: 'Your customers pay directly to your wallet. Never give up control. We never touch your funds.'
    },
    {
      icon: '✅',
      color: 'bg-teal-100',
      title: 'Built-in Screening',
      desc: 'Automatic compliance checks for every transaction. Stay safe without extra work.'
    },
    {
      icon: '📋',
      color: 'bg-teal-100',
      title: 'Stay Compliant',
      desc: 'Meet regulatory requirements without the overhead. No banks, no delays, no custody.'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-teal-50 to-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Compliance Without Custody
          </h2>
          <p className="text-gray-600">
            Stay compliant while maintaining full control of your funds
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {features.map((feature, idx) => (
            <ComplianceFeature key={idx} {...feature} />
          ))}
        </div>
        <div className="text-center">
          <button className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
            Read: Our compliance banking model →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection