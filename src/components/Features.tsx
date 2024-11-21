import React from "react";

const Features = () => {
  const featureCards = [
    {
      id: 1,
      icon: "👍", // Replace with actual icon component/path
      title: "Product Lookup and Recommendations",
      description:
        "Provide personalized product suggestions based on customer preferences and purchase history, allowing for quick and informed shopping decisions.",
    },
    {
      id: 2,
      icon: "🌐", // Replace with actual icon component/path
      title: "Voice-Activated Cart",
      description:
        "Enable customers to add items to their cart using voice commands, streamlining the shopping experience and reducing cart abandonment.",
    },
    {
      id: 3,
      icon: "🎯", // Replace with actual icon component/path
      title: "In-Store Navigation",
      description:
        "Guide customers to products within your store in real time, improving their shopping experience and boosting sales by highlighting promotions.",
    },
    {
      id: 4,
      icon: "📦", // Replace with actual icon component/path
      title: "Inventory Management",
      description:
        "Optimize stock levels with real-time insights and automated reordering, ensuring you always have the right products available for customers.",
    },
    {
      id: 5,
      icon: "🌍", // Replace with actual icon component/path
      title: "Multi-Language Support",
      description:
        "Cater to a diverse customer base with voice interactions in multiple languages, enhancing accessibility and engagement.",
    },
    {
      id: 6,
      icon: "💬", // Replace with actual icon component/path
      title: "Conversations Roleplay",
      description:
        "Train staff with simulated customer interactions, helping them practice responses and improve communication skills in a risk-free environment.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-32 mt-32">
      {/* Background Image */}
      <div className="absolute w-[383.37px] h-[320px] left-1/2 -translate-x-1/2 top-0">
        <img
          src="/public/images/V.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        {/* Heading Container */}
        <div className="w-[1152px] px-[232px] flex flex-col items-center gap-6 mt-16">
          {/* Main Heading */}
          <h2 className="font-['DM_Sans'] text-[48px] font-bold leading-[57.6px] text-center whitespace-nowrap">
            <span
              style={{
                background:
                  "linear-gradient(236.34deg, #C6DAA4 0%, #86BC29 101.83%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              AI-Powered Features
            </span>
            <span className="text-white"> Designed for Retail</span>
          </h2>

          {/* Description */}
          <p
            className="w-[688px] font-['DM_Sans'] text-[16px] font-normal 
            leading-[24px] text-center text-[#BABABA]"
          >
            Voicecon is packed with innovative intelligent features that are set
            to revolutionize your retail operations, enhancing customer
            experiences and driving sales.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-3 gap-6 mt-16 w-full max-w-[1200px]">
          {featureCards.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#0D0D0D] p-8 rounded-lg border border-[#1A1A1A] hover:border-[#86BC29] 
              transition-colors duration-300"
            >
              <div
                className="w-12 h-12 mb-6 flex items-center justify-center 
                bg-gradient-to-br from-[#C6DAA4] to-[#86BC29] rounded-lg"
              >
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-4 font-['DM_Sans']">
                {feature.title}
              </h3>
              <p className="text-[#BABABA] text-base leading-6 font-['DM_Sans']">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
