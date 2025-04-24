import React from "react";
import { Brain, Rocket, Sparkles, Target, Users } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Devmate Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and Icons */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Brain className="w-8 h-8 text-blue-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-purple-500" />
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 backdrop-blur-sm border border-gray-800">
              <img
                src="/about-illustration.svg"
                alt="AI Innovation"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                At Devmate Solutions, we don't just build software — we engineer
                the future.
              </p>

              <div className="flex items-start space-x-4">
                <Sparkles className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  We are an AI Automation agency committed to transforming how
                  businesses operate through intelligent, industry-specific
                  solutions. From AI call assistants that speak with purpose, to
                  smart chatbots that solve real problems, and autonomous agents
                  that streamline workflows — we build digital tools that think,
                  talk, and act for you.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Our expertise spans across sectors like real estate,
                  hospitality, dental clinics, consultancy firms, and HR
                  agencies, helping them scale with smart automation and
                  cutting-edge AI.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Whether you're looking to automate client interactions,
                  accelerate service delivery, or explore AI for the first time
                  — Devmate is your trusted partner in innovation.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xl font-semibold text-white italic">
                  We're not here to follow trends.
                  <br />
                  We're here to create what's next — and bring the future a
                  little closer to today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
