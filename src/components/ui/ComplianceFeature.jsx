const ComplianceFeature = ({ icon, color, title, desc }) => {
  return (
    <div className="rounded-lg text-start px-6 py-8 flex flex-col gap-3 shadow-[0px_4px_5px_0px_#64748B1A]">
      <div 
        style={{ background: 'linear-gradient(180deg, #369289 0%, #46B3A7 100%)' }}
        className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-3xl mb-4`}
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

export default ComplianceFeature;