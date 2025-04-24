import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const CEOMessageSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/me.svg"
              alt="CEO of Devmate Solutions"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Message from Our CEO
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              "I am honored to lead an exceptional team committed to delivering
              outstanding services and achieving our goals with dedication. We
              take pride in partnering with industry leaders to shape the
              future. As a forward-thinking company, we are relentlessly working
              on AI and innovation to stay ahead. With our Vision 2030, we
              aspire to become a tech giant, create hundreds of jobs, and lead
              the tech industry. Join us on our journey toward excellence!"
            </p>
            <div className="mt-6">
              <p className="text-white font-semibold">Zain Ul Abideen</p>
              <p className="text-gray-400">CEO & Founder, Devmate Solutions</p>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex space-x-4">
              <a
                href="https://www.instagram.com/desigeek.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/zain-ul-abideen-baloch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC990B95EKNuVaCVcdo_-9Yg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessageSection;
