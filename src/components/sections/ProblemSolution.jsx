import error from "../../assets/icons/error.png";
import star from "../../assets/icons/star.png";

const ProblemSolutionSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
              <div 
                style={{ backgroundColor: '#efabab40' }}
                className={`p-4 space-x-4 shadow-[0px_4px_10px_0px_#FFE7E580] border border-red-200 rounded-lg`}
              >
                <div className="flex items-end gap-4 justify-start mb-6">
                  <div className={`w-12 h-12 bg-red-200 border border-red-300 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <img src={error} alt="error image" className="w-4 h-4"/>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Problem We're Solving</h3>
                </div>
                <div>
                  <p className="text-gray-600">
                    Stablecoins enable instant, global payments but running subscriptions or automated billing in crypto is still broken. Traditional processors force bank accounts and KYC. Custodial solutions make you surrender control. DIY transfers offer no retries, refunds, or automation.
                  </p>
                </div>
              </div>

              <div 
                style={{ backgroundColor: '#BDEDE740' }}
                className={`p-4 space-x-4 shadow-[0px_4px_10px_0px_#CCFBF180] border border-teal-200 rounded-lg`}
              >
                <div className="flex items-end gap-4 justify-start mb-6">
                  <div className={`w-12 h-12 bg-teal-200 border border-teal-300 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <img src={star} alt="star image" className="w-4 h-4"/>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What You Get</h3>
                </div>
                <div>
                  <p className="text-gray-600">
                    BillingBase gives you the billing infrastructure crypto deserves: <span className="text-teal-600">non-custodial by design</span>, with subscriptions, invoices, automatic retries, refunds, and instant fulfillment, all through a clean API and UI. 
                    <span className="font-medium text-black"> You keep custody. We handle the rest.</span>
                  </p>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;