"use client"
import React, { useState } from 'react';
import Modal from './Modal';
import "../../index.css";
import EyeIcon from "../../../assets/auth/svg/PasswordEye";
import Toast from '@/modules/ui/toast';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Login = () => {
  const [formData, setFormData] = useState({
    uid: '',
    password: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const router = useRouter()
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.AUTH_SECRET}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/dashboard')
        setFormData({
          uid: '',
          password: ''
        });
        setToastMessage({ message: 'Login successful!', type: 'success' });
      } else {
        console.error("Login failed", result); // Log the full result for debugging
        setToastMessage({ message: result?.message || 'Login failed.', type: 'error' });
      }
    } catch (err) {
      setToastMessage({ message: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseToast = () => {
    setToastMessage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Open Modal
      </button> */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex flex-col items-center justify-center pb-5'>
          <h1 className="font-semibold text-[38px] pb-3">Welcome Back</h1>
          <p className="mb-4 text-[#0B142F]">Kindly fill in your login details</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full'>
          <div className='flex flex-col items-center justify-center w-full pb-2 px-5'>
            <input 
              type="text" 
              name='uid'
              value={formData.uid}
              onChange={handleChange}
              placeholder='Email/Membership ID' 
              className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 mb-4'
            />
            <div className='relative w-full'>
              <input 
                type="password" 
                name='password'  // Fix typo here
                value={formData.password}
                onChange={handleChange}
                placeholder='Password' 
                className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 pr-12'
              />
              <div className='absolute right-3 top-4'>
                <EyeIcon />
              </div>
            </div>
          </div>
          <div className='px-5'>
            <Link href='/forgot-password' className='font-medium text-red-400 text-left cursor-pointer text-[14px]'>Forgot Password?</Link>
          </div>
          <div className='my-4 flex items-center justify-center px-5 w-full'>
            <Button
              type="submit" 
              variant="contained"
              className={`bg-[#203a87] text-white px-4 py-3 rounded-lg w-full font-semibold uppercase tracking-wider ${loading ? 'cursor-not-allowed' : ''}`}
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
      </Modal>
    </div>
  );
};

export default Login;
