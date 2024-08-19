import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/auth/images/IAIIEA Logo I.png';
import ProfilePic from '../../assets/landingpage/images/Frame 1321316359.png';
import SearchIcon from '../../assets/landingpage/svg/VectorFour';
import CaretUp from '@/assets/landingpage/svg/CaretUp';

const DashboardHeader = () => {
  return (
    <div className="fixed w-full md:px-14 px-5 mx-auto py-5 z-50 bg-[#0E1A3D]">
      <div className='flex items-center justify-between'>
        <div className="">
          <Link href="/" className='flex items-center w-[60%] md:w-auto'>
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className='relative w-full max-w-md md:max-w-lg lg:max-w-xl md:flex hidden'>
          <div className='absolute top-[50%] transform translate-y-[-50%] left-3'>
            <SearchIcon />
          </div>
          <input 
            type="search" 
            placeholder='Search for movies, music, shows' 
            className='bg-[#fff] rounded-3xl px-10 py-3 w-full pl-10 outline-none'
          />
        </div>
        <div className='flex items-center gap-3'>
          <Image src={ProfilePic} alt='' className='max-w-3xl' />
          <CaretUp/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;
