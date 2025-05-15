import React, { useEffect, useState } from "react";

const PerLetterAnimation = ({ text = "Talk", color = "rgb(193, 21, 236)" }) => {
  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setAnimatedIndexes((prev) => [...prev, currentIndex]);
      currentIndex++;
      if (currentIndex >= text.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {Array.from(text).map((char, i) => (
        <div
          key={i}
          style={{
            position: "relative",
            display: "inline-block",
            transformOrigin: "50% 100%",
            color,
            opacity: animatedIndexes.includes(i) ? 1 : 0,
            transform: animatedIndexes.includes(i) ? "scale(1)" : "scale(0.5)",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            userSelect: "none",
          }}
        >
          {char}
        </div>
      ))}
    </div>
  );
};

export default PerLetterAnimation;
