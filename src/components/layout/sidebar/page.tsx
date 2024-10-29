"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { Lock } from 'lucide-react';
import HomeIcon from "../../../assets/landingpage/svg/HomeIcon";
import NotificationIcon from "../../../assets/landingpage/svg/NotificationIcon";
import BagIcon from "../../../assets/landingpage/svg/BagIcon";
import CalendarIcon from "../../../assets/landingpage/svg/CalendarIcon";
import "../../../app/index.css";

// Define menu items with their restriction status
const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, restricted: false },
  { name: 'Payment', icon: BagIcon, restricted: false },
  { name: 'Announcement', icon: NotificationIcon, restricted: true },
  { name: 'Conference Portal', icon: BagIcon, restricted: true },
  { name: 'Seminars/webinars', icon: CalendarIcon, restricted: true },
  { name: 'Members directory', icon: BagIcon, restricted: true },
  { name: 'IAIIEA resources', icon: BagIcon, restricted: true },
  { name: 'Gallery', icon: BagIcon, restricted: true },
  { name: 'Forum', icon: BagIcon, restricted: true },
];

const Sidebar = ({ 
  setActiveComponent, 
  hasPaid = false // Add this prop to check payment status
}: { 
  setActiveComponent: (component: string) => void,
  hasPaid?: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeComponent, setActive] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleComponentClick = (component: string, restricted: boolean) => {
    if (restricted && !hasPaid) {
      // If the component is restricted and user hasn't paid, 
      // redirect to payment page
      setActive('Payment');
      setActiveComponent('Payment');
    } else {
      setActive(component);
      setActiveComponent(component);
    }
  };

  const getButtonClassName = (component: string, restricted: boolean) => {
    const isActive = activeComponent === component;
    const isDisabled = restricted && !hasPaid;
    
    return `text-[18px] font-[500] flex items-center justify-between p-2 rounded-md cursor-pointer
      ${isActive ? 'bg-[#203a87] text-white' : 'text-blue hover:bg-[#203a87] hover:text-[#cfc8c8]'}
      ${isOpen ? 'px-4' : 'px-2'}
      ${isDisabled ? 'opacity-50' : ''}
    `;
  };

  return (
    <div className={`flex ${isOpen ? 'w-72' : 'w-32'} border border-[#CACAC9] h-screen top-28 p-5 pt-8 relative duration-300 flex items-center justify-center`}>
      <div className='flex items-end justify-end'>
        <FaBars
          className={`text-blue absolute top-6 right-5 cursor-pointer transform ${isOpen && 'rotate-180'}`}
          onClick={toggleSidebar}
        />
      </div>
      <div className='flex flex-col justify-between items-center h-full mt-10'>
        <div>
          <ul>
            <div className='leading-[40px] flex flex-col gap-5'>
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li
                    key={item.name}
                    className={getButtonClassName(item.name, item.restricted)}
                    onClick={() => handleComponentClick(item.name, item.restricted)}
                  >
                    <div className="flex items-center gap-x-4">
                      <IconComponent />
                      <span>{item.name}</span>
                    </div>
                    {item.restricted && !hasPaid && isOpen && (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;