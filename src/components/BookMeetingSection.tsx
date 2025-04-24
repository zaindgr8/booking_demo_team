import React, { useEffect } from "react";
import { Calendar } from "lucide-react";

const BookMeetingSection = () => {
  useEffect(() => {
    // Load Cal.com script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://cal.com"});
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view"},
        calLink: "devmate-solutions/30min",
      });
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <div className="flex items-center justify-center mb-6">
            <Calendar className="w-8 h-8 mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Talk Tech. Talk Growth. Talk to the Experts.
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            Got an idea, curious about AI, or ready to build something big? -
            Let's make it happen!
          </p>
        </div>

        <div
          className="fade-in bg-black/50 rounded-lg p-4"
          style={{ minHeight: "600px" }}
        >
          <div
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            id="my-cal-inline"
          />
        </div>
      </div>
    </section>
  );
};

export default BookMeetingSection;
