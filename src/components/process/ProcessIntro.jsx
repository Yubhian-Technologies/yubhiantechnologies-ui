import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProcessIntro = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          WORK PROCESS
        </motion.span>
        
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          See The Value In<br/>
          Our <span className="text-purple-600">IT Consulting</span> Solutions
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Our proven 8-step methodology ensures a seamless journey from concept to implementation,
          delivering exceptional value at every stage of your digital transformation.
        </motion.p>
      </div>
    </div>
  );
};

export default ProcessIntro;