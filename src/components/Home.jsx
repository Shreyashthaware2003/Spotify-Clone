import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoBrowsers } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

function Home() {
    const cardTitle1 = [
        {
            album: 'Popular albums'
        },
    ];

    const cardTitle2 = [
        {
            album: 'Featured Charts'
        },
    ];

    const cardsData = [
        {
            img: '/honey_singh.jpg',
            title: 'Glory',
            artist: 'Yo Yo Honey Singh',
        },
        {
            img: '/darshan_raval.jpg',
            title: 'Barrish',
            artist: 'Darshan Raval',
        },
        {
            img: '/shubh.jpg',
            title: 'Baller',
            artist: 'Shubh',
        },
        {
            img: '/diljit_dosanjh.jpg',
            title: 'Born to shine',
            artist: 'Diljit Dosanjh',
        },
        {
            img: '/karan_aujla.jpg',
            title: 'Antidote',
            artist: 'Karan Aujla',
        },
        {
            img: '/one.jpg',
            title: 'Your weekly update of the most played tracks right now - Global.',
        },
        {
            img: '/two.jpg',
            title: 'Your weekly update of the most played tracks right now - USA.',
        },
        {
            img: '/three.jpg',
            title: 'Your daily update of the most played tracks right now - Global.',
        },
        {
            img: '/four.jpg',
            title: 'Your daily update of the most played tracks right now - USA.',
        },
        {
            img: '/five.jpg',
            title: 'Your daily update of the most played tracks right now - Global.',
        },
    ];

    // Split the cards data into two parts
    const firstFiveCards = cardsData.slice(0, 5); // First 5 cards
    const remainingCards = cardsData.slice(5); // Remaining cards after the first 5

    return (
        <>
            <div className='bg-[#000] h-[100vh] relative box-border'>
                {/* Navbar Section */}
                <navbar className='w-full h-auto grid grid-cols-2 md:grid-cols-3 px-2 pb-1 pt-2 items-center'>
                    <div className='text-4xl text-white px-4'><FaSpotify className='cursor-pointer' /></div>
                    <div className='hidden md:flex justify-center mt-1 gap-2'>
                        <div className=''>
                            <button className='w-12 h-12 rounded-[50%] bg-[#1f1f1f] flex justify-center items-center text-3xl text-white hover:scale-110 duration-150'><TiHome /></button>
                        </div>
                        <div className='text-gray-400 flex gap-2 border-[0px] rounded-full w-full h-[50px] items-center py-3 px-3 bg-[#1f1f1f] text-base '>
                            <FaSearch className='text-2xl' />
                            <input type="text" placeholder='What do you want to play?' className='font-semibold bg-[#1f1f1f] w-full' />
                            <div className='border-l px-3' >
                                <IoBrowsers className='text-2xl cursor-pointer hover:scale-110 duration-150' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-center h-auto gap-4'>
                        <Link to={'/signup'} className='text-gray-400 w-full md:w-auto font-bold md:p-3 hover:scale-110 duration-150 hover:text-white text-center'>Sign up</Link>
                        <Link to={'/login'} className='text-black bg-white w-full md:w-auto  rounded-full md:py-3 md:px-8 font-bold hover:scale-105 duration-100 text-center'>Log in</Link>
                    </div>
                </navbar>

                {/* Main Content */}
                <div className='w-auto h-auto flex text-gray-400 p-2 gap-2'>
                    {/* Sidebar Section */}
                    <div className='bg-[#171717] p-2 rounded-lg w-[20%] h-auto scrollbar-thin-black hidden  md:flex flex-col'>
                        <div className='flex justify-between items-center mb-10'>
                            <h1 className='flex items-center gap-2 py-1 text-base font-bold'>
                                <BiLibrary className='text-3xl font-bold' />Your Library
                            </h1>
                            <FaPlus className='text-xl' />
                        </div>
                        <div className='flex-col flex-nowrap h-[38vh] overflow-y-auto scrollbar-thin-black'>
                            <div className='bg-[#2a2929] p-4 rounded-lg my-2'>
                                <h1 className='text-white font-bold text-base'>Create Your first playlist</h1>
                                <span className='text-white font-semibold text-sm'>It's easy, we'll help you</span>
                                <button className='bg-white text-black font-bold text-sm py-2 px-4 rounded-full mt-4 hover:scale-105 duration-75'>Create playlist</button>
                            </div>
                            <div className='bg-[#2a2929] my-6 p-4 rounded-lg flex flex-col gap-2'>
                                <h1 className='text-white font-bold text-base'>Let's find some podcasts to follow</h1>
                                <span className='text-white font-semibold text-sm'>We'll keep you updated on new episodes</span>
                                <button className='bg-white text-black font-bold text-sm py-2 px-4 w-[80%] rounded-full mt-6 hover:scale-105 duration-75'>Browse podcasts</button>
                            </div>
                        </div>
                        <div className='w-auto my-8 mx-4'>
                            <ul className='text-xs flex text-start flex-wrap gap-x-5 gap-y-3 font-semibold text-gray-400'>
                                <li className='cursor-pointer'>Legal</li>
                                <li className='cursor-pointer'>Safety & Privacy Center</li>
                                <li className='cursor-pointer'>Privacy Policy</li>
                                <li className='cursor-pointer'>Cookies</li>
                                <li className='cursor-pointer'>About Ads</li>
                                <li className='cursor-pointer'>Accessibility</li>
                            </ul>
                            <button className='mt-12'>
                                <span className='text-sm text-white font-semibold flex items-center gap-2 border border-gray-400 py-1 px-2 rounded-full hover:border-white hover:scale-105 duration-75'><GrLanguage />English</span>
                            </button>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className='bg-[#171717] p-4 rounded-lg w-full h-[80vh] scrollbar-thin-black'>
                        <div className='flex-col flex-nowrap h-[100%] overflow-y-auto scrollbar-thin-black'>
                            {/* First Title and Cards */}
                            {cardTitle1.map((card1, index1) => (
                                <h1 key={index1} className='hover:underline cursor-pointer text-2xl text-white font-bold px-6 w-56'>
                                    {card1.album}
                                </h1>
                            ))}
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 overflow-y-auto mb-6'>
                                {firstFiveCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className='card-container h-auto md:h-80 w-auto m-2 p-4 rounded-lg cursor-pointer hover:bg-[#121111] hover:scale-105 duration-200'
                                    >
                                        <img src={card.img} className='h-[200px] md:h-52 w-full rounded-lg' alt={card.title} />
                                        <p className=' text-white mt-2'>{card.title}</p>
                                        <span className='text-[10px] md:text-sm text-gray-400'>{card.artist}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Second Title and Cards */}
                            {cardTitle2.map((card2, index2) => (
                                <h1 key={index2} className='hover:underline cursor-pointer text-2xl text-white font-bold px-6 w-60 mb-2'>
                                    {card2.album}
                                </h1>
                            ))}
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  overflow-y-auto mb-6'>
                                {remainingCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className='card-container md:h-64 w-auto m-2 p-4 rounded-lg cursor-pointer hover:bg-[#121111] hover:scale-105 duration-200'
                                    >
                                        <img src={card.img} className='h-40 md:h-48 w-full rounded-lg' alt={card.title} />
                                        <p className=' text-gray-400 font-semibold mt-2 text-[10px] md:text-xs'>{card.title}</p>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <Link to={'/signup'} className='text-white bg-gradient-to-r from-[#af2896] to-[#509bf5] fixed flex justify-between w-[100%] px-4 py-2 mx-2 cursor-pointer '>
                    <div>
                        <h1 className='font-bold text-sm'>Preview of Spotify</h1>
                        <p className='text-xs md:text-sm font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <Link to={'/signup'} className='w-44 text-center flex items-center text-sm h-12 pl-5 md:h-auto md:w-auto md:px-4 md:py-2 mx-4 bg-white rounded-full text-black md:text-base font-bold hover:scale-105 duration-100 hover:bg-gray-200'>Sign up free</Link>
                </Link>
            </div>
        </>
    );
}

export default Home;

