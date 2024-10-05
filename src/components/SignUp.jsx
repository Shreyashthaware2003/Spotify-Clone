import React from 'react'
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";

function SignUp() {
    return (
        <>
            <div className='bg-black h-auto p-8 flex justify-center'>
                <div className='text-white flex  flex-col max-w-[480px] md:px-20  '>
                    <h1 className='flex flex-col items-center text-3xl md:text-5xl text-center font-bold'>
                        <FaSpotify className='text-2xl md:text-4xl m-4' />Sign up to start listening
                    </h1>
                    <span className='mt-10 font-bold'>Email address</span>
                    <input type="text" placeholder='name@domain.com' className='bg-black p-3 font-semibold rounded-md mt-2 border border-gray-400' />
                    <a href="#" className='underline text-green-500 text-sm font-semibold mt-2'>Use phone number instead.</a>
                    <button className='w-full bg-green-500 mt-5 p-3 rounded-full text-black font-bold hover:bg-green-400'>Next</button>
                    <div className='my-12 flex items-center justify-center'>
                        <hr className=' w-full bg-gray-900 relative mt-1' />
                        <span className='absolute bg-black px-4'>or</span>
                    </div>
                    <div className='flex flex-col justify-center w-full h-full  relative space-y-9 '>
                        <div className='flex items-center font-bold'>
                            <FcGoogle className='text-2xl mx-4 ' /><button className='flex absolute justify-center border-gray-500  items-center py-3 px-10 border-2 rounded-full w-full hover:border-white'>Sign up with Google</button>
                        </div>
                        <div className='flex items-center  font-bold'>
                            <SiFacebook className='text-2xl mx-4 text-blue-500' /><button className='flex absolute justify-center border-gray-500  items-center py-3 px-10 border-2 rounded-full w-full hover:border-white'>Sign up with Google</button>
                        </div>
                        <div className='flex items-center font-bold'>
                            <FaApple className='text-2xl mx-4 ' /><button className='flex absolute justify-center border-gray-500 items-center py-3 px-10 border-2 rounded-full w-full hover:border-white'>Sign up with Google</button>
                        </div>
                    </div>
                    <hr className=' w-full my-10' />
                    <div className='flex justify-center items-center flex-col'>
                        <div className='space-x-1'>
                            <span className='text-gray-300'>Already have an account?</span>
                            <Link to={'/login'} className='underline'>Log in here.</Link>
                        </div>
                        <div className='mt-4 flex justify-center items-center'>
                            <span className='text-xs text-gray-300'>This site is protected by reCAPTCHA and the Google</span>
                        </div>
                        <div className='space-x-1 text-xs text-gray-300'>
                            <a href="#" className='underline'>Privacy Policy</a>
                            <span >and</span>
                            <a href="#" className='underline'>Terms of Service</a>
                            <span className=''>apply.</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SignUp