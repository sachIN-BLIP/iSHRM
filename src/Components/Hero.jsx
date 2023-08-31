import React from 'react';
import Typed from 'react-typed';

function Hero  () {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#2b6cb0] font-bold p-2'>
          PLATFORM FOR GETTING LABOURERS.
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with iSHRM.
        </h1>
        <div className='flex justify-center items-center'>
          
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={["Laboring for Your Dream Home","Turning Houses into Homes" , "Expert Labor for Inspired Homes"]}
            typeSpeed={100}
            backSpeed={40}
            loop
          />
          
        </div>
<br />
        <p className='md:text-2xl text-xl font-bold text-gray-500'>"Bridging Labor and Livelihoods"</p>
        <button className=' bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;