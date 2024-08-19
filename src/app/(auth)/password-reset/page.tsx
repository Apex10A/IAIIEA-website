import Header from '@/layout/header/page'
import React from 'react'
import "../../index.css";
import EyeIcon from "../../../assets/auth/svg/PasswordEye";

const passwordReset = () => {
  return (
    <div>
        <Header/>
        <div className='absolute transform top-[50%] translate-y-[-50%] flex flex-col items-center justify-center w-full px-5 md:px-0'>
            <h1 className="font-semibold text-[38px]">Password Reset</h1>
            <p className="mb-4 text-[#0B142F]">Enter your new password</p>
            <div className='flex flex-col items-center justify-center pb-5 md:px-5 w-full md:w-[40%] pt-5'>
          <input 
            type="password" 
            placeholder='Password' 
            className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 mb-4'
          />
          <div className='relative w-full'>
            <input 
              type="password" 
              placeholder='Confirm Password' 
              className='border border-[#CACAC9] rounded-lg w-full outline-none focus:ring-1 focus:ring-[#0B142F] py-3 px-4 pr-12'
            />
            <div className='absolute right-3 top-4'>
              <EyeIcon />
            </div>
          </div>
        </div>
        <div className='my-4 flex items-center justify-center md:px-5 w-full md:w-[20%]'>
          <button
            className="bg-[#203a87] text-white px-4 py-3 rounded-3xl w-full font-semibold btn"
          >
            Reset
          </button>
        </div>
    
        </div>
    </div>
  )
}

export default passwordReset