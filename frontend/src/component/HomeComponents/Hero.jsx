import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import hero1 from '../../../public/blueheropic.jpg'
import hero2 from '../../../public/greenheropic.jpg'
import hero3 from '../../../public/pinkheropic.jpg'

export default function Hero() {
  // Theme data for slides
  const slides = [
    {
      id: 1,
      title: "Lessons and insights",
      subtitle: "from 8 years",
      description: "Where to grow your business as a photographer: site or social media?",
      buttonText: "Register",
      color: "green",
      gradientFrom: "from-green-400",
      gradientTo: "to-teal-500",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      image: hero2, // Green-themed image
    },
    {
      id: 2,
      title: "Streamline your workflow",
      subtitle: "with smart tools",
      description: "Automate repetitive tasks and focus on what truly matters for your business.",
      buttonText: "Learn More",
      color: "blue",
      gradientFrom: "from-blue-400",
      gradientTo: "to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      image: hero1, // Blue-themed image
    },
    {
      id: 3,
      title: "Grow your audience",
      subtitle: "exponentially",
      description: "Use data-driven strategies to reach new customers and expand your market reach.",
      buttonText: "Get Started",
      color: "purple",
      gradientFrom: "from-purple-400",
      gradientTo: "to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      image: hero3, // Pink-themed image
    }
  ];

  return (
    <div className="w-full bg-white overflow-hidden relative">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-40">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 250,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="w-full h-full py-12 z-10 relative"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="max-w-[90%] md:max-w-[70%] slide-animation">
            <div className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 py-16 ${slide.bgColor} rounded-xl shadow-lg border border-white border-opacity-20 backdrop-filter backdrop-blur-sm h-[600px]`}>
              {/* Content Area */}
              <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 z-10">
                <div className="slide-content">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 bg-${slide.color}-100 text-${slide.color}-800 animate-pulse-slow`}>
                    Featured
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative">
                    {slide.title}
                    <span className={`block text-${slide.color}-500 mt-2`}>{slide.subtitle}</span>
                    <div className={`h-1 w-16 bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientTo} rounded mt-4 animate-expand`}></div>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <button className={`bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientTo} text-white font-medium py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group`}>
                    <span className="relative z-10">{slide.buttonText}</span>
                    <div className="absolute inset-0 h-full w-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>

              {/* Image Area with animated decorations */}
              <div className="w-full md:w-1/2 z-0 flex items-center justify-center">
                <div className="relative perspective">
                  {/* Decorative elements specific to each slide */}
                  <div className={`absolute -top-6 -left-6 w-24 h-24 bg-${slide.color}-100 rounded-full opacity-70 animate-pulse`}></div>
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-${slide.color}-200 rounded-full opacity-60 animate-pulse delay-300`}></div>

                  {/* Floating shapes */}
                  <div className={`absolute top-1/4 -left-4 w-12 h-12 ${slide.color === 'green' ? 'bg-emerald-300' : slide.color === 'blue' ? 'bg-sky-300' : 'bg-fuchsia-300'} rounded-lg opacity-50 animate-float-slow`}></div>
                  <div className={`absolute bottom-1/4 right-0 w-16 h-16 ${slide.color === 'green' ? 'bg-teal-200' : slide.color === 'blue' ? 'bg-indigo-200' : 'bg-violet-200'} rounded-full opacity-60 animate-float animation-delay-1000`}></div>

                  {/* Main image with enhanced effects */}
                  <div className="image-container relative transform hover:rotate-1 transition-all duration-700 ease-in-out">
                    <div className={`absolute inset-0 bg-gradient-to-tr ${slide.gradientFrom} ${slide.gradientTo} opacity-20 rounded-lg -m-2 blur-lg animate-pulse-slow`}></div>
                    <img
                      src={slide.image}
                      alt={`Slide ${slide.id}`}
                      className="relative z-10 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-700 ease-in-out object-cover h-64 w-full"
                    />

                    <div className="absolute inset-0 border-2 border-white border-opacity-20 rounded-lg transform scale-105 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        /* Enhanced slide content animation */
        .slide-content {
          opacity: 0;
          transform: translateY(20px);
          animation: slideUp 0.8s ease-out forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Enhanced floating animations */
        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .animation-delay-4000 {
          animation-delay: 4000ms;
        }

        .animation-delay-6000 {
          animation-delay: 6000ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        /* Blob animation for background */
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        .animate-blob {
          animation: blob 15s infinite alternate;
        }

        /* Pulse animation (slower than default) */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Expanding underline animation */
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 4rem;
          }
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        /* Perspective effect */
        .perspective {
          perspective: 1000px;
        }
        
        .image-container {
          transform-style: preserve-3d;
        }

        /* Enhanced slide animation */
        .slide-animation {
          transition: transform 0.8s ease, opacity 0.8s ease;
        }

        /* Custom Swiper Styles */
        :global(.swiper-pagination) {
          position: absolute;
          bottom: -20px;
          display: flex;
          justify-content: center;
          width: 100%;
          padding-top: 2rem;
          padding-bottom: 1rem;
        }

        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(226, 232, 240, 0.8);
          opacity: 1;
          margin: 0 8px;
          transition: all 0.3s ease;
          position: relative;
        }

        :global(.swiper-pagination-bullet)::after {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          border-radius: 50%;
          border: 1px solid rgba(34, 197, 94, 0.3);
          opacity: 0;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #22c55e; /* Green color */
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }

        :global(.swiper-pagination-bullet-active)::after {
          opacity: 1;
          animation: ripple 2s ease-out infinite;
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          opacity: 0.3;
          transform: scale(0.8);
          filter: blur(2px);
          transition: all 0.7s ease;
        }

        :global(.swiper-slide-active) {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        }

        :global(.swiper-container) {
          padding-bottom: 60px;
        }
      `}</style>
    </div>
  );
}