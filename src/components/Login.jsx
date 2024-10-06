import React from 'react'
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { FaApple } from "react-icons/fa";

function Login() {
    return (
        <>
            <div className='bg-gradient-to-b from-[rgba(0,0,0,0.78)] to-[rgb(0,0,0)] h-auto'>
                <div className='flex justify-center items-center text-white mb-8'>
                    <div className=' h-auto w-full md:w-[50%] md:my-6 bg-black rounded-lg flex flex-col justify-start items-center p-6 md:p-10'>
                        <FaSpotify className='text-4xl' />
                        <h1 className='font-bold text-3xl text-center m-2'>Log in to Spotify</h1>

                        <div className='flex flex-col w-80  md:w-[50%] justify-center relative space-y-9 m-10 '>
                            <div className='flex items-center font-bold'>
                                <FcGoogle className='text-2xl mx-4 ' /><button className='flex absolute justify-center border-gray-500  items-center py-3 px-10 border-2 rounded-full w-full hover:border-white text-sm md:text-base'>Sign up with Google</button>
                            </div>
                            <div className='flex items-center  font-bold'>
                                <SiFacebook className='text-2xl mx-4 text-blue-500' /><button className='flex absolute justify-center border-gray-500  items-center py-3 px-10 border-2 rounded-full w-full hover:border-white text-sm md:text-base'>Sign up with Google</button>
                            </div>
                            <div className='flex items-center font-bold'>
                                <FaApple className='text-2xl mx-4 ' /><button className='flex absolute justify-center border-gray-500 items-center py-3 px-10 border-2 rounded-full w-full hover:border-white text-sm md:text-base '>Sign up with Google</button>
                            </div>
                        </div>

                        <hr className='h-1 w-full md:w-[75%] my-4' />

                        <div className='flex flex-col w-full md:w-[50%] justify-center'>
                            <span className='mt-5 font-bold text-sm md:text-base'>Email or username</span>
                            <input type="text" placeholder='Email or username' className='bg-black p-3 font-semibold rounded-md mt-2 border border-gray-400' />
                            <span className='mt-4 font-bold text-sm md:text-base'>Password</span>
                            <input type="password" placeholder='Password' className='bg-black p-3 font-semibold rounded-md mt-2 border border-gray-400' />
                            <button className='w-full bg-green-600 md:bg-green-500 mt-5 p-3 rounded-full text-black font-bold hover:bg-green-400'>Log In</button>
                            <a href="" className='flex justify-center my-8 underline font-semibold hover:text-green-500'>Forgot your password?</a>
                            <div className='flex-col flex md:flex-row justify-center items-center text-sm md:text-base  gap-2'>
                                <span className='text-gray-400 font-semibold'>Don't have an account?</span>
                                <Link to={'/signup'} className='underline hover:text-green-500 font-semibold'>Sign up for Spotify</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className='w-full h-auto py-8 text-gray-400 font-semibold md:bg-[#2a2a2a8a] text-xs '>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-1 text-[10px] md:text-xs'>
                        <div>
                            <span>This site is protected by reCAPTCHA and the Google</span>
                        </div>
                        <div>
                            <a href="#" className='underline'>Privacy Policy</a>
                            <span > and </span>
                            <a href="#" className='underline'>Terms of Service</a>
                            <span className=''> apply.</span>
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Login