import React from "react";

const Hero: React.FC = () => {
  // Updated logos array with higher opacity
  const logos = [
    { id: 1, name: "Vconekt", className: "w-[120px] opacity-70" },
    { id: 2, name: "LogoIpsum 2", className: "w-[120px] opacity-70" },
    { id: 3, name: "LogoIpsum 3", className: "w-[120px] opacity-70" },
    { id: 4, name: "LogoIpsum 4", className: "w-[120px] opacity-70" },
    { id: 5, name: "LogoIpsum 5", className: "w-[120px] opacity-70" },
    { id: 6, name: "LogoIpsum 6", className: "w-[120px] opacity-70" },
  ];

  // Double the logos for seamless scrolling
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="relative w-full min-h-[calc(100vh-104px)] overflow-hidden">
      {/* Eclipse Background */}
      <div
        className="absolute w-[1261px] h-[1261px] top-[200px] left-1/2 -translate-x-1/2
        rounded-full mix-blend-screen pointer-events-none"
        style={{
          background:
            "linear-gradient(180.17deg, #86BC29 -1.35%, rgba(11, 11, 9, 0) 36.74%)",
          opacity: 0.7,
          boxShadow:
            "0 0 113.49px #0D0E0B, 0 0 226.98px #0D0E0B, 0 0 794.43px #0D0E0B, 0 0 1588.86px #0D0E0B, 0 0 2723.76px #0D0E0B, 0 0 4766.58px #0D0E0B",
        }}
      />

      {/* Hero Content */}
      <div className="relative max-w-[1440px] mx-auto flex flex-col items-center">
        <p className="font-['DM_Sans'] text-base font-normal leading-6 text-white mt-[240px] mb-[24px]">
          Voicecon AI
        </p>
        <h1
          className="w-[1088px] h-[178px] font-['DM_Sans'] text-[60px] font-bold 
          leading-[89.04px] tracking-[-0.01em] text-center text-white 
          shadow-[0px_4px_4px_0px_#00000040] relative z-10"
        >
          Building Intelligent AI Agents
          <br />
          for <span className="text-[#86BC29]">Real Business Growth</span>
        </h1>

        <p
          className="w-[764px] h-[35px] mt-[24px] font-['DM_Sans'] text-base font-normal 
          leading-6 text-center text-white"
        >
          Voicecon AI delivers AI Voice Agents and AI Text Chatbots to automate
          customer support and inbound/outbound calls, driving efficiency and
          business growth.
        </p>

        <p
          className="w-[267px] mt-[56px] font-['DM_Sans'] text-base font-normal 
          leading-6 text-center text-[#BABABA]"
        >
          Trusted by companies big and small
        </p>

        {/* Animated Logo Section */}
        <div className="w-[1440px] h-[82px] mt-6 overflow-hidden">
          <div className="flex animate-scroll">
            {doubledLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className={`flex items-center ${logo.className} mx-[16.5px]`}
              >
                <svg
                  className="w-full h-8"
                  viewBox="0 0 120 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#86BC29"
                    fontSize="16"
                    fontWeight="600"
                  >
                    {logo.name}
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS file (e.g., globals.css)
const styles = `
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  display: flex;
  width: fit-content;
}

/* Optional: Pause animation on hover */
.animate-scroll:hover {
  animation-play-state: paused;
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Hero;
