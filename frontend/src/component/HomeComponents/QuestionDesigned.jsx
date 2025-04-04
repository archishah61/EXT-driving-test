import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

function QuestionDesigned() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions designed to feel
            <span className="block">just like the real experience</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </motion.div>
                <div>
                  <motion.h3 variants={textVariants} className="text-2xl font-bold text-gray-900 mb-2">
                    Specific to Ontario
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    While some sites will provide you with a mix of questions based on MTO G1 rules and questions based on other sources, we write all our original questions with information straight from the official Driver's Handbook.
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
                    Current and correct
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    Our practice tests are written using the latest version of the Handbook, so they're always up-to-date. We monitor when a new issue comes out, and update any questions if necessary, so you're never dealing with out-of-date test information.
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>
                <div>
                  <motion.h3 variants={textVariants} className="text-2xl font-bold text-gray-900 mb-2">
                    Almost like the real exam
                  </motion.h3>
                  <motion.p variants={textVariants} className="text-gray-700 leading-relaxed">
                    Because we design our questions to feel and our tests to function just like the real thing, you'll be better prepared than if you just study using the Handbook.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <div className="bg-green-100 rounded-lg shadow-lg p-6">
                <div className="w-full h-full flex justify-center">
                  <img 
                    src="/QuestionDesigned.png" 
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

export default QuestionDesigned;