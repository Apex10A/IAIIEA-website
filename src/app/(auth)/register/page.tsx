import React from 'react'
import Header from "@/components/layout/header/page";
import Link from 'next/link';
import RegisterHomeBg from '@/components/home/registerHomeBg';

const nonMembersRegistration = () => {
  return (
    <div>
        <RegisterHomeBg  
        title={'Welcome to IAIIEA Conference portal'}
        subtitle={'Register to have access to your conference receipt and conference portal'} 
      />
        <div className='md:pt-10 pb-5 md:px-14 px-5 py-5 min-h-screen'>
          <div>
            <h1 className='text-[#0B142F] font-[500] text-2xl md:text-[50px] tracking-tighter py-3'>Sign up</h1>
          </div>
          <div className='py-5'>
          <div className=''>
                  <label htmlFor="first-name">
                    <input type="email" name="" id="" placeholder='Email address' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='my-5'>
                  <label htmlFor="pasword">
                    <input type="password" name="" id="" placeholder='Password' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='mb-5'>
                  <label htmlFor="confirm-password">
                    <input type="password" name="" id="" placeholder='Confirm Password' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
          </div>
          <div>
            <p className='text-[20px] text-[#0B142F]'>Click 'Become a member', it means that you have read and agreed to IAIIEA&apos;s <span className='font-[600]'>   Privacy policy</span></p>
          </div>
          <div className='flex items-center justify-center pt-10'>
          <button className='bg-[#203A87] px-10 py-3 rounded-3xl text-[#fff] btn font-[600]'>Sign up</button>
        </div>
        <div className='flex items-center justify-center pt-5 gap-1'>
          <p className='text-[#0B142F] text-2xl md:text-[20px]'>Already have an account? </p>
          <Link href='/login' className='text-[#0B142F] font-[500] text-2xl md:text-[20px]'>Login</Link>
        </div>
        </div>
    </div>
  )
}

export default nonMembersRegistration