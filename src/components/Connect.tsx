import React, { useState } from "react";
import { Phone } from "lucide-react";

const Connect: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <h2 className="font-['DM_Sans'] text-[48px] font-bold text-center mb-6">
          Let&apos;s <span className="text-[#86BC29]">Connect</span>
        </h2>
        <p className="font-['DM_Sans'] text-base text-center text-[#A9A9AD] mb-16">
          We&apos;d love to hear from you! Explore how Voicecon can transform
          your business.
        </p>

        {/* Outer Container */}
        <div className="bg-[#000000B8] rounded-[20px] border border-[#FFFFFF36] shadow-[0px_4px_4px_0px_#00000040] p-12 max-w-[1248px] mx-auto">
          {/* Inner Container */}
          <div className="bg-[#0000007A] rounded-[20px] border border-[#FFFFFF36] shadow-[0px_4px_10px_0px_#86BC293B] p-10 flex gap-12">
            {/* Left Section */}
            <div className="w-1/2 border-r border-[#1A1A1A] pr-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-[#86BC29] rounded-lg flex items-center justify-center">
                  <img
                    src="/voicecon-logo.svg"
                    alt="Voicecon"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-white font-['DM_Sans'] text-xl">
                  Voicecon
                </span>
              </div>

              <div className="flex items-center gap-3 text-[#A9A9AD] mb-4">
                <span className="inline-block w-5 h-5">⏱️</span>
                <span className="font-['DM_Sans'] text-base">30 min</span>
              </div>

              <div className="flex items-center gap-3 text-[#A9A9AD] mb-6">
                <Phone className="w-5 h-5" />
                <span className="font-['DM_Sans'] text-base">Phone call</span>
              </div>

              <p className="text-[#A9A9AD] text-base mb-6 font-['DM_Sans'] leading-relaxed">
                Book a free 30-minute discovery call to discuss AI Voice Agents
                & AI Text Chatbots.
              </p>

              <p className="text-[#A9A9AD] text-base font-['DM_Sans']">
                Note: We do not provide any white-labeling services.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-1/2 pl-12">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-white font-['DM_Sans'] text-lg">
                  Select a Date & Time
                </h4>
                <div className="flex items-center gap-4 text-[#A9A9AD]">
                  <button
                    onClick={handlePrevMonth}
                    className="hover:text-white transition-colors duration-200 text-xl"
                  >
                    ←
                  </button>
                  <span className="font-['DM_Sans'] text-base">
                    {currentMonth.toLocaleString("default", { month: "long" })}{" "}
                    {currentMonth.getFullYear()}
                  </span>
                  <button
                    onClick={handleNextMonth}
                    className="hover:text-white transition-colors duration-200 text-xl"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-8">
                {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                  (day) => (
                    <div
                      key={day}
                      className="text-center text-[#A9A9AD] text-xs mb-4 font-['DM_Sans']"
                    >
                      {day}
                    </div>
                  )
                )}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                  <div
                    key={i}
                    className="text-center text-transparent text-xs mb-4 font-['DM_Sans']"
                  >
                    .
                  </div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => (
                  <div
                    key={i}
                    onClick={() => handleDateClick(i + 1)}
                    className={`text-center py-2 text-base cursor-pointer ${
                      selectedDate === i + 1
                        ? "bg-[#86BC29] text-black rounded-md"
                        : "text-white hover:bg-[#86BC29]/10 rounded-md transition-colors duration-200"
                    } font-['DM_Sans']`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center text-base mb-8">
                {/* <span className="text-[#A9A9AD] font-['DM_Sans']">
                  Time zone
                </span> */}
                <span className="text-[#A9A9AD] font-['DM_Sans']">
                  Central European Time (UTC+1)
                </span>
              </div>

              <button className="w-full bg-transparent border border-white text-white py-2 rounded-lg font-['DM_Sans'] text-sm hover:bg-[#354914] transition-colors duration-200">
                Troubleshooting
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-8 px-10">
            <button className="text-[#86BC29] text-sm hover:text-[#7DAF2A] transition-colors duration-200 font-['DM_Sans']">
              Cookie settings
            </button>
            <button className="text-[#86BC29] text-sm hover:text-[#7DAF2A] transition-colors duration-200 font-['DM_Sans']">
              Report abuse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
