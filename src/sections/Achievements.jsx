import React, { useState, useEffect, useRef } from "react";
import background from "./../assets/background.png";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Trophy, Users, Briefcase, Award } from "lucide-react";

const achievementsData = [
  { icon: Trophy, count: 20, label: "Projects Completed" },
  { icon: Users, count: 20, label: "Satisfied Clients" },
  { icon: Briefcase, count: 2, label: "Years of Experience" },
  { icon: Award, count: 10, label: "Team Members" },
];

const Digit = ({ value }) => (
  <motion.span
    key={value}
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 20, opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="inline-block"
  >
    {value}
  </motion.span>
);

const AnimatedNumber = ({ number }) => {
  const digits = number.toString().split("");
  return (
    <div className="flex space-x-0.5 justify-center">
      {digits.map((digit, index) => (
        <AnimatePresence key={index} mode="wait">
          <Digit value={digit} />
        </AnimatePresence>
      ))}
    </div>
  );
};

const AchievementCard = ({ icon: Icon, count, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [localCount, setLocalCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const gradientColors = ["from-[#3b82f6] to-[#8b5cf6]"];
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradientColors.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isInView) {
      const duration = 2500;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const eased = Math.pow(progress, 2.5);
        const value = Math.floor(eased * count);
        setLocalCount(value);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
        transition: { duration: 0.6, delay: 0.2 },
      }}
      className="w-full sm:w-1/2 lg:w-1/4 px-4 py-6"
    >
      <motion.div
        className={`relative bg-transparent rounded-xl p-6  overflow-hidden transition-all duration-300 ${
          isHovered
            ? "scale-105 border-4 border-white/30 shadow-xl"
            : "scale-100 border border-transparent"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            backgroundImage: `bg-gradient-to-r from-blue-600 to-purple-600 
                         hover:from-blue-700 hover:to-purple-700`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
          <Icon className="w-10 h-10 text-white/90" />
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            <AnimatedNumber number={localCount} />
            {/* {count !== 2 && (
              <span className="text-xl text-white/70 ml-1">+</span>
            )} */}
          </div>
          <p className="text-md sm:text-lg text-white/80 text-center">
            {label}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const isHeadingVisible = useInView(headingRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 transition-all duration-500 bg-cover bg-center bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6]"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 13, 255, 1) 0%, rgba(193, 21, 236, 1) 100%);`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isHeadingVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            We are Happy for Our Achievements
          </motion.h2>

          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            We have consistently delivered exceptional results, earning the
            trust of our clients and achieving significant milestones. Here are
            some of our key achievements.
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          {achievementsData.map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
