import { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-black py-32">
      <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM_Sans'] text-[48px] font-bold mb-4">
            <span className="text-[#86BC29]">Flexible</span>{" "}
            <span className="text-white">Pricing Plans</span>
          </h2>
          <p className="text-[#A9A9AD] text-base max-w-[600px] mx-auto">
            Choose from our customizable packages that cater to your specific
            needs, whether you're a small uptake or a large enterprise.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span
            className={`text-[15px] ${
              !isYearly ? "text-white" : "text-[#A9A9AD]"
            }`}
          >
            Monthly
          </span>
          <div
            className="w-12 h-6 bg-[#1A1A1A] rounded-full p-0.5 cursor-pointer"
            onClick={() => setIsYearly(!isYearly)}
          >
            <div
              className={`w-5 h-5 bg-[#86BC29] rounded-full transition-transform duration-300 
              ${isYearly ? "translate-x-6" : ""}`}
            />
          </div>
          <span
            className={`text-[15px] ${
              isYearly ? "text-white" : "text-[#A9A9AD]"
            }`}
          >
            Yearly
          </span>
          <span className="ml-1 bg-[#86BC29] text-black text-xs px-2 py-0.5 rounded-full">
            Save 25%
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="flex gap-6 justify-center">
          {/* AI Bot Creator Card */}
          <div
            className="w-[433px] bg-[#080808] rounded-xl border border-[#1A1A1A] p-8 
               hover:border-[#86BC29] transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🤖</span>
              <span className="text-[#86BC29] font-medium">AI Bot Creator</span>
            </div>
            <div className="mb-6">
              <p className="text-[#A9A9AD] text-sm mb-1">
                Setup Fee $2500 with
              </p>
              <div className="flex items-baseline">
                <span className="text-white text-4xl font-bold">$299</span>
                <span className="text-[#A9A9AD] ml-1">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Advanced Automations
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> AI-powered
                organization
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Social Media
                Integrations
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Rigorous Testing
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> 24/7 Priority Support
              </li>
            </ul>
            <button
              className="w-full py-3 bg-[#86BC29] rounded-lg text-black font-semibold 
              hover:bg-[#76a424] transition-colors duration-300"
            >
              Get Started →
            </button>
          </div>

          {/* AI Voice Agents Card */}
          <div
            className="w-[433px] bg-[#080808] rounded-xl border border-[#1A1A1A] p-8 
               hover:border-[#86BC29] transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🤖</span>
              <span className="text-[#86BC29] font-medium">
                AI Voice Agents
              </span>
            </div>
            <div className="mb-6">
              <p className="text-[#A9A9AD] text-sm mb-1">
                Setup Fee $3000 with
              </p>
              <div className="flex items-baseline">
                <span className="text-white text-4xl font-bold">$399</span>
                <span className="text-[#A9A9AD] ml-1">/ month</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Advanced Automations
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Weekly Development
                Calls
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Human-like Quality
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> Rigorous Testing
              </li>
              <li className="text-[#A9A9AD] flex items-center gap-2">
                <span className="text-[#86BC29]">✓</span> 24/7 Priority Support
              </li>
            </ul>
            <button
              className="w-full py-3 bg-[#86BC29] rounded-lg text-black font-semibold 
              hover:bg-[#76a424] transition-colors duration-300"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
