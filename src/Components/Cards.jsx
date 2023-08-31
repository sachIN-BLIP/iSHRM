import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

function Cards () {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Single labour</h2>
              <p className='text-center text-4xl font-bold'>₹600</p>
              {/* <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div> */}
              <button className='bg-[#2b6cb0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>BOOK</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3.1rem] bg-white' src={Double} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Double labours</h2>
              <p className='text-center text-4xl font-bold'>₹1000</p>
              {/* <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div> */}
              <button className='bg-[#2b6cb0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>BOOK</button>
          </div>

          
          
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3.5rem] bg-white' src={Triple} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Triple labours</h2>
              <p className='text-center text-4xl font-bold'>₹1500</p>
              {/* <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                  <p className='py-2 border-b mx-8'>1 Granted User</p>
                  <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
              </div> */}
              <button className='bg-[#2b6cb0] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>BOOK</button>
          </div>
      </div>
    </div>
  );
};

export default Cards;