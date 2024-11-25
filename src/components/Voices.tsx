import React from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  message: string;
  response: string;
}

const Voices: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah T",
      title: "Customer Service Manager",
      message:
        "Implementing Voicecon's AI Voice Agents has transformed our customer service. We've seen a significant reduction in response times and an increase in customer satisfaction!",
      response:
        "We're thrilled to hear that, Sarah! Our goal is to enhance customer experiences, and it's fantastic to see the positive impact on your service efficiency.",
    },
    {
      id: 2,
      name: "James R",
      title: "E-commerce Director",
      message:
        "The AI Text Chatbots have been a game changer for our online sales. Their hands-free approach requires 25% leading to higher conversion rates.",
      response:
        "That's wonderful news, James! We continuously strive to be available around the clock, ensuring your customers always have support when they need it.",
    },
    {
      id: 3,
      name: "Michael K",
      title: "Retail Business Owner",
      message:
        "Working with Voicecon has been a valuable investment. Their innovative technology has helped us streamline operations and improve customer experience significantly.",
      response:
        "We appreciate your kind words, Michael! We're dedicated to being a supportive partner as you leverage AI for operational excellence.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-16">
      <div className="relative max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <h2 className="font-['DM_Sans'] text-[48px] font-bold text-white">
            Voices from <span className="text-[#86BC29]">Our Clients</span>
          </h2>
          <button className="font-['DM_Sans'] flex items-center gap-2 px-6 py-3 bg-[#86BC29] rounded-lg text-black">
            Get in Touch <span>→</span>
          </button>
        </div>

        <p className="font-['DM_Sans'] text-base text-[#A9A9AD] mb-12">
          Here's what some of our clients have to say about their experiences
          with our AI Agents.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[400px] h-[514px] bg-[#080808] p-8 rounded-[20px] flex flex-col"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.21)",
                boxShadow: "0 0 10px rgba(134, 188, 41, 0.5)",
              }}
            >
              {/* Client Name */}
              <div className="font-['DM_Sans'] text-white text-base mb-4">
                {testimonial.name}
              </div>

              {/* "Looks Great 🔥" bubble */}
              <div className="self-start bg-white text-black font-['DM_Sans'] text-sm px-4 py-2 rounded-[20px] mb-2">
                Looks Great 🔥
              </div>

              {/* Client Message Bubble */}
              <div className="self-start bg-white text-black max-w-[280px] px-4 py-3 rounded-[20px] mb-4">
                <p className="font-['DM_Sans'] text-sm leading-[20px]">
                  {testimonial.message}
                </p>
              </div>

              {/* Voicecon AI Label */}
              <div className="font-['DM_Sans'] text-[#86BC29] text-sm self-end mr-2">
                Voicecon AI
              </div>

              {/* AI Response Bubble */}
              <div className="self-end bg-[#1E2D17] text-white max-w-[280px] px-4 py-3 rounded-[20px] mb-auto">
                <p className="font-['DM_Sans'] text-sm leading-[20px]">
                  {testimonial.response}
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-3 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src="/images/avatar-placeholder.png"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p className="font-['DM_Sans'] text-white text-sm">
                      {testimonial.name},
                    </p>
                    <p className="font-['DM_Sans'] text-[#A9A9AD] text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Voices;
