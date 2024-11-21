const AIText = () => {
  return (
    <section className="relative w-full overflow-hidden bg-section-gradient">
      {/* Content Container */}
      <div className="w-[1440px] h-section mx-auto">
        <div className="relative max-w-[1440px] mx-auto flex flex-col items-center px-section-x">
          <h2
            className="w-[881px] h-[116px] mt-[32px] font-['DM_Sans'] 
            text-[48px] font-semibold leading-[58px] text-center text-white"
          >
            Our Services Will Transform Your Business with Intelligent
            Automation
          </h2>

          <p
            className="w-[957px] h-[77px] mt-[6px] -ml-[84.75px] font-['DM_Sans'] 
            text-base font-normal leading-[25.6px] text-center text-white"
          >
            We empower businesses with AI Voice Agent and AI Text Chatbots that
            automate customer interactions, enhancing efficiency and driving
            growth. Our solutions are designed to provide seamless
            communication, enabling your team to focus on strategic initiatives
            while our intelligent agents handle routine tasks.
          </p>

          {/* Navigation Tabs */}
          <div
            className="w-[799px] h-[53.6px] mt-[7.81px] flex items-center justify-center rounded-full"
            style={{
              background:
                "linear-gradient(236.34deg, #C6DAA4 0%, #86BC29 101.83%)",
            }}
          >
            <button className="px-6 py-2 text-[18px] font-['DM_Sans'] font-medium text-white">
              AI Voice Agent
            </button>
            <button
              className="px-6 py-2 text-[19px] font-['DM_Sans'] font-semibold text-white 
              bg-black rounded-full"
            >
              AI Text Chatbots
            </button>
            <button className="px-6 py-2 text-[18px] font-['DM_Sans'] font-medium text-white">
              Support & Maintenance
            </button>
          </div>

          {/* Content Box - Updated layout */}
          <div
            className="w-[1050px] h-[757.6px] mt-4 bg-[#080808] rounded-tl-[12px] 
            flex flex-col items-center text-center p-8 relative"
          >
            <h3 className="text-[39px] font-['DM_Sans'] font-normal text-white mb-4">
              AI Text Chatbots
            </h3>
            <p
              className="w-[806px] text-base font-['DM_Sans'] font-normal leading-[30px] 
              text-[#D2D4D7] mb-16"
            >
              Enhance your online presence with our AI Text Chatbots, designed
              for websites, social media, and messaging platforms. These
              chatbots provide instant responses to customer inquiries,
              improving engagement and satisfaction while freeing up your team
              to tackle more complex issues.
            </p>

            <button
              className="text-[20px] font-['DM_Sans'] font-medium text-white 
              hover:text-gray-200 transition-colors flex items-center gap-2"
            >
              Get Started
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[2px]"
              >
                <path
                  d="M8 3.33337L12.6667 8.00004L8 12.6667"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Chat Interface Image - Updated positioning */}
            <div className="w-[565px] h-[324px] absolute bottom-0">
              <img
                src="/public/images/pic2.png"
                alt="AI Chat Interface"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIText;
