import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className="relative w-full overflow-hidden bg-black py-16">
      {/* Sphere Background */}
      <div
        className="absolute w-[1261px] h-[1261px] bottom-[-400px] left-1/2 -translate-x-1/2
        rounded-full mix-blend-screen pointer-events-none"
        style={{
          background:
            "linear-gradient(0deg, #86BC29 -1.35%, rgba(11, 11, 9, 0) 36.74%)",
          opacity: 0.7,
          boxShadow:
            "0 0 113.49px #0D0E0B, 0 0 226.98px #0D0E0B, 0 0 794.43px #0D0E0B, 0 0 1588.86px #0D0E0B, 0 0 2723.76px #0D0E0B, 0 0 4766.58px #0D0E0B",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 relative z-10">
        {/* Header */}
        <h2 className="font-['DM_Sans'] text-[48px] font-bold text-center mb-2">
          Send us a <span className="text-[#86BC29]">Message</span>
        </h2>
        <p className="font-['DM_Sans'] text-base text-center text-[#A9A9AD] mb-16">
          Send us a message, and our team will respond promptly to assist you
          with any inquiries!
        </p>

        {/* Form Container */}
        <div className="bg-[#000000B8] rounded-[20px] border border-[#FFFFFF36] shadow-[0px_4px_4px_0px_#00000040] p-12 max-w-[1248px] mx-auto mb-32">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#FFFFFF36] rounded-lg px-4 py-3 text-white placeholder-[#A9A9AD] font-['DM_Sans'] focus:outline-none focus:border-[#86BC29]"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#FFFFFF36] rounded-lg px-4 py-3 text-white placeholder-[#A9A9AD] font-['DM_Sans'] focus:outline-none focus:border-[#86BC29]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border border-[#FFFFFF36] rounded-lg px-4 py-3 text-white placeholder-[#A9A9AD] font-['DM_Sans'] focus:outline-none focus:border-[#86BC29]"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full bg-transparent border border-[#FFFFFF36] rounded-lg px-4 py-3 text-white placeholder-[#A9A9AD] font-['DM_Sans'] focus:outline-none focus:border-[#86BC29] resize-none"
              />
            </div>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="text-center mb-16">
          <h3 className="font-['DM_Sans'] text-[40px] font-bold text-white mb-4">
            Let's Put Your Calls/Conversations on{" "}
            <span className="text-[#86BC29]">Autopilot</span>
          </h3>
          <p className="font-['DM_Sans'] text-base text-[#A9A9AD] max-w-[800px] mx-auto mb-8">
            Automate routine calls and elevate your customer service efficiency
            with our generative AI solutions. Experience effortless, human-like
            AI phone calls that enhance customer interactions and streamline
            communication.
          </p>
          <button className="bg-[#86BC29] text-black px-6 py-3 rounded-lg font-['DM_Sans'] text-base font-medium hover:bg-[#7DAF2A] transition-colors duration-200 flex items-center gap-2 mx-auto">
            Book a Call
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
