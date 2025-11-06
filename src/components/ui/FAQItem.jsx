import { ChevronDown } from "lucide-react";

const FAQItem = ({ question, isOpen, onClick }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600">
            Detailed answer would go here explaining the question in depth with comprehensive information about our service.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;