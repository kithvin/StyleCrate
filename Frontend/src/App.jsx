// App.jsx
import React from 'react';

const TailwindTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <div className="h-48 w-full bg-gradient-to-r from-cyan-500 to-blue-500 md:h-full md:w-48 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">Tailwind</span>
            </div>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Test successful!
            </div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Tailwind CSS is working!
            </h1>
            <p className="mt-2 text-gray-500">
              If you see styled components with proper colors, spacing, and responsive behavior, 
              Tailwind CSS is correctly installed.
            </p>
            <div className="mt-4 flex space-x-4">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Success
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Failure
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-4">Quick Checks:</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded">
            <p className="text-blue-800">Colors</p>
          </div>
          <div className="bg-green-100 p-4 rounded">
            <p className="text-green-800">Spacing</p>
          </div>
          <div className="bg-purple-100 p-4 rounded">
            <p className="text-purple-800">Responsive</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;