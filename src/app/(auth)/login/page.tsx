"use client";
import React, { useState } from 'react';
import Modal from '../login/LoginModal/Modal'; 
import "../../index.css";
import EyeIcon from "../../../assets/auth/svg/PasswordEye";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex flex-col items-center justify-center pb-5'>
          <h1 className="font-semibold text-[38px] pb-3">Welcome Back</h1>
          <p className="mb-4 text-[#0B142F]">Kindly fill in your login details</p>
        </div>
        <div className='flex flex-col items-center justify-center w-full pb-5 px-5'>
          <input 
            type="email" 
            placeholder='Email/Membership ID' 
            className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 mb-4'
          />
          <div className='relative w-full'>
            <input 
              type="password" 
              placeholder='Password' 
              className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 pr-12'
            />
            <div className='absolute right-3 top-4'>
              <EyeIcon />
            </div>
          </div>
        </div>
        <div className='my-4 flex items-center justify-center px-5 w-full'>
          <button
            className="bg-[#203a87] text-white px-4 py-3 rounded-3xl md:w-[70%] w-full font-semibold"
          >
            Login
          </button>
        </div>
        <div className='flex items-center justify-center'>
          <p className='font-medium text-[#203A87] cursor-pointer'>Forgot Password?</p>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
