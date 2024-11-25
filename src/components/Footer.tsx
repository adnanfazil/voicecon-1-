const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/voicecon-logo.svg"
                alt="Voicecon"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Voicecon</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Voicecon helps businesses in sectors that drive business growth
              through automation. Our focus agents are AI-led children education
              enrichment instructors providing online live support to both
              students and parents.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/ai-voice-agent"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  AI Voice Agent
                </a>
              </li>
              <li>
                <a
                  href="/ai-text-chatbots"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  AI Text Chatbots
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/terms"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-[#86BC29] text-sm"
                >
                  Privacy
                </a>
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#86BC29]">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <img
                    src="/facebook-icon.svg"
                    alt="Facebook"
                    className="w-5 h-5"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86BC29]">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <img
                    src="/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86BC29]">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <img
                    src="/twitter-icon.svg"
                    alt="Twitter"
                    className="w-5 h-5"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-[#86BC29]">
                <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center">
                  <img
                    src="/youtube-icon.svg"
                    alt="YouTube"
                    className="w-5 h-5"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#333333] text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
