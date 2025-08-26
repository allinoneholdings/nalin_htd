import React from 'react';
import { useNavigate } from 'react-router';

const Group2 = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-black/30 backdrop-blur-md rounded-xl shadow-lg">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-3xl font-semibold mb-4 text-primary text-center lg:text-left">
          KIDS DRIVING AGE 7 to 11
        </h2>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="http://howtodrive.lk/images/Age-7-111.JPG"
            alt="group2"
            className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-primary">Course Summary</h1>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">Course Details:</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Course Duration: 10 Days (1 Hour / day)</li>
              <li>Medium: English / Sinhala</li>
              <li>Instructor: Experienced Trainers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Activities:</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Puzzles & Colouring</li>
              <li>Cycling and Road Safety</li>
              <li>First Aid Basics</li>
              <li>Car Simulation</li>
              <li>Wireless Remote Car Driving on Track</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={() => { navigate('/application'); window.scrollTo(0,0); }}
            className="bg-primary hover:bg-primary-dull text-black px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
          >
            Start Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Group2;
