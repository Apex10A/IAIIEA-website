import Header from '@/layout/header/page'
import React from 'react'
import "../../index.css";

const page = () => {
  return (
    <div>
        <Header/>
        <div className='absolute transform top-[50%] translate-y-[-50%] flex flex-col items-center justify-center w-full px-5 md:px-0'>
            <p className='text-[#595958] font-[500] text-[17px] md:text-[20px] pb-2'>A reset link will be sent to your registered email address</p>
            <div className='w-full md:w-[40%] my-3'>
            <input 
            type="email" 
            placeholder='Email Address' 
            className='border border-[#CACAC9] rounded-lg w-full outline-none text-[17px] md:text-[19px] focus:ring-1 focus:ring-[#0B142F] py-2 px-4 mb-4'
          />
            </div>
            <div className='my-4 flex items-center justify-center md:px-5 md:w-[30%] w-full'>
          <button
            className="bg-[#203a87] text-white px-4 md:py-3 py-2 md:text-[19px] text-[17px] rounded-[40px] w-full font-semibold"
          >
            Submit
          </button>
        </div>
        </div>
    </div>
  )
}

export default page