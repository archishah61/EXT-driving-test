import React, { useState } from 'react';

const TestTabs = () => {
  const [activeTab, setActiveTab] = useState('car'); // Default to motorcycle tab
  
  // Test data for demonstration
  const testData = {
    car: {
      title: "Start your G1 Test Preparation",
      description: "Congratulations! You're now one step closer to passing your official G1 test. To help you get all the practice you need, we have prepared free practice tests that mimic the real test. Our questions are very similar (sometimes identical) to those in the official G1 Test. Our mock tests use the same scoring system used by MTO, which means you'll feel confident when you take the real test.",
      nextTest: "G1 Diagnostic Test",
      content: <DiagnosticTestSection />
    },
    motorcycle: {
      title: "Start your G1 Test Preparation",
      description: "Congratulations! You're now one step closer to passing your official G1 test. To help you get all the practice you need, we have prepared free practice tests that mimic the real test. Our questions are very similar (sometimes identical) to those in the official G1 Test. Our mock tests use the same scoring system used by MTO, which means you'll feel confident when you take the real test.",
      nextTest: "M1 Motorcycle License Practice Test 1",
      content: <MotorcycleHandbookSection />
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Tab Navigation - Using Nexcent styling */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <button
            className={`px-8 py-3 rounded-full transition-colors duration-300 ${
              activeTab === 'car' 
                ? 'bg-white text-gray-800 shadow-md' 
                : 'text-gray-600 hover:text-green-600'
            }`}
            onClick={() => setActiveTab('car')}
          >
            Car Tests
          </button>
          <button
            className={`px-8 py-3 rounded-full transition-colors duration-300 ${
              activeTab === 'motorcycle' 
                ? 'bg-white text-gray-800 shadow-md' 
                : 'text-gray-600 hover:text-green-600'
            }`}
            onClick={() => setActiveTab('motorcycle')}
          >
            Motorcycle Tests
          </button>
        </div>
      </div>

      {/* Content Section - Styled to match Nexcent theme */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">{testData[activeTab].title}</h1>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-center">{testData[activeTab].description}</p>
        
        <div className="flex justify-center mb-10">
          <button className="text-sm text-white font-medium px-6 py-3 bg-green-600 rounded-md hover:bg-green-700 transition duration-300">
            Next test: {testData[activeTab].nextTest} →
          </button>
        </div>
        
        {/* Content based on active tab */}
        {testData[activeTab].content}
      </div>
    </div>
  );
};

// Motorcycle Handbook Section Component - Styled for Nexcent
const MotorcycleHandbookSection = () => (
  <div>
    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold mr-3 text-gray-800">Motorcycle Handbook</h2>
      <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 1</span>
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row justify-between items-center mb-10 border border-gray-100">
      <div className="md:w-2/3">
        <h3 className="text-xl font-bold mb-3 text-gray-800">Official MTO Motorcycle Handbook</h3>
        <p className="text-gray-600 mb-6">
          The MTO recommends that you read the official Motorcycle Handbook. Please read it at least once, just to get a sense of the material.
        </p>
        <button className="border border-green-600 text-green-600 rounded-md px-5 py-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
          Read online
        </button>
      </div>
      <div className="relative mt-6 md:mt-0">
        <img 
          src="/api/placeholder/240/160" 
          alt="Motorcycle Handbook Cover" 
          className="rounded-lg shadow-sm" 
        />
        <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
          Text version
        </div>
      </div>
    </div>

    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold mr-3 text-gray-800">Easy</h2>
      <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 2</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm h-48 hover:shadow-md transition-shadow duration-300"></div>
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm h-48 hover:shadow-md transition-shadow duration-300"></div>
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm h-48 hover:shadow-md transition-shadow duration-300"></div>
    </div>
  </div>
);

// Diagnostic Test Section Component - Styled for Nexcent
const DiagnosticTestSection = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-800">Diagnostic Test</h2>
      <span className="text-green-600 text-sm hover:underline cursor-pointer">See how much you already know</span>
    </div>

    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="md:w-1/2 relative">
        <img 
          src="/api/placeholder/500/300" 
          alt="Intersection with traffic light" 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <div className="bg-green-600 text-white p-2 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors duration-300 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">G1 Diagnostic Test</h3>
        <p className="text-gray-600 mb-6">
          Just starting to prepare for the exam and not sure where to begin? Quickly identify gaps in your knowledge of driving in Ontario, Canada with this G1 Diagnostic Test. It contains the questions that are most often missed by our users.
        </p>
        <div className="flex justify-between mt-6">
          <div className="text-center px-4 py-2 bg-gray-50 rounded-md">
            <div className="font-bold text-xl text-gray-800">15</div>
            <div className="text-gray-500 text-sm">questions</div>
          </div>
          <div className="text-center px-4 py-2 bg-gray-50 rounded-md">
            <div className="font-bold text-xl text-gray-800">3 mistakes</div>
            <div className="text-gray-500 text-sm">Allowed to pass</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestTabs;