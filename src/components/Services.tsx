const Services = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#080808]">
      <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="flex items-center justify-center">
          <h1
            className="font-['DM_Sans'] text-[48px] font-bold leading-[60px] 
            tracking-[-0.96px] text-center"
          >
            <span className="text-white">Seamless AI Phone Calls That </span>
            <span
              style={{
                background:
                  "linear-gradient(236.34deg, #C6DAA4 0%, #86BC29 101.83%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Feel Human
            </span>
          </h1>
        </div>

        {/* Description */}
        <p
          className="max-w-[908px] mt-6 font-['Inter'] text-[18px] 
          font-normal leading-[28px] text-center text-[#A9A9AD]"
        >
          We create intelligent agents that drive real business growth through
          automation. We empower businesses to automate interactions, streamline
          processes, and drive growth like never before.
        </p>

        {/* Content Boxes Container */}
        <div className="flex justify-center gap-6 mt-12">
          {/* AI Agents Box */}
          <div
            className="w-[592px] bg-[#1010144D] rounded-tl-[8px] p-10
            border border-[#4E4E52] shadow-[0px_20px_24px_-4px_#262C341A,0px_8px_8px_-4px_#262C340A]"
          >
            <h2
              className="font-['DM_Sans'] text-[32px] font-semibold 
              leading-[38px] tracking-[-0.6px] text-white mb-6"
            >
              What are AI Agents?
            </h2>
            <p
              className="font-['DM_Sans'] text-[16px] font-normal leading-[24px] 
              text-white mb-6"
            >
              AI Voice Agents are sophisticated digital assistants designed to
              handle voice interactions with customers, mimicking human
              conversation to provide seamless communication. These agents are
              capable of effectively handling incoming and outgoing calls,
              answering client questions, setting up appointments, and providing
              information. AI Voice Agents use cutting-edge technology like
              machine learning and natural language processing (NLP) to provide
              captivating, human-like experiences that improve consumer
              satisfaction and streamline business operations.
            </p>

            {/* Get Started Button */}
            <div className="flex items-center">
              <button className="flex items-center gap-2 font-['DM_Sans'] text-[16px] font-medium">
                <span
                  style={{
                    background:
                      "linear-gradient(236.34deg, #C6DAA4 0%, #86BC29 101.83%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Get Started
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33334 8H12.6667"
                    stroke="#86BC29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33337L12.6667 8.00004L8 12.6667"
                    stroke="#86BC29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* AI Text Chatbots Box */}
          <div
            className="w-[592px] bg-[#1010144D] rounded-tl-[8px] p-10
            border border-[#4E4E52] shadow-[0px_20px_24px_-4px_#262C341A,0px_8px_8px_-4px_#262C340A]"
          >
            <h2
              className="font-['DM_Sans'] text-[32px] font-semibold 
              leading-[38px] tracking-[-0.6px] text-white mb-6"
            >
              What are AI Text Chatbots?
            </h2>
            <p
              className="font-['DM_Sans'] text-[16px] font-normal leading-[24px] 
              text-white mb-6"
            >
              AI Text Chatbots are intelligent software programs that simulate
              human-like conversations through text. They are integrated into
              websites, messaging apps, and other digital platforms to provide
              instant support and engage users in real-time. Utilizing NLP and
              machine learning, these chatbots understand user intent and
              deliver personalized responses, allowing businesses to automate
              customer service, handle frequently asked questions, and improve
              overall efficiency. With their ability to learn from interactions,
              AI Text Chatbots continuously enhance their performance, making
              them essential tools for modern customer engagement.
            </p>

            {/* Get Started Button */}
            <div className="flex items-center">
              <button className="flex items-center gap-2 font-['DM_Sans'] text-[16px] font-medium">
                <span
                  style={{
                    background:
                      "linear-gradient(236.34deg, #C6DAA4 0%, #86BC29 101.83%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Get Started
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.33334 8H12.6667"
                    stroke="#86BC29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 3.33337L12.6667 8.00004L8 12.6667"
                    stroke="#86BC29"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
