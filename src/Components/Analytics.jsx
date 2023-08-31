import React from 'react';
 import labours from '../assets/labours.jpg'; 

function Analytics  ()  {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={labours} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#2b6cb0] font-bold px-10 py-2 '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3 px-10'>Manage Data Analytics Centrally</h1>
          <p className='px-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className=' bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-10 py-3 '>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;