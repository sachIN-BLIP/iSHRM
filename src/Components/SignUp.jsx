import React from 'react'


import loginImg from '../assets/login.jpg'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

    <div className='flex justify-center items-center h-full'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
            <h2 className='text-4xl font-bold text-center py-4'>iSHRM.</h2>
            
            <div className='flex flex-col font-bold mb-4'>
                <label>Full Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col font-bold mb-4'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' type="email" />
            </div>

            <div className='flex flex-col font-bold '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>\

            <div className='flex flex-col font-bold '>
                <label>Confirm Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>


            <button className='w-full py-3 mt-8 bg-blue-700 hover:bg-blue-800 relative text-white'>Create Account</button>
            
            <div className="text-center text-sm text-black-dark font-black mt-4">
                        By signing up, you agree to 
                        <a className="underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service and
                        </a> <br />
                        <a className="underline border-b border-grey-dark text-grey-dark" href="#">
                             Privacy Policy
                        </a>
            </div>

            <div className=" text-center text-black-dark font-bold mt-6">
                    Already have an account? 
                    <br />
                    <a className="underline border-b border-blue text-blue" href ="/login"> Login
                    </a>.
                </div>
        </form>

        
    </div>
    </div>
  )
}
