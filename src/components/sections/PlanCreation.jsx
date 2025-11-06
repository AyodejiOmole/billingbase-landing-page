import code from "../../assets/icons/code.png";
import home from "../../assets/icons/home.png";
import arrow from "../../assets/icons/arrow.png"

const PlanCreationSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From Plan Creation to Instant Fulfillment
          </h2>

          <p className="text-gray-600">
            In minutes, not months
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow rounded-xl py-6 px-4 relative shadow-[0px_4px_5px_0px_#64748B1A] text-center flex flex-col justify-start gap-5 align-start" style={{ backgroundColor: '#FCFDFE'}}>
            <div className="flex justify-start items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl mb-4`}
                style={{ background: 'linear-gradient(180deg, #1C50D3 0%, #4786FF 100%)' }}
              >
                {/* {typeof icon === "string" ? ( */}
                  <img src={code} alt={"code icon"} className="w-4 h-4 object-contain" />
                {/* // ) : (
                //   <span className="text-2xl">{code}</span>
                // )} */}
              </div>

              <p className="text-lg font-semibold text-black mb-3">For Developers</p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#596DF2' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                1
              </div>

              <p className="text-sm text-gray-500 mb-3">Developers create subscription plans via API</p>
            </div>

            <img src={arrow} alt="arror icon" className="w-6 h-6 mx-auto"/>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#596DF2' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                2
              </div>

              <p className="text-sm text-gray-500 mb-3">Customer pays with USDC on their preferred chain</p>
            </div>

            <img src={arrow} alt="arror icon" className="w-6 h-6 mx-auto"/>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#596DF2' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                3
              </div>

              <div className="flex flex-col justify-start text-left">
                <p className="text-sm text-gray-500">
                  Webhook fires → Access granted instantly 
                </p>
                <p className="text-gray-600 text-xs">(API key, download)</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-xl hover:shadow-lg transition-shadow rounded-xl py-6 px-4 relative shadow-[0px_4px_5px_0px_#64748B1A] text-center flex flex-col justify-start gap-5 align-start" style={{ backgroundColor: '#FCFDFE'}}>
            <div className="flex justify-start items-center gap-3">
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-3xl mb-4`}
                style={{ background: 'linear-gradient(180deg, #46B3A7 0%, #107375 100%)' }}
              >

                <img src={home} alt={"home icon"} className="w-4 h-4 object-contain" />
              </div>

              <p className="text-lg font-semibold text-black mb-3">For Small Businesses</p>
            </div>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#46B3A7' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                1
              </div>

              {/* <p className="text-sm text-gray-500 mb-3">Developers create subscription plans via API</p> */}

              <div className="flex flex-col justify-start text-left">
                <p className="text-sm text-gray-500">
                  Set up recurring billing in dashboard 
                </p>
                <p className="text-gray-600 text-xs">(monthly software, memberships, services)</p>
              </div>
            </div>

            <img src={arrow} alt="arror icon" className="w-6 h-6 mx-auto"/>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#46B3A7' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                2
              </div>

              <p className="text-sm text-gray-500 mb-3">Customer subscribes and pays with crypto</p>
            </div>

            <img src={arrow} alt="arror icon" className="w-6 h-6 mx-auto"/>

            <div className="flex justify-start items-center gap-3">
              <div 
                style={{ background: '#46B3A7' }}
                className={`w-12 h-12 text-lg text-white font-semibold rounded-lg flex items-center justify-center flex-shrink-0 text-2xl`}
              >
                3
              </div>

              <div className="flex flex-col justify-start text-left">
                <p className="text-sm text-gray-500">
                  Payment confirmed → Immediate access
                </p>
                <p className="text-gray-600 text-xs">You get paid with zero chargebacks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanCreationSection;