import React from 'react'
import Link from 'next/link';
import RegisterHomeBg from '@/components/home/registerHomeBg';
import Button from '@mui/material/Button';
import Toast from '@/modules/ui/toast';

const index = () => {
  return (
    <div>
        <div>
        <RegisterHomeBg  
        title={'Welcome back'}
        subtitle={'Kindly fill in your login details to access to your conference receipt and conference portal'} 
      />
        <div className='md:pt-14 pb-5 md:px-14 px-5 py-5 min-h-screen max-w-[50%] mx-auto'>
          <div>
            <h1 className='text-[#0B142F] font-[500] text-2xl md:text-[50px] tracking-tighter py-3'>Log in</h1>
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
                <div className=''>
          <Link href='/forgot-password' className='text-red-500 font-[600] text-xl md:text-[16px]'>forgot password?</Link>
          </div>
          </div>
          <div className='flex items-center justify-center'>
          <Button className='bg-[#203A87] p-[15px] rounded-lg text-[#fff] btn font-[600] w-full' variant='contained' >Log in</Button>
        </div>
        <div className='flex items-center justify-center pt-3 gap-1'>
          <p className='text-[#0B142F] text-xl md:text-[16px]'>Don&apos;t have an conference account yet? </p>
          <Link href='/conference-Registration' className='text-[#0B142F] font-[500] text-xl md:text-[16px] underline'>Sign up</Link>
        </div>
        </div>
    </div>
    </div>
  )
}

export default index