import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, 5, {
        duration: 0.5,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.floor(value))
      });
      return () => controls.stop();
    }
  }, [inView]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (clientX - left) / width,
      y: (clientY - top) / height
    });
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const headingText = "Engineering Excellence for a Digital Future";
  const headingArray = headingText.split(" ");

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-white"
      initial="hidden"
      animate="visible"
    >
      {/* Dynamic Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "linear-gradient(45deg, #1B75BB 0%, #E31E24 100%)",
            "linear-gradient(45deg, #F7941D 0%, #1B75BB 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Enhanced Mouse Follow Effect */}
      <motion.div
        className="pointer-events-none absolute w-full h-full"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(27,117,187,0.1), transparent 20%),
            radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(227,30,36,0.08), transparent 30%)
          `,
        }}
        animate={{
          opacity: [0.6, 1],
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        {/* About Us Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="mb-8 sm:mb-12"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-[#1B75BB] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm font-semibold tracking-wider shadow-lg"
          >
            ABOUT US
          </motion.span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-8 sm:space-y-12">
            {/* Animated Main Heading */}
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
              {headingArray.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Animated Experience Counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="flex items-center gap-4 flex-wrap">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                  transition={{ duration: 0.4, ease: "backOut" }}
                  className="text-[100px] sm:text-[140px] lg:text-[180px] font-bold leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #E31E24, #1B75BB, #F7941D)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextStroke: '2px rgba(0,0,0,0.1)'
                  }}
                >
                  {count}+
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-4 sm:mt-8 lg:mt-16"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#1B75BB] via-[#E31E24] to-[#F7941D] bg-clip-text text-transparent"
                  >
                    YEARS
                  </motion.span>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-base sm:text-lg lg:text-xl text-gray-600 mt-2"
                  >
                    of Excellence
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600"
            >
              Founded in 2024, Yubhian Technologies is a next-gen software solutions company offering intelligent tools and mentorship for startups and students alike. We're proudly affiliated with MSME, Startup India, and AICTE.
            </motion.p>

            {/* Enhanced Quote Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
              className="bg-gradient-to-r from-[#1B75BB]/5 via-[#E31E24]/5 to-[#F7941D]/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg transition-all duration-300"
            >
              <Quote className="text-[#1B75BB] w-8 h-8 sm:w-12 sm:h-12 mb-4" />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-700"
              >
                "Our mission is to bridge the digital gap through software development and training for the next generation of innovators."
              </motion.p>
            </motion.div>
          </div>

          {/* Dual Image Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 sm:mt-12 lg:mt-0 grid grid-cols-12 gap-4 sm:gap-6"
          >
            {/* Main Hero Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="col-span-12 md:col-span-7 rounded-3xl overflow-hidden shadow-2xl relative group z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B75BB]/20 via-transparent to-[#E31E24]/20 opacity-0 group-hover:opacity-100 transition duration-500 mix-blend-overlay z-20" />
              
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Main Office View"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>

            {/* Secondary Image */}
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="col-span-12 md:col-span-5 rounded-3xl overflow-hidden shadow-xl relative group mt-4 sm:mt-8 md:mt-24 z-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7941D]/15 via-transparent to-[#1B75BB]/15 opacity-0 group-hover:opacity-100 transition duration-500 mix-blend-overlay z-20" />
              
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Team Collaboration"
                className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;