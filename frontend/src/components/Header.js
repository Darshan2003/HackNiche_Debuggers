import React from 'react'
import more from "../assets/more-white.svg"
import Sidebar from './SideBar';
import Search from './Search';
import { useState } from 'react'
const Header = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className='z-30 sticky  flex justify-start items-center '>
      <div className='flex justify-center items-center px-2 py-2 bg-black rounded-full m-4'>
        <Sidebar />
      </div>
      <div>
      </div>
      <Search />
    </div>
  )
}

{/* <div className='flex justify-center items-center px-2 py-2 bg-white rounded-full '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </div> */}


export default Header;