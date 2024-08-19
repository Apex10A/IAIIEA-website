"use client";
import Logo from '@/assets/auth/images/IAIIEA Logo I.png';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import '../../app/globals.css';
import Menu from "@/assets/auth/svg/Menu"
import RegisterHomeBg from '@/components/home/registerHomeBg';

const Header = () => {
  const pathname = usePathname(); 

  return (
    <nav className="">
      <div className="fixed w-full md:px-14 px-5 mx-auto py-5 z-50 bg-[#0E1A3D]">
        <div className="flex items-center justify-between ">
          <div className="">
            <Link href="/" className='flex items-center w-[60%] md:w-auto'>
              <Image src={Logo} alt="Logo" />
            </Link>
          </div>
          <div className='flex items-center gap-5'>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className={`text-gray-300 px-3 py-2 text-sm font-poppins ${pathname === '/' ? 'underline text-orange-500 border-b border-orange-500' : ''}`}>
                  <p className="text-white text-sm font-poppins Linker">Home</p>
                </Link>
                <Link href="/about" className={`text-gray-300 px-3 py-2 text-sm font-poppins ${pathname === '/about' ? 'underline text-orange-500' : ''}`}>
                  <p className="text-white text-sm font-poppins Linker">Services</p>
                </Link>
                <Link href="/about" className={`text-gray-300 px-3 py-2 rounded-md text-sm font-poppins ${pathname === '/about' ? 'underline text-orange-500' : ''}`}>
                  <p className="text-white text-sm font-poppins Linker">About Us</p>
                </Link>
                <Link href="/blog" className={`text-gray-300 px-3 py-2 rounded-md text-sm font-poppins ${pathname === '/blog' ? 'underline text-orange-500' : ''}`}>
                  <p className="text-white text-sm font-poppins Linker">Blog</p>
                </Link>
                <Link href="/about" className={`text-gray-300 px-3 py-2 rounded-md text-sm font-poppins ${pathname === '/about' ? 'underline text-orange-500' : ''}`}>
                  <p className="text-white text-sm font-poppins Linker">Contact Us</p>
                </Link>
              </div>
            </div>
            <div>
              <button className='bg-transparent border-2 border-[#fff] rounded-3xl px-8 py-2 font-semibold text-[#fff]'>Login</button>
            </div>
            <div>
              <Menu/>
            </div>
          </div>
        </div>
      </div>
      <RegisterHomeBg/>
    </nav>
  );
};

export default Header;
