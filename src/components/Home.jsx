import React, { useState, useRef } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { FaSpotify } from "react-icons/fa6";
import { TbRewindBackward10 } from "react-icons/tb";
import { FaPlay } from "react-icons/fa6";
import { TbRewindForward10 } from "react-icons/tb";
import { FaPause } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { IoBrowsers } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

function Home() {
    const [currentSong, setCurrentSong] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [songDuration, setSongDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [songName, setSongName] = useState(''); // To display the song name in the media player
    const audioRef = useRef(null);
    const sliderRef = useRef(null);

    const cardTitle1 = [
        { album: 'Popular albums' }
    ];

    const cardTitle2 = [
        { album: 'Featured Charts' }
    ];

    const cardsData = [
        { img: '/honey_singh.jpg', title: 'Glory', artist: 'Yo Yo Honey Singh', songUrl: '/songs/millionaire.mp3' },
        { img: '/born_to_shine.jpg', title: 'Born to shine', artist: 'Diljit Dosanjh', songUrl: '/songs/born_to_shine.mp3' },
        { img: '/baller.jpg', title: 'Baller', artist: 'Shubh', songUrl: '/songs/baller.mp3' },
        { img: '/honey_singh.jpg', title: 'Jatt mehkma', artist: 'Yo Yo Honey Singh', songUrl: '/songs/jatt_mehkma.mp3' },
        { img: '/antidote.jpg', title: 'Antidote', artist: 'Karan Aujla', songUrl: '/songs/antidote.mp3' },
        { img: '/karan_aujla.jpg', title: 'Jee ni lagda', artist: 'Karan Aujla', songUrl: '/songs/jee_ni_lagda.mp3' },
        { img: '/aasa_kooda.jpg', title: 'Aasa kooda', artist: 'Sai Abhyankkar, Sai Smriti', songUrl: '/songs/aasa_kooda.mp3' },
        { img: '/illuminati.jpg', title: 'Illuminati', artist: 'Sushin Shyam', songUrl: '/songs/illuminati.mp3' },
        { img: '/dil.jpg', title: 'Dil tu jaan tu', artist: 'Gurnazar', songUrl: '/songs/dil_tu_jaan_tu.mp3' },
        { img: '/heeriye.jpg', title: 'Heeriye', artist: 'Jasleen Royal', songUrl: '/songs/heeriye.mp3' },
        { img: '/shubh.jpg', title: 'Cheques', artist: 'Shubh', songUrl: '/songs/cheques.mp3' },
        { img: '/aaj_ki_raat.jpg', title: 'Aaj ki raat (From "Stree 2")', artist: 'Sachin Jigar', songUrl: '/songs/aaj_ki_raat.mp3' },
    ];

    const firstFiveCards = cardsData.slice(0, 12);


    const playSong = (songUrl, songTitle) => {
        // If the song is already playing, switch to the new song
        if (currentSong === songUrl && isPlaying) {
            return; // Prevent further execution if the same song is clicked
        }

        setCurrentSong(songUrl);
        setSongName(songTitle); // Set the song name for the media player
        audioRef.current.src = songUrl; // Set the song URL to the audio element
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(err => {
            console.error('Error playing audio:', err);
        });
    };

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const skipForward = () => {
        audioRef.current.currentTime += 10;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 10;
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        sliderRef.current.value = audioRef.current.currentTime;
    };

    const handleSliderChange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setSongDuration(audioRef.current.duration);
        sliderRef.current.max = audioRef.current.duration;
    };

    return (
        <>
            <div className='bg-[#000] h-auto relative box-border'>
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
                            <button className='mt-2'>
                                <span className='text-sm text-white font-semibold flex items-center gap-2 border border-gray-400 py-1 px-2 rounded-full hover:border-white hover:scale-105 duration-150'>
                                    <GrLanguage />English
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className='bg-[#121212] rounded-lg w-full  md:h-[75vh] h-[75vh] overflow-y-auto scrollbar-thin'>
                        <div className='p-4'>
                            {/* First Title and Cards */}
                            {cardTitle1.map((card1, index1) => (
                                <h1 key={index1} className='hover:underline cursor-pointer text-2xl text-white font-bold px-6 w-60 mb-2'>
                                    {card1.album}
                                </h1>
                            ))}
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 overflow-y-auto '>
                                {firstFiveCards.map((card, index) => (
                                    <div
                                        key={index}
                                        className='card-container md:h-64 w-full md:w-auto md:m-2 p-4 rounded-lg cursor-pointer hover:bg-[#1d1b1b] hover:scale-105 duration-200'
                                        onClick={() => playSong(card.songUrl, card.title)} // Play song on click
                                    >
                                        <img src={card.img} className='h-40 md:h-48 w-full rounded-lg' alt={card.title} />
                                        <p className='text-white  font-semibold mt-2 text-[18px] md:text-sm'>{card.title}</p>
                                        <span className='text-[14px] md:text-xs text-gray-400'>{card.artist}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>

                {/* Media Player */}
                <div className="bg-[#121111] fixed bottom-0 left-0 w-full h-36 py-4 flex flex-col items-center justify-center px-4">
                    <span className="text-white text-lg font-bold p-1 md:p-2">{songName}</span> 
                    <div className='flex justify-center items-center gap-10 p-1 md:p-2'>
                        <button onClick={skipBackward} className="text-white text-xl">
                        <TbRewindBackward10 />
                        </button>
                        <button onClick={handlePlayPause} className="text-white text-3xl mx-4">
                            {isPlaying ? <FaPause /> : <FaPlay />}
                        </button>
                        <button onClick={skipForward} className="text-white text-xl">
                        <TbRewindForward10 />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 w-full justify-center">

                        <input
                            ref={sliderRef}
                            type="range"
                            min="0"
                            max={songDuration}
                            value={currentTime}
                            onChange={handleSliderChange}
                            className="slider sm:w-[30%] md:w-1/3 h-1 rounded-lg cursor-pointer"
                        />
                        <span className="text-white">{Math.floor(currentTime)}s / {Math.floor(songDuration)}s</span>
                    </div>
                    <audio
                        ref={audioRef}
                        src={currentSong}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onEnded={() => setIsPlaying(false)} // Update playing status when song ends
                    />
                </div>

                {/* Footer */}
                {/* <Link to={'/signup'} className='text-white bg-gradient-to-r from-[#af2896] to-[#509bf5] fixed flex justify-between items-center w-[100%] px-4 py-2 cursor-pointer bottom-0'>
                    <div>
                        <h1 className='font-bold text-sm'>Preview of Spotify</h1>
                        <p className='text-xs md:text-sm font-medium'>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <Link to={'/signup'} className='w-48 text-center flex items-center text-sm h-12 justify-center md:h-auto md:w-auto md:px-4 md:py-2 ml-2 md:mx-4 bg-white rounded-full text-black md:text-base font-bold hover:scale-105 duration-100 hover:bg-gray-200'>Sign up free</Link>
                </Link> */}
            </div>
        </>
    );
}

export default Home;
