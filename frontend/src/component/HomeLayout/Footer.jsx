import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };
  
  const linkVariants = {
    initial: { x: 0, color: '#e2e8f0' },
    hover: { 
      x: 8, 
      color: '#ffffff',
      transition: { duration: 0.3, ease: "easeOut" } 
    }
  };
  
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.2, 
      rotate: 5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 } 
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3, type: "spring" }
    },
    tap: { scale: 0.95 }
  };

  // Background circle animations
  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 0.07,
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  // Tag cloud animation
  const tagVariants = {
    initial: { y: 0 },
    hover: { 
      y: -5, 
      backgroundColor: '#4ade80',
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 relative overflow-hidden"
    >
      {/* Enhanced background patterns */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div 
          variants={circleVariants}
          className="absolute top-10 left-10 w-40 h-40 rounded-full border-8 border-white"
        ></motion.div>
        <motion.div 
          variants={circleVariants}
          className="absolute bottom-20 right-20 w-60 h-60 rounded-full border-4 border-white"
          style={{ transitionDelay: "0.3s" }}
        ></motion.div>
        <motion.div 
          variants={circleVariants}
          className="absolute top-40 right-60 w-20 h-20 rounded-full bg-white"
          style={{ transitionDelay: "0.6s" }}
        ></motion.div>
        <motion.div 
          variants={circleVariants}
          className="absolute bottom-40 left-60 w-32 h-32 rounded-full border-4 border-white opacity-30"
          style={{ transitionDelay: "0.9s" }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="flex" 
                whileHover={{ rotate: 360, transition: { duration: 0.7 } }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L4 8L8 12L12 8L8 4Z" fill="#4CAF50" />
                  <path d="M16 4L12 8L16 12L20 8L16 4Z" fill="white" stroke="#333" strokeWidth="1" />
                  <path d="M8 12L4 16L8 20L12 16L8 12Z" fill="white" stroke="#333" strokeWidth="1" />
                  <path d="M16 12L12 16L16 20L20 16L16 12Z" fill="#4CAF50" />
                </svg>
              </motion.div>
              <span className="font-bold text-xl tracking-wide">Nexcent</span>
            </div>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Nexcent is a privately owned website that is not affiliated with or operated by any state government agency.
            </p>
            <motion.a 
              href="#" 
              className="flex items-center text-sm mb-6 group"
              initial="initial"
              whileHover="hover"
            >
              <motion.div variants={iconVariants} className="mr-2">
                <MessageCircle size={18} className="text-green-300 group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Help Center</span>
            </motion.a>
            
            <div>
              <p className="font-medium mb-4">Connect with us</p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a 
                    key={index} 
                    href="#" 
                    className="bg-green-700 p-3 rounded-full hover:bg-green-500 transition-colors duration-300 shadow-lg"
                    initial="initial"
                    whileHover="hover"
                    variants={iconVariants}
                  >
                    <Icon size={18} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Resources column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 border-b border-green-500 pb-2 inline-block">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'Service Near Me', 'Driving Tips', 'VIN Number Search', 'Driving Statistics'].map((item, index) => (
                <motion.li key={index} initial="initial" whileHover="hover">
                  <motion.a 
                    href="#" 
                    className="text-gray-200 hover:text-white text-sm flex items-center group" 
                    variants={linkVariants}
                  >
                    <ChevronRight size={16} className="mr-2 text-green-300 group-hover:text-white transition-colors duration-300" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* About column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 border-b border-green-500 pb-2 inline-block">About</h3>
            <ul className="space-y-3">
              {['Who We Are', 'Terms and Privacy Policy', 'Contact Us', 'For Libraries', 'Partner Libraries'].map((item, index) => (
                <motion.li key={index} initial="initial" whileHover="hover">
                  <motion.a 
                    href="#" 
                    className="text-gray-200 hover:text-white text-sm flex items-center group"
                    variants={linkVariants}
                  >
                    <ChevronRight size={16} className="mr-2 text-green-300 group-hover:text-white transition-colors duration-300" />
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="font-bold text-xl mb-6 border-b border-green-500 pb-2 inline-block">Stay Updated</h3>
            <p className="text-sm text-gray-200 mb-5 leading-relaxed">Subscribe to our newsletter to get the latest updates and offers.</p>
            
            <div className="mb-8">
              <div className="flex shadow-lg rounded overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-green-700 text-white placeholder-gray-300 px-4 py-3 outline-none text-sm flex-grow focus:bg-green-600 transition-colors duration-300"
                />
                <motion.button 
                  className="bg-green-500 hover:bg-green-400 px-5 py-3 text-white font-medium transition-colors duration-300"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                >
                  Send
                </motion.button>
              </div>
            </div>
            
            <h3 className="font-bold text-lg mb-4">The Elegant E-Learning Network</h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'driving-tests.org', 
                'toptests', 
                'tests.ca', 
                'cna practice test', 
                'nurse.plus', 
                'bar prep hero',
                'driving games'
              ].map((site, index) => (
                <motion.a 
                  key={index} 
                  href="#" 
                  className="bg-green-700 px-3 py-2 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
                  variants={tagVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  {site}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-green-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-300">© 2010-{currentYear} Nexcent. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookies'].map((item, index) => (
              <motion.a 
                key={index}
                href="#" 
                className="text-sm text-gray-300 hover:text-white transition-colors duration-300 relative group"
                whileHover={{ y: -3, transition: { duration: 0.3, type: "spring" } }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;