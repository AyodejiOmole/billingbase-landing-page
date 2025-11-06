
const ComplianceFeature = ({ icon, color, title, description }) => {
  return (
    <div className="text-center p-6">
      <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center text-3xl mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ComplianceFeature;