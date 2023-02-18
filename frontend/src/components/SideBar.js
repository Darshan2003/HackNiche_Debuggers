import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { motion } from "framer-motion";
import Trending from './Trending';
import Genre from './Genre';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}

    />
    return (
        <div className="">
            <button className='flex justify-center items-center rounded-full  cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  duration-300 ' onClick={() => setIsOpen(!isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
            </button>

            {isOpen && (
                <motion.div
                    initial={{ x: -10 }}
                    animate={{ x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                    className="absolute z-10  bg-gray-200  transparent w-[800px] h-[1000px] -m-5 -top-0 flex flex-col  p-10">

                    <div className="left-0 text-xl text-white cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  duration-300 " onClick={() => setIsOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className='flex flex-col space-y-6 divide-y divide-gray-700 mt-10 text-4xl'>
                        <div>
                            <NavLink to="/login">
                                <span className='font-medium'>Login</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/signup">
                                <span className='font-medium'>Signup</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/trending">
                                <span className='font-medium'>Trending</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/foryou">
                                <span className='font-medium'>For you</span>
                            </NavLink>
                        </div>
                      
                        <div>
                            <NavLink to="/entertainment">

                                <span className='font-medium'>Entertainment</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/food">

                                <span className='font-medium'>Food</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/health">

                                <span className='font-medium'>Health</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/politics">

                                <span className='font-medium'>Politics</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/science">

                                <span className='font-medium'>Science</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/technology">
                                <span className='font-medium'>Technology</span>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/world">
                                <span className='font-medium'>World</span>
                            </NavLink>
                        </div>

                    </div>

                </motion.div>
            )}
        </div>
    );
};

export default Sidebar;