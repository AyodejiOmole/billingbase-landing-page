import React from "react";

const FeatureCard = ({ icon, title, description, bgColor = "bg-gray-100", type  }) => {
  return (
    <div className={`flex items-start space-x-4 ${type === "red" ? "shadow[0px_4px_10px_0px_#FFE7E580]" : "shadow: 0px_4px_10px_0px_#CCFBF180"}`}>
      <div className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
        <div className="w-6 h-6 bg-current rounded" style={{ backgroundColor: icon }}></div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;