import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="px-4 py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-green-600 font-medium mb-3"
              >
                LEARN TO DRIVE CONFIDENTLY
              </motion.p>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4"
              >
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="block text-green-700 text-5xl md:text-6xl font-bold"
                >
                  Drivers
                </motion.span>
                <motion.span
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="block text-2xl md:text-3xl font-semibold text-gray-900"
                >
                  Perfect companion for Driver's handbook
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="text-gray-700 text-lg mb-8 max-w-lg"
              >
                Our platform offers step-by-step driving lessons, engaging quizzes, and practical knowledge to help you become a skilled and confident driver.
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="h-1 w-24 bg-green-600 mb-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
                Start Learning
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side (Image Section) with improved image display */}
          <div className="order-1 md:order-2">
            <div className="relative h-96 md:h-full py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -top-16 -left-12 w-40 h-40 bg-green-100 rounded-full z-0"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-12 -right-12 w-32 h-32 bg-green-200 rounded-full z-0"
              />
              <motion.div
                className="relative z-10 h-full flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Main Car Image */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.8,
                    duration: 0.8
                  }}
                  className="absolute z-30 top-[-250px] right-[-50px] w-full max-w-md"
                >
                  <img
                    src="public/heropic1.jpg"
                    alt="Driver Learning Interface"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  />
                </motion.div>

                {/* Secondary Image */}
                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    delay: 1.1,
                    duration: 0.9
                  }}
                  className="absolute top-[-60px] left-0 md:left-2 z-50 w-full max-w-sm"
                >
                  <img
                    src="public/heropic3.jpg"
                    alt="Driving Lessons Dashboard"
                    className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  />
                </motion.div>

                {/* Floating UI Elements */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="absolute top-[-100px] right-[570px] bg-white p-4 rounded-lg shadow-lg z-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="absolute top-[-270px] right-[-70px]  bg-green-600 text-white p-5 rounded-full shadow-lg z-40"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;