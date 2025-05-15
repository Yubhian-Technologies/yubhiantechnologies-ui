import React, { useEffect, useState } from "react";

const BlinkingCircles = ({ heading, circleCount = 3, interval = 500 }) => {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCount((prev) => (prev + 1) % (circleCount + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [circleCount, interval]);

  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-blue-600 font-semibold text-sm">{heading}</span>
      <span className="flex gap-1">
        {Array.from({ length: circleCount }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full inline-block transition-all duration-300 ${
              i < activeCount ? "bg-blue-600 opacity-100" : "bg-purple-200 opacity-50"
            }`}
          ></span>
        ))}
      </span>
    </div>
  );
};

export default BlinkingCircles;
