import community from "../../assets/community.png";
import iconCheck from "../../assets/icons/icon-check.png";

const CommunitySection = () => {
  return (
    <div className="px-10">
    <section className="rounded-xl py-16 shadow-[0px_15px_50px_0px_#36928926]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Developers, Creators, and Small Businesses<br className="hidden md:block" />
            Building the Future of Payments
          </h2>
        </div>

        <img src={community} alt={"community image"} className="w-2/3 h-[180px] object-contain mx-auto" />

        <div className="grid md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto mb-8">
          <div className="border border-teal-400 bg-teal-50 py-4 px-2 rounded-sm">
            <div className="text-teal-600 font-medium flex justify-center items-center gap-3">
              <img src={iconCheck} alt="check image" className="w-4 h-4"/>
              Zero custody headaches 
            </div>
          </div>

          <div className="border border-teal-400 bg-teal-50 py-4 px-2 rounded-sm">
            <div className="text-teal-600 font-medium flex justify-center items-center gap-3">
              <img src={iconCheck} alt="check image" className="w-4 h-4"/>
              No chargeback risk
            </div>
          </div>

          <div className="border border-teal-400 bg-teal-50 py-4 px-2 rounded-sm">
            <div className="text-teal-600 font-medium flex justify-center items-center gap-3">
              <img src={iconCheck} alt="check image" className="w-4 h-4"/>
              Global from day one
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600 italic">
            We're building for the devlopers who asked: <span className="font-semibold text-black-900 cursor-pointer hover:text-teal-600">"Why isn't this easier?"</span>
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default CommunitySection;