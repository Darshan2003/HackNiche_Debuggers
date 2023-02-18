import React from 'react'
import { NavLink } from "react-router-dom"
import news1 from "../assets/news1.jpeg"
import { useLocation } from 'react-router-dom'


const Article = ({ title, image, desc }) => {

    let location = useLocation();
    console.log(location)

    return (
        <div className=''>
            <NavLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="m-5 w-6 h-6 fixed">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </NavLink>
            <div className='flex justify-center items-center '>

                <div
                    style={{
                        fontFamily: 'Medium',
                    }}

                    className='flex justify-center items-center w-[1000px] shadow-2xl mt-10 mb-10 p-10'
                >
                    <div className='mt-24 justify-center items-center space-y-5'>
                        {/* <img
                        className='object-contain w-28 h-28 cursor-pointer rounded-full border border-black '
                        src={logo} alt="logo" /> */}
                        <h1 className='text-center text-4xl mb-10'>
                            {location.state.title}
                        </h1>
                        <div className='flex flex-col justify-center items-center space-y-5'>
                            <div className="flex flex-wrap justify-center">
                                <div className="block p-6 rounded-lg bg-white justify-center">
                                    <img
                                        className='sm:w-50 md:w-75 lg:w-100 object-contain h-96 mx-auto cursor-pointer'
                                        src={location.state.image} alt="logo"
                                    />
                                    <p
                                        style={{
                                            fontFamily: 'Light',
                                        }}

                                        className="text-black text-md leading-loose tracking-wide mt-5 sm:mx-5 md:mx-10 lg:mx-20">
                                        {location.state.desc}
                                    </p>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article