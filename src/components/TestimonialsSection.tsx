import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Al-Mansoori",
    review:
      "The AI call assistant transformed our customer service. It's like having a 24/7 multilingual team that never gets tired. The response time and accuracy are incredible!",
    country: "UAE",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    review:
      "Devmate's AI chatbot exceeded our expectations. It handles complex queries with human-like understanding and has reduced our support tickets by 60%. Game-changing technology!",
    country: "USA",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    review:
      "Our AI agent from Devmate has revolutionized our workflow. It's intelligent, efficient, and has significantly improved our productivity. The ROI was evident within weeks.",
    country: "France",
    rating: 5,
  },
  {
    name: "Mohammed Al-Rashid",
    review:
      "The AI solutions provided by Devmate have given us a competitive edge in the market. Their team's understanding of both technology and business needs is exceptional.",
    country: "Saudi Arabia",
    rating: 5,
  },
  {
    name: "James Wilson",
    review:
      "Working with Devmate's AI solutions has been transformative. Their AI agents are not just tools but strategic partners in our business growth. Highly recommended!",
    country: "UK",
    rating: 5,
  },
  {
    name: "Yusuf Hassan",
    review:
      "The AI solutions from Devmate have been instrumental in our digital transformation journey. Their AI agents have automated 80% of our routine tasks, allowing our team to focus on innovation.",
    country: "Turkey",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black/50 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.country}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
