"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import HomeIcon from "../../assets/landingpage/svg/HomeIcon"
import NotificationIcon from "../../assets/landingpage/svg/NotificationIcon"
import BagIcon from "../../assets/landingpage/svg/BagIcon"
import CalendarIcon from "../../assets/landingpage/svg/CalendarIcon"
import "../../app/index.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${isOpen ? 'w-60' : 'w-32'} border border-[#CACAC9] h-screen top-28 p-5 pt-8 relative duration-300 flex items-center justify-center`}>
      <FaBars 
        className={`text-blue absolute top-6 left-2 cursor-pointer transform ${isOpen && 'rotate-180'}`} 
        onClick={toggleSidebar} 
      />
      <div className='flex flex-col justify-between items-center h-full '>
        <div className=''>
          <ul className=''>
            <div className='leading-[40px] flex flex-col gap-5'>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'justify-center'}`}>
              <div className='flex items-center justify-center'>
              <HomeIcon/>
              </div>
              <Link href="/" className={`${!isOpen && 'hidden'}`}>Home</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <NotificationIcon/>
              <Link href="/profile" className={`${!isOpen && 'hidden'}`}>Profile</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <CalendarIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            <li className={`text-blue text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer ${isOpen ? 'px-4' : 'px-2'}`}>
              <BagIcon/>
              <Link href="/settings" className={`${!isOpen && 'hidden'}`}>Settings</Link>
            </li>
            </div>
          </ul>
        </div>
        <div className='text-white text-sm flex items-center gap-x-4 p-2 hover:bg-[#203a87] rounded-md cursor-pointer'>
          <AiOutlineUser className='text-xl' />
          <Link href="/logout" className={`${!isOpen && 'hidden'}`}>Logout</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
