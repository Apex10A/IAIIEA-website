"use client";
import React, { useState, useEffect, useRef } from "react";
import jwt_decode from 'jwt-decode';
import Logo from "@/assets/auth/images/IAIIEA Logo I.png";
import Link from "next/link";
import useAuthStore from "../../../../store/authStore";
import { CreateUser, loginUser } from '@/action/auth'
import { signIn } from 'next-auth/react'
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi"; 
import "../../../app/globals.css";
import Menu from "@/assets/auth/svg/Menu";
import RegisterHomeBg from "@/components/home/registerHomeBg";
import Login from "@/app/(auth)/MemberLogin/page"
import EyeIcon from "../../../assets/auth/svg/PasswordEye";
import Toast from '@/modules/ui/toast';
import Button from '@mui/material/Button';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Header = () => {

  const [formData, setFormData] = useState({
    uid: '',
    password: ''
  });
  const [user, setUser] = useState(null);

  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  )
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const router = useRouter()
  const openModal = () => setIsModalOpen(true);


  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const pathname = usePathname();
  const [isMembersDropdownOpen, setIsMembersDropdownOpen] = useState(false);
  const [isProgrammesDropdownOpen, setIsProgrammesDropdownOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeAllDropdowns = () => {
    setIsMembersDropdownOpen(false);
    setIsProgrammesDropdownOpen(false);
    setIsMediaDropdownOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Validation function
  const validateStep = () => {
    if (!formData.uid) {
      setToastMessage({ message: 'Email/Membership ID is required', type: 'error' });
      return false;
    }
    if (!formData.password) {
      setToastMessage({ message: 'Password is required', type: 'error' });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);
  
    // Attempt to login using the credentials
    const result = await signIn('credentials', {
      redirect: false, // Prevent automatic redirect
      email: formData.uid, 
      password: formData.password,
    });
  
    if (result?.error) {
      // If there's an error, show an error message in toast
      setToastMessage({ message: result.error || 'An error occurred', type: 'error' });
    } else {
      // If login is successful, navigate to the dashboard
      router.push('/dashboard');
      setToastMessage({ message: 'Login successful!', type: 'success' });
    }
  
    setLoading(false);
  };
  
  


  // Submit the form
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validateStep()) return;
  //   setLoading(true);
  
  //   const result = await signIn('credentials', {
  //     redirect: false,
  //     email: formData.uid, // or your uid field
  //     password: formData.password,
  //   });
  
  //   if (result?.error) {
  //     setToastMessage({ message: result.error, type: 'error' });
  //   } else {
  //     router.push('/dashboard'); // Redirect to your dashboard
  //     setToastMessage({ message: 'Login successful!', type: 'success' });
  //   }
  
  //   setLoading(false);
  // };
  



  const handleCloseToast = () => {
    setToastMessage(null);
  };

  const handleDropdownClick = (dropdown: string) => {
    closeAllDropdowns(); 
    if (dropdown === "members") {
      setIsMembersDropdownOpen(!isMembersDropdownOpen);
    } else if (dropdown === "programmes") {
      setIsProgrammesDropdownOpen(!isProgrammesDropdownOpen);
    } else if (dropdown === "media") {
      setIsMediaDropdownOpen(!isMediaDropdownOpen);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeAllDropdowns();
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleModalClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav ref={dropdownRef}>
        <div className="fixed w-full md:px-14 px-5 mx-auto py-5 z-50 bg-[#0E1A3D]">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/" className="flex items-center w-[60%] md:w-auto">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link href="/" className={`text-gray-300 px-3 py-2 text-sm font-poppins ${pathname === "/" ? "text-yellow-500 border-b-2 border-yellow-500" : ""}`}>
                    Home
                  </Link>
                  <div className="relative">
                    <button className={`flex items-center text-gray-300 px-3 py-2 gap-2 text-sm font-poppins ${isMembersDropdownOpen || pathname.includes("/members") ? "text-yellow-500" : ""}`}
                      onClick={() => handleDropdownClick("members")}
                    >
                      Members {isMembersDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isMembersDropdownOpen && (
                      <div className="absolute mt-2 flex min-w-[500px] gap-5 justify-center items-center bg-white shadow-lg rounded-[10px] px-3 py-3">
                        <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                          <div className="">
                            <Link href="/registerTwo" className="block text-[18px] text-[#0B142F]">
                              How to join
                              <div>
                                <p className="text-[12px] text-[#0B142F]">Discover how to become a valued member</p>
                              </div>
                            </Link>
                          </div>
                          <div className="mt-2">
                            <Image src="/Head.png" alt="" width={100} height={100} />
                          </div>
                        </div>
                        <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                          <div>
                            <Link href="/login" className="block text-[18px] text-[#0B142F]">
                              Login
                              <div>
                                <p className="text-[12px] text-[#0B142F]">Access exclusive educational events and resources</p>
                              </div>
                            </Link>
                          </div>
                          <div className="mt-2">
                            <Image src="/HeadTwo.png" alt="" width={100} height={100} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <button className={`flex items-center text-gray-300 px-3 py-2 gap-2 text-sm font-poppins ${isProgrammesDropdownOpen || pathname.includes("/programmes") ? "text-yellow-500 border-b-2 border-yellow-500" : ""}`}
                      onClick={() => handleDropdownClick("programmes")}
                    >
                      Programmes {isProgrammesDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isProgrammesDropdownOpen && (
                                            <div className="absolute mt-2 flex min-w-[500px] transform translate-x-[-50%] gap-5 justify-center items-center bg-white shadow-lg rounded-[10px] px-3 py-3">
                                            <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                                              <div className="">
                                                <Link href="/members-Registration" className="block text-[18px] text-[#0B142F]">
                                                Conference
                                                  <div>
                                                    <p className="text-[12px] text-[#0B142F]">Meet industry experts in live interactive sessions</p>
                                                  </div>
                                                </Link>
                                              </div>
                                              <div className="mt-2">
                                                <Image src="/Head.png" alt="" width={100} height={100} />
                                              </div>
                                            </div>
                                            <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                                              <div>
                                                <Link href="/programmes/seminar" className="block text-[18px] text-[#0B142F]">
                                                Seminar/webinar
                                                  <div>
                                                    <p className="text-[12px] text-[#0B142F]">Join the online trainings and group sessions.</p>
                                                  </div>
                                                </Link>
                                              </div>
                                              <div className="mt-2">
                                                <Image src="/HeadTwo.png" alt="" width={100} height={100} />
                                              </div>
                                            </div>
                                          </div>
                    
                    )}
                  </div>

                  <div className="relative">
                    <button className={`flex items-center text-gray-300 px-3 py-2 gap-2 text-sm font-poppins ${isMediaDropdownOpen || pathname.includes("/media") ? "text-yellow-500 border-b-2 border-yellow-500" : ""}`}
                      onClick={() => handleDropdownClick("media")}
                    >
                      Media {isMediaDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {isMediaDropdownOpen && (
                                           <div className="absolute left-0 transform translate-x-[-50%] min-w-[500px] mt-2 flex gap-5 justify-center items-center bg-white shadow-lg rounded-[10px] px-3 py-3 transition duration-300">
                                           <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                                             <div className="">
                                               <Link href="/gallery/media" className="block text-[18px] text-[#0B142F]">
                                                 Gallery
                                                 <div>
                                                   <p className="text-[12px] text-[#0B142F]">Access all of IAIIEA photos</p>
                                                 </div>
                                               </Link>
                                             </div>
                                             <div className="mt-2">
                                               <Image src="/Head.png" alt="" width={100} height={100} />
                                             </div>
                                           </div>
                                           <div className="px-6 py-2 rounded-[10px] hover:bg-slate-300">
                                             <div>
                                               <Link href="/gallery/news" className="block text-[18px] text-[#0B142F]">
                                                 News
                                                 <div>
                                                   <p className="text-[12px] text-[#0B142F]">Find out happenings in the educational industry</p>
                                                 </div>
                                               </Link>
                                             </div>
                                             <div className="mt-2">
                                               <Image src="/HeadTwo.png" alt="" width={100} height={100} />
                                             </div>
                                           </div>
                                         </div>
                   
                    )}
                  </div>

                  <Link href="/blog" className={`text-gray-300 px-3 py-2 text-sm font-poppins ${pathname === "/blog" ? "text-yellow-500 border-b-2 border-yellow-500" : ""}`}>
                    About
                  </Link>
                </div>
              </div>
              <div>
                <Link href='/login'>
                <button  className="bg-transparent border-2 border-[#D5B93C] px-8 py-2 font-semibold text-[#D5B93C]">
                  Login
                </button>
                </Link>
              </div>
              <div>
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className="">
      {isLoginModalOpen && (
        <div onClick={handleModalClickOutside} className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white px-10 py-10 rounded-md w-[40%]">
         <div className='flex flex-col items-center justify-center pb-5'>
          <h1 className="font-semibold text-[38px] pb-3">Welcome Back</h1>
          <p className="mb-4 text-[#0B142F]">Kindly fill in your login details</p>
        </div>
        <form onSubmit={handleSubmit}  className='flex flex-col items-center justify-center w-full'>
          <div className='flex flex-col items-center justify-center w-full pb-2 px-5'>
            <input 
              type="text" 
              name='uid'
              value={formData.uid}
              onChange={handleChange}
              placeholder='Email/Membership ID' 
              className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 mb-4'
            />
            <div className='relative w-full' onClick={togglePasswordVisibility}>
              <input 
               type={showPassword ? 'text' : 'password'}
                name='password'  // Fix typo here
                value={formData.password}
                onChange={handleChange}
                placeholder='Password' 
                className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 pr-12'
              />
               <span className="absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer">
                          {defaultInpType === 'text' ? (
                            <Eye
                              color="#000"
                              size={20}
                              onClick={() => setDefaultInpType('password')}
                            />
                          ) : (
                            <EyeOff
                              color="#000"
                              size={20}
                              onClick={() => setDefaultInpType('text')}
                            />
                          )}
                        </span>
            </div>
          </div>
          <div className='px-5'>
            <Link href='/forgot-password' className='font-medium text-red-400 text-left cursor-pointer text-[14px]'>Forgot Password?</Link>
          </div>
          <div className='my-4 flex items-center justify-center px-5 w-full'>
            <Button
              type="submit" 
              variant="contained"
              className={`bg-[#203a87] text-white px-4 py-4 rounded-lg w-full font-semibold uppercase tracking-wider ${loading ? 'cursor-not-allowed' : ''}`}
              fullWidth 
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </div>
        </form>
        {toastMessage && <Toast message={toastMessage.message} type={toastMessage.type} onClose={handleCloseToast} />}
        <div className='flex items-center justify-center'>
          <p className='font-medium text-[#203A87] cursor-pointer text-[15px]'>Don&apos;t have a member&apos;s account yet? <Link href='/members-Registration' className='font-[600] underline'>Sign up</Link></p>
        </div>
         </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;
