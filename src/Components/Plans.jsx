import React from 'react';
import Anitmatedtxt from './Animatedtxt.js';

const Plans = () => {
  return (
    <>  
   
    <div className="flex justify-center items-center bg-gray-100 py-12 mt-10 px-20 md:flex-col md:p-2 md:pb-10 xl:px-3 lg:flex-col ">
    <Anitmatedtxt text="Our plans" className='w-1/4  mx-10 font-bold  md:text-7xl md:py-4 text-center justify-center flex items-center xl:text-7xl xl:mx-4  xl:w-auto lg:text-5xl' />

     {/* <h1 className='lg:text-3xl'>Our plans</h1> */}
     
      <div className="grid grid-cols-3 gap-8 max-w-6xl items-center justify-center mx-10  xl:m-0  lg:p-4 md:gap-3 sm:grid-cols-1">
        {/* Subscription Package 1 */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in-out ">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Basic</h2>
          <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="text-black/90 mb-6">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</button>
        </div>

        {/* Subscription Package 2 */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in-out">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Standard</h2>
          <p className="text-black mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="text-black/75 mb-6">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-800 hover:text-dark hover:font-bold hover:shadow-lg shadow-md transition-all duration(400)  ease-in text-white py-2 px-4 rounded-full ">Get Started</button>
        </div>

        {/* Subscription Package 3 */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-2xl transition-all duration(400) ease-in">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Premium</h2>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ul className="text-gray-600 mb-6">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
            <li>Feature 5</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Get Started</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Plans;

