"use client"
import Header from '@/components/layout/header/page'
import React, {useState} from 'react'
import "../../index.css";
import Button from '@mui/material/Button';
import Toast from '@/modules/ui/toast';
import { useRouter } from 'next/navigation'

const Page = () => {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [toastMessage, setToastMessage] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forgot_password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.AUTH_SECRET}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({
          email: '',
        });
        setToastMessage({ message: 'eEmail sent successfully', type: 'success' });
      } else {
        setToastMessage({ message: result.message || 'Registration failed.', type: 'error' });
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
    <div>
        <Header/>
        <div className='absolute transform top-[50%] translate-y-[-50%] flex flex-col items-center justify-center w-full px-5 md:px-0'>
          <h1 className='pt-7 text-sm md:text-[40px] pb-10 font-[500] opacity-[0.7]'>Reset your password</h1>
            <p className='text-[#595958] font-[500] text-[17px] md:text-[20px] pb-2'>A reset link will be sent to your registered email address</p>
            <div className='w-full md:w-[40%] my-3'>
            <input 
            type="email" 
            placeholder='Email Address' 
            className='border border-[#CACAC9] rounded-lg w-full outline-none text-[17px] md:text-[19px] focus:ring-1 focus:ring-[#0B142F] py-2 px-4 mb-4'
          />
          <button
            className="bg-[#203a87] text-white px-4 md:py-4 py-2 md:text-[19px] text-[17px] rounded-xl w-full font-semibold"
          >
            Submit
          </button>
            </div>
            <div className='my-4 flex items-center justify-center md:px-5 w-full'>
          
        </div>
        </div>
    </div>
  )
}

export default Page