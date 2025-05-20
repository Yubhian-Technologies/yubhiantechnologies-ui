import React from "react";

const initialServices = [
  {
    title: "E-Business Solutions",
    description:
      "Comprehensive digital solutions to transform your business operations and enhance your online presence.",
    icon: "💻",
  },
  {
    title: "Business Intelligence",
    description:
      "Data-driven insights and analytics to power your business decisions and strategy.",
    icon: "📊",
  },
  {
    title: "Database Systems",
    description:
      "Robust database solutions for efficient data management and storage.",
    icon: "🗃️",
  },
  {
    title: "Systems Integration",
    description:
      "Seamless integration of disparate systems for unified operations.",
    icon: "🔌",
  },
  {
    title: "Custom Application Development",
    description:
      "Tailored software solutions designed specifically for your business needs.",
    icon: "🛠️",
  },
  {
    title: "Career Guidance & Training",
    description:
      "Comprehensive training programs and career guidance for students and professionals.",
    icon: "🎓",
  },
];

const Services = () => {
  return (
    <>
      <style>{`
        /* Sparkle animation */
        @keyframes sparkle-flicker {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: sparkle-flicker 2.5s infinite;
          pointer-events: none;
          filter: drop-shadow(0 0 2px white);
        }
        .sparkle-1 { width: 6px; height: 6px; top: 15%; left: 10%; animation-delay: 0s; }
        .sparkle-2 { width: 4px; height: 4px; top: 40%; left: 80%; animation-delay: 0.3s; }
        .sparkle-3 { width: 5px; height: 5px; top: 70%; left: 30%; animation-delay: 0.6s; }
        .sparkle-4 { width: 3px; height: 3px; top: 50%; left: 50%; animation-delay: 0.9s; }
        .sparkle-5 { width: 6px; height: 6px; top: 30%; left: 60%; animation-delay: 1.2s; }
        .sparkle-6 { width: 5px; height: 5px; top: 10%; left: 70%; animation-delay: 1.5s; }
        .sparkle-7 { width: 4px; height: 4px; top: 60%; left: 20%; animation-delay: 1.8s; }
        .sparkle-8 { width: 3px; height: 3px; top: 35%; left: 40%; animation-delay: 2.1s; }
        .sparkle-9 { width: 6px; height: 6px; top: 80%; left: 70%; animation-delay: 2.4s; }
        .sparkle-10 { width: 4px; height: 4px; top: 25%; left: 85%; animation-delay: 2.7s; }
        .group:hover .sparkle {
          opacity: 1;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="py-8">
          {/* Simple Heading without effects */}
          <h1 className="text-4xl font-extrabold text-center mb-4 text-black">
            Our Services
          </h1>

          <p className="text-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full px-6 py-2 text-center mb-12 max-w-4xl mx-auto">
            We offer a comprehensive range of IT services designed to meet your business needs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {initialServices.map((service) => (
              <div
                key={service.title}
                className="group relative h-[250px] bg-white p-5 rounded-lg shadow-md cursor-pointer overflow-hidden
                           hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white
                           transition duration-300"
              >
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`sparkle sparkle-${i + 1}`}></div>
                ))}

                <div className="flex flex-col items-center justify-center h-full transition-transform duration-300 group-hover:translate-y-[-40px]">
                  <div className="text-5xl mb-2 transition-transform duration-300 group-hover:scale-75">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-center transition-transform duration-300 group-hover:scale-90">
                    {service.title}
                  </h3>
                </div>

                <p className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 text-center transition-opacity duration-300 text-sm leading-snug">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 bg-blue-50 rounded-lg px-8">
          <div className="max-w-4xl mx-auto text-center transition-transform duration-300 hover:scale-115 cursor-pointer">
            <h2 className="text-3xl font-bold mb-6 text-blue-700">
              Why Choose Yubhian Technologies?
            </h2>
            <p className="text-gray-600 mb-8">
              We believe in building strong, long-term partnerships and ensuring total customer
              satisfaction by anticipating and responding to the demands of the market. Our
              solutions prioritize quality, reliability, timely delivery, and cost-effectiveness.
            </p>
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700 
                         text-white px-6 py-3 rounded-full text-lg 
                         transition-transform duration-300
                         hover:scale-115"
            >
              Contact Us for More Information
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
