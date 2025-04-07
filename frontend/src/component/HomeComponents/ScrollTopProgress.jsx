import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTopProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
    
    // Show button only after scrolling down a bit
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const strokeDasharray = 100;
  const strokeDashoffset = strokeDasharray - (scrollPercent / 100) * strokeDasharray;

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center z-50 group hover:scale-105 transition-all duration-300"
      aria-label="Scroll to top"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced SVG Progress Circle */}
      <svg className="absolute w-16 h-16 rotate-[-90deg]" viewBox="0 0 50 50">
        {/* Background track */}
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="rgba(209, 250, 229, 0.3)"
          strokeWidth="3"
          fill="none"
        />
        {/* Progress circle with gradient */}
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="url(#circleGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          initial={false}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.2 }}
        />
        {/* Define gradient for progress circle */}
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Enhanced Arrow Icon */}
      <motion.div
        className="z-10 text-white"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <svg
          className="w-7 h-7"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4L12 20M12 4L6 10M12 4L18 10"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      
      {/* Optional subtle glow effect */}
      <div className="absolute inset-0 rounded-full bg-emerald-400 blur-md opacity-20"></div>
    </motion.button>
  );
};

export default ScrollToTopProgress;