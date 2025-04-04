import React, { useState } from 'react';
import { Check, BookOpen, SplitSquareVertical, Trophy } from 'lucide-react';

function HowItWorks() {
  // State to track which step is being hovered
  const [hoveredStep, setHoveredStep] = useState(null);
  
  // Steps data
  const steps = [
    {
      icon: <BookOpen size={36} />,
      title: "Learn the Fundamentals",
      description: "Access our comprehensive learning materials designed to build a solid foundation. Each module is carefully crafted by experts in the field.",
      color: "#4CAF50"
    },
    {
      icon: <SplitSquareVertical size={36} />,
      title: "Practice with Exercises",
      description: "Apply your knowledge with our interactive exercises. These real-world scenarios will help you master concepts through practical application.",
      color: "#4CAF50"
    },
    {
      icon: <Check size={36} />,
      title: "Validate Your Skills",
      description: "Test your understanding with our assessment tools. Get detailed feedback on your progress and areas that need improvement.",
      color: "#4CAF50"
    },
    {
      icon: <Trophy size={36} />,
      title: "Achieve Certification",
      description: "Earn your official certification and showcase your expertise. Our credentials are recognized by leading industry partners.",
      color: "#4CAF50"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h3 className="text-green-700 font-medium text-lg uppercase tracking-wide mb-2">A SIMPLE, EFFECTIVE APPROACH</h3>
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
        </div>
        
        {/* Steps container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 transition-all duration-300 transform shadow-md hover:shadow-xl"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              style={{
                transform: hoveredStep === index ? 'translateY(-10px)' : 'translateY(0)',
              }}
            >
              {/* Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300"
                style={{ 
                  backgroundColor: hoveredStep === index ? step.color : 'rgba(76, 175, 80, 0.1)',
                  color: hoveredStep === index ? 'white' : step.color
                }}
              >
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;