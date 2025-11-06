import { useState } from "react";
import FAQItem from "../ui/FAQItem";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  const faqs = [
    "Do we hold customer funds?",
    "What chains and tokens?",
    "What if I'm not technical?",
    "Is it compliant?",
    "Can I issue refunds?",
    "What about chargebacks?"
  ];

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
                Everything you need to know about BillingBase
            </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq}
              isOpen={openFaq === idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;