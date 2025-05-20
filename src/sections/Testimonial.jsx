import React, { useState, useEffect, useRef } from "react";
import testimonials from "../assets/testimonials.json";

const BLINK_INTERVAL = 500; // ms
const SLIDE_INTERVAL = 2000; // ms

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [blink, setBlink] = useState(0);
  const slideTimeout = useRef();
  const blinkTimeout = useRef();

  // Slideshow effect
  useEffect(() => {
    slideTimeout.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, SLIDE_INTERVAL);
    return () => clearTimeout(slideTimeout.current);
  }, [current]);

  // Blinking circles effect
  useEffect(() => {
    blinkTimeout.current = setTimeout(() => {
      setBlink((prev) => (prev + 1) % 3);
    }, BLINK_INTERVAL);
    return () => clearTimeout(blinkTimeout.current);
  }, [blink]);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonial-section flex flex-col md:flex-row items-center justify-between py-16 px-8 bg-gradient-to-br from-blue-50 to-white">
      {/* Left Side */}
      <div className="left md:w-1/2 w-full mb-10 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          We Want The Best <br /> Work For Us!
        </h2>
        <p className="text-gray-500 mb-6">
          Collaborate Consulting exists to find the place where to being seemingly disparate interests meet.
        </p>
        <div className="flex items-center gap-6 mb-8">
          <span className="text-fuchsia-600 font-bold text-2xl flex items-center">
            Lets Talk <span className="ml-2">🤝</span>
          </span>
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-900 transition">Contact Us</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right md:w-1/2 w-full flex justify-center items-end">
        <div className="relative flex flex-col items-end">
          {/* Navigation Arrows - outside card, bottom left */}
          <div className="absolute left-10 bottom-18 flex gap-3 z-20">
            <button
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-105 transition"
              onClick={prev}
              aria-label="Previous testimonial"
            >&#8592;</button>
            <button
              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center text-2xl shadow hover:scale-105 transition"
              onClick={next}
              aria-label="Next testimonial"
            >&#8594;</button>
          </div>
          {/* Testimonial Card */}
          <div className="testimonial-card bg-white rounded-3xl shadow-lg p-10 max-w-xl min-w-[350px] relative flex flex-col" style={{ minHeight: '370px' }}>
            {/* Gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-full rounded-3xl z-0" style={{background: 'radial-gradient(circle at 20% 20%, #e0c3fc 0%, #ffffff 80%)', opacity: 0.3}}></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-4 border-white shadow" />
                <div>
                  <div className="font-bold text-xl text-blue-700">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.title}</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-8 max-h-32 overflow-y-auto">
                “ {t.text} ”
              </p>
              <div className="flex-1"></div>
              {/* Bottom row: rating, stars */}
              <div className="  flex flex-col items-end absolute -bottom-10 right-0">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex gap-1">
                    {[...Array(5)].map((_, i) => (<svg  key={i}  width="22"  height="22"  fill={i < t.rating ? "#C026D3" : "#E5E7EB"} // Purple if rated, gray otherwise  viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                    ))}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          {/* Dots for manual navigation (optional, can be moved if needed) */}
          <div className="flex justify-center gap-2 mt-6 w-full">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current ? "bg-fuchsia-600" : "bg-fuchsia-200"
                }`}
                onClick={() => goTo(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
