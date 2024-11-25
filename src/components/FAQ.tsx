import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(2);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What types of AI Agents do you offer?",
      answer:
        "We offer two main types of AI Agents: AI Voice Agents and AI Text Chatbots. Our Voice Agents handle phone calls with human-like conversation capabilities, while our Text Chatbots provide intelligent responses across websites, messaging platforms, and social media channels. Both solutions are customizable to meet your specific business needs.",
    },
    {
      id: 2,
      question: "How do you ensure the quality of your projects?",
      answer:
        "Quality is paramount for us. We implement a rigorous testing phase that lasts a minimum of two weeks, with options extending up to six weeks. Additionally, our maintenance package includes prompt upgrades and bug fixes to keep your AI solutions running smoothly.",
    },
    {
      id: 3,
      question: "How can AI Voice Agents benefit my retail business",
      answer:
        "AI Voice Agents can significantly enhance your retail operations by handling customer inquiries 24/7, processing orders automatically, providing product information, managing appointments, and reducing wait times. They can also collect valuable customer feedback and handle peak call volumes without additional staffing costs.",
    },
    {
      id: 4,
      question: "What types of businesses can benefit from AI Text Chatbots?",
      answer:
        "AI Text Chatbots are versatile solutions suitable for various businesses, including e-commerce, healthcare, financial services, hospitality, and education. They excel in customer support, lead generation, appointment scheduling, and providing instant responses to common queries, making them valuable for any business looking to improve customer engagement.",
    },
    {
      id: 5,
      question: "How does the pricing structure work?",
      answer:
        "Our pricing structure is transparent and flexible, with two main tiers: AI Bot Creator starting at $299/month with a $2500 setup fee, and AI Voice Agents starting at $399/month with a $3000 setup fee. Both plans include comprehensive features, maintenance, and support. We also offer yearly subscriptions with a 25% discount.",
    },
    {
      id: 6,
      question: "Can I customize the AI solutions for my business?",
      answer:
        "Yes, all our AI solutions are fully customizable to match your brand voice, business processes, and specific requirements. We work closely with you during the implementation phase to ensure the AI agents understand your industry terminology, company policies, and unique customer interaction patterns.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-black py-32">
      <div className="relative max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-['DM_Sans'] text-[48px] font-bold">
            Frequently Asked <span className="text-[#86BC29]">Questions</span>
          </h2>
          <p className="font-['DM_Sans'] text-[#A9A9AD] text-base max-w-[800px] mx-auto mt-4">
            We've compiled a list of the most frequently asked questions about
            SmartNotes to help you get the information you need. If you have any
            other questions, feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="w-full max-w-[800px]">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-3">
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className={`w-full flex items-center justify-between px-6 py-4 
                transition-colors duration-200 border
                ${
                  openId === item.id
                    ? "bg-white border-white rounded-t-lg"
                    : "bg-[#080808] border-[#1A1A1A] hover:border-[#86BC29] rounded-lg"
                }`}
              >
                <span
                  className={`font-['DM_Sans'] text-xl font-bold leading-7
                  ${openId === item.id ? "text-black" : "text-white"}`}
                >
                  {item.question}
                </span>
                <span
                  className={
                    openId === item.id ? "text-black" : "text-[#86BC29]"
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform duration-200
                    ${openId === item.id ? "rotate-90" : ""}`}
                  >
                    <path
                      d="M3.33337 8H12.6667"
                      stroke={openId === item.id ? "black" : "#86BC29"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 3.33331L12.6667 7.99998L8 12.6666"
                      stroke={openId === item.id ? "black" : "#86BC29"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              {openId === item.id && (
                <div className="w-full bg-white rounded-b-lg px-6 py-4 border border-t-0 border-white">
                  <p className="font-['DM_Sans'] text-base font-normal leading-6 text-[#333333]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
