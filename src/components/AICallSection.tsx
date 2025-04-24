import React, { useEffect } from "react";
import { Phone } from "lucide-react";

const AICallSection = () => {
  useEffect(() => {
    // Load Fillout script
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-6">
            <Phone className="w-8 h-8 mr-2" />
            <h2 className="text-3xl font-bold text-center mb-4">
              Get an AI Call in Just 5 Minutes
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            Let our 24/7 AI Agent call you now — it's not just a demo, it's your
            first step into the future of Tech & AI!
          </p>
        </div>

        <div className="fade-in" style={{ minHeight: "500px" }}>
          <div
            style={{ width: "100%", height: "500px" }}
            data-fillout-id="9ozo5hkcnZus"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          />
        </div>
      </div>
    </section>
  );
};

export default AICallSection;
