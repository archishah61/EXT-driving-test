import React, { useState } from 'react';

const EnhancedTestTabs = () => {
  const [activeTab, setActiveTab] = useState('car');

  // Test data for demonstration
  const testData = {
    car: {
      title: "Start your G1 Test Preparation",
      description: "Congratulations! You're now one step closer to passing your official G1 test. Our practice tests mimic the real test with similar questions and the same scoring system used by MTO, giving you the confidence to pass on your first attempt.",
      nextTest: "G1 Diagnostic Test",
      content: <CarTestSections />
    },
    motorcycle: {
      title: "Start your M1 Test Preparation",
      description: "Congratulations! You're now one step closer to passing your official M1 motorcycle test. Our practice tests mimic the real test with similar questions and the same scoring system used by MTO, giving you the confidence to pass on your first attempt.",
      nextTest: "M1 Motorcycle License Practice Test 1",
      content: <MotorcycleHandbookSection />
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 inline-flex">
          <button
            className={`px-8 py-3 rounded-full transition-colors duration-300 ${activeTab === 'car'
                ? 'bg-white text-gray-800 shadow-md'
                : 'text-gray-600 hover:text-green-600'
              }`}
            onClick={() => setActiveTab('car')}
          >
            Car Tests
          </button>
          <button
            className={`px-8 py-3 rounded-full transition-colors duration-300 ${activeTab === 'motorcycle'
                ? 'bg-white text-gray-800 shadow-md'
                : 'text-gray-600 hover:text-green-600'
              }`}
            onClick={() => setActiveTab('motorcycle')}
          >
            Motorcycle Tests
          </button>
        </div>
      </div>

      {/* Content Section */}
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

// Car Test Sections Component with Easy, Medium, Hard
const CarTestSections = () => {
  return (
    <div>
      {/* Handbook Section */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold mr-3 text-gray-800">Driver's Handbook</h2>
        <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 1</span>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg mb-10">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Official MTO Driver's Handbook</h3>
            <p className="text-gray-600 mb-6">
              The MTO recommends that you read the official Driver's Handbook. Please read it at least once, just to get a sense of the material.
            </p>
            <button className="border border-green-600 text-green-600 rounded-md px-5 py-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
              Read online
            </button>
          </div>
          <div className="md:w-1/3 relative">
            <img
              src="/testimg4.jpg"
              alt="Driver's Handbook Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
              Text version
            </div>
          </div>
        </div>
      </div>

      {/* Easy Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 text-white px-4 py-1 rounded-md font-bold mr-3">Easy</div>
          <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 2</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
            <div className="relative">
              <img
                src="/testimg1.jpg"
                alt="Test 1"
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 m-2 rounded">
                RECOMMENDED
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Practice Test 1</h3>
              <p className="text-gray-600 text-sm mb-3">
                A great place to start as it covers the basics of driving in Ontario. Each question comes with a hint and a detailed explanation.
              </p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <span className="font-bold text-gray-800 mr-1">20</span>
                  <span className="text-gray-500">questions</span>
                </div>
                <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  4 mistakes allowed
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
            <div className="relative">
              <img
                src="/testimg2.jpg"
                alt="Test 2"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Practice Test 2</h3>
              <p className="text-gray-600 text-sm mb-3">
                Questions cover roundabouts, intersections, overtaking other vehicles, and driving on highways. Two sections: Road Signs and Road Rules.
              </p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <span className="font-bold text-gray-800 mr-1">40</span>
                  <span className="text-gray-500">questions</span>
                </div>
                <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  8 mistakes allowed
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
            <div className="relative">
              <img
                src="/testimg3.jpg"
                alt="Test 3"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Practice Test 3</h3>
              <p className="text-gray-600 text-sm mb-3">
                This test challenges you on distracted driving fines, traffic lights, maximum speed limits, cell phone use, blood alcohol levels, and more.
              </p>
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <span className="font-bold text-gray-800 mr-1">40</span>
                  <span className="text-gray-500">questions</span>
                </div>
                <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  8 mistakes allowed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Medium Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="bg-yellow-500 text-white px-4 py-1 rounded-md font-bold mr-3">Medium</div>
          <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 3</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="/testimg4.jpg"
                  alt="Intermediate Test 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-5">
                <h3 className="font-bold text-lg mb-2">Intermediate Test 1</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Covers more challenging scenarios including emergency vehicles, school zones, and construction areas.
                </p>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 rounded-full px-3 py-1">
                      <span className="font-bold">30</span> questions
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    6 mistakes allowed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:scale-105 border-l-4 border-yellow-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img
                  src="/testimg5.jpg"
                  alt="Intermediate Test 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-5">
                <h3 className="font-bold text-lg mb-2">Intermediate Test 2</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Focused on traffic violations, demerit points, license suspensions, and insurance implications.
                </p>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 rounded-full px-3 py-1">
                      <span className="font-bold">35</span> questions
                    </div>
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                    7 mistakes allowed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hard Section */}
      <div>
        <div className="flex items-center mb-6">
          <div className="bg-red-600 text-white px-4 py-1 rounded-md font-bold mr-3">Hard</div>
          <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 4</span>
        </div>

        <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <span className="inline-block bg-red-600 text-xs font-bold tracking-wide uppercase px-2 py-1 rounded mb-4">
                  Advanced Challenge
                </span>
                <h3 className="text-2xl font-bold mb-3">Master G1 Test</h3>
                <p className="text-gray-300 mb-6">
                  Our toughest test with the most challenging questions. Mastering this test practically guarantees your success on the real G1 exam.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl font-bold">50</span>
                    <span className="text-sm text-gray-400 ml-2">questions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold">5</span>
                    <span className="text-sm text-gray-400 ml-2">mistakes allowed</span>
                  </div>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300 transform hover:scale-105">
                  Start Challenge
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <img
                    src="/testimg6.jpg"
                    alt="Master Test"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-red-600 text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs">PASS</div>
                      <div className="text-xl font-bold">90%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Motorcycle Handbook Section Component (maintained from original code)
const MotorcycleHandbookSection = () => (
  <div>
    {/* Handbook Section */}
    <div className="flex items-center mb-6">
      <h2 className="text-2xl font-bold mr-3 text-gray-800">Motorcycle Handbook</h2>
      <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 1</span>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg mb-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Official MTO Motorcycle Handbook</h3>
          <p className="text-gray-600 mb-6">
            The MTO recommends that you read the official Motorcycle Handbook. Please read it at least once, just to get a sense of the material.
          </p>
          <button className="border border-green-600 text-green-600 rounded-md px-5 py-2 hover:bg-green-600 hover:text-white transition-colors duration-300">
            Read online
          </button>
        </div>
        <div className="md:w-1/3 relative">
          <img
            src="/biketest1.jpg"
            alt="Motorcycle Handbook Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md">
            Text version
          </div>
        </div>
      </div>
    </div>

    {/* Easy Section */}
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-blue-600 text-white px-4 py-1 rounded-md font-bold mr-3">Easy</div>
        <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 2</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest2.jpg"
              alt="M1 Practice Test 1"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 m-2 rounded">
              RECOMMENDED
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Practice Test 1</h3>
            <p className="text-gray-600 text-sm mb-3">
              This M1 Practice Test contains 40 questions designed based on the official Ontario M1 Rider's handbook.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">40</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                8 mistakes allowed
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest3.jpg"
              alt="M1 Practice Test 2"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Practice Test 2</h3>
            <p className="text-gray-600 text-sm mb-3">
              Another set of exam-like questions that will test your basic knowledge of motorcycle riding in Ontario, as well as traffic signs and road rules.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">40</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                8 mistakes allowed
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest4.jpg"
              alt="M1 Practice Test 3"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Practice Test 3</h3>
            <p className="text-gray-600 text-sm mb-3">
              Questions on dealing with tailgaters, swerving, crossing a railway crossing safely, and more.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">40</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                8 mistakes allowed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Hard Section */}
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <div className="bg-red-600 text-white px-4 py-1 rounded-md font-bold mr-3">Hard</div>
        <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 3</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Hard Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest5.jpg"
              alt="M1 Fines and Limits"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Fines and Limits</h3>
            <p className="text-gray-600 text-sm mb-3">
              One of our hardest practice tests. Contains questions on fines, speed limits, regulations, traffic citations, insurance, DUI, and the points system.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">20</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                4 mistakes allowed
              </div>
            </div>
          </div>
        </div>

        {/* Hard Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest6.jpg"
              alt="M1 Road Signs"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Road Signs</h3>
            <p className="text-gray-600 text-sm mb-3">
              Just the road signs. Every traffic sign you need to know to ride safely in Ontario.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">100</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                20 mistakes allowed
              </div>
            </div>
          </div>
        </div>

        {/* Hard Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-1">
          <div className="relative">
            <img
              src="/biketest7.jpg"
              alt="M1 Marathon"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">M1 Marathon</h3>
            <p className="text-gray-600 text-sm mb-3">
              Designed to give you more practice, contains questions from all other practice tests, but with a twist: it'll cycle through them until you've answered each correctly.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center">
                <span className="font-bold text-gray-800 mr-1">All 240</span>
                <span className="text-gray-500">questions</span>
              </div>
              <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                0 mistakes allowed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Exam Simulator */}
    <div>
      <div className="flex items-center mb-6">
        <div className="bg-purple-600 text-white px-4 py-1 rounded-md font-bold mr-3">Exam Simulator</div>
        <span className="bg-gray-100 text-gray-600 text-sm py-1 px-3 rounded-full">Step 4</span>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg mb-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/biketest8.jpg"
              alt="M1 Test Simulator"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 text-white">
            <h3 className="text-2xl font-bold mb-4">M1 Test Simulator</h3>
            <p className="text-gray-300 mb-6">
              Based on the official ON Motorcycle Handbook and imitates the actual M1 exam in every way. Contains 24 motorcycle questions, 20 road sign questions, and 20 general (G1) road rule questions.
            </p>
            <div className="flex items-center space-x-8 mb-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">24</span>
                <span className="text-sm text-gray-400">random questions</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">5</span>
                <span className="text-sm text-gray-400">mistakes allowed</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition duration-300 transform hover:scale-105">
                Start Simulator
              </button>
              <div className="text-gray-400 text-sm">
                Complete at least 3 times
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EnhancedTestTabs;