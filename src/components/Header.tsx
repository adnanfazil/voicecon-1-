import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-black w-full">
      <div className="max-w-[1440px] w-full h-[104px] mx-auto px-6 md:px-24 flex items-center justify-between border-b border-white/10">
        <img src="/images/VoiceconLogo.png" alt="Voicecon" className="h-8" />

        <nav
          className="w-nav h-nav flex items-center justify-center bg-nav 
          px-[30px] py-5 gap-[30px] rounded-[50px] border border-nav-border 
          shadow-nav backdrop-blur-sm"
        >
          <a
            href="#voice-agent"
            className="text-[15px] font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            AI Voice Agent
          </a>
          <a
            href="#chatbots"
            className="text-[15px] font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            AI Text Chatbots
          </a>
          <a
            href="#services"
            className="text-[15px] font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-[15px] font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-[15px] font-semibold text-white/70 hover:text-white transition-colors whitespace-nowrap"
          >
            Contact
          </a>
        </nav>

        <button
          className="w-[167px] h-[56px] flex items-center justify-center gap-2 
          bg-[#8BC83F] text-black rounded-full text-sm font-medium 
          hover:bg-[#7ab536] transition-colors"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
