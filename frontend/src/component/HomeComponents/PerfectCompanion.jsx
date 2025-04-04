import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function PerfectCompanion() {
  // Refs for intersection observer
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  // Check if elements are in view
  const isInView1 = useInView(ref1, { once: true, threshold: 0.2 });
  const isInView2 = useInView(ref2, { once: true, threshold: 0.2 });
  const isInView3 = useInView(ref3, { once: true, threshold: 0.2 });

  // Animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Trigger animations when elements come into view
  useEffect(() => {
    if (isInView1) {
      controls1.start('visible');
    }
    if (isInView2) {
      controls2.start('visible');
    }
    if (isInView3) {
      controls3.start('visible');
    }
  }, [isInView1, isInView2, isInView3, controls1, controls2, controls3]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, type: "spring", stiffness: 200 }
    }
  };

  return (
    <section className="py-16 px-4 bg-green-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-green-600 font-medium mb-2">THE RIGHT WAY TO PREPARE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A perfect companion for the
            <span className="block">Driver's Handbook</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-20 bg-green-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={controls1}
              variants={cardVariants}
              className="mb-16"
            >
              <div className="flex items-start">
                <motion.div variants={iconVariants} className="mr-4 bg-green-600 text-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
                <div>
                  <motion.h3 variants={textVariants} className="text-2xl font-bold text-gray-900 mb-2">
                    Prepare more efficiently
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    It can be difficult to keep track of all the information in the Driver's Handbook. Practice tests are a way to help you integrate that knowledge and reinforce it without re-reading the same dull material.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref2}
              initial="hidden"
              animate={controls2}
              variants={cardVariants}
              className="mb-16"
            >
              <div className="flex items-start">
                <motion.div variants={iconVariants} className="mr-4 bg-green-600 text-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>
                <div>
                <motion.h3 variants={textVariants} className="text-2xl font-bold text-gray-900 mb-2">
                   Learn from your mistake
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    Instead of marking you incorrect and simply supplying the correct answer when you get a question wrong, each question has an explanation so you'll understand why a certain answer is correct and be able to remember it next time.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              ref={ref3}
              initial="hidden"
              animate={controls3}
              variants={cardVariants}
            >
              <div className="flex items-start">
                <motion.div variants={iconVariants} className="mr-4 bg-green-600 text-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <div>
                  <motion.h3 variants={textVariants} className="text-2xl font-bold text-gray-900 mb-2">
                    Review your toughest questions
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    Different sections of the G1 are difficult for different people; some struggle to remember distances or fines, while others might have issues with road rules. G1.ca is the only Ontario practice test site with the Challenge Bank™, where your incorrectly answered questions are stored automatically so that you can review and retake them until you're able to answer correctly.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 md:order-2"
          >
            <div className="relative">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-4 rounded-lg shadow-lg absolute -top-6 -left-6 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </motion.div>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="bg-green-600 rounded-lg shadow-lg p-4 absolute top-16 -right-4 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div className="bg-green-100 rounded-lg shadow-lg p-6">
                <div className="w-full h-full flex justify-center">
                  <img 
                    src="/PerfectCompanion.png" 
                    alt="Driver studying with practice tests" 
                    className="w-full object-contain rounded"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PerfectCompanion;