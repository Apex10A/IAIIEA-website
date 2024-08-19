import React from 'react'
import Header from "@/layout/header/page";
import '../../index.css'

const page = () => {
  return (
    <div className='z-[-1] relative'>
        <Header/>
        <div className='md:py-14 md:px-14 px-5 py-5'>
          <div>
            <h1 className='text-[#0B142F] font-[500] text-2xl md:text-3xl tracking-tighter'>Register here</h1>
          </div>
          <div>
            <p className='py-2 text-sm md:text-md'>Personal Information</p>
            <div className='w-full'>
              <form>
                <div className='my-5'>
                <div className=''>
                  <label htmlFor="first-name">
                    <input type="text" name="" id="" placeholder='First name' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='my-5'>
                  <label htmlFor="first-name">
                    <input type="text" name="" id="" placeholder='Middle name' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='mb-5'>
                  <label htmlFor="first-name">
                    <input type="text" name="" id="" placeholder='Last name' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='mb-5'>
                  <label htmlFor="first-name">
                    <input type="text" name="" id="" placeholder='Registration type (Individual, Institution)' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div>
                  <label htmlFor="first-name" >
                  <select name="" id="" className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4'>
                    <option value="">Lecturer I</option>
                    <option value="">Lecturer II</option>
                    <option value="">Undergraduate</option>
                    <option value="">Postgraduate</option>
                    <option value="">Professor</option>
                  </select>
                  </label>
                </div>
                </div>
              </form>
            </div>
          </div>
          <div className='pt-6'>
            <p className='py-2 font-semibold'>Contact Information</p>
            <div className='w-full'>
              <form>
                <div className='my-5'>
                <div className=''>
                  <label htmlFor="Mobile number">
                    <input type="number" name="" id="" placeholder='Mobile number' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='my-5'>
                  <label htmlFor="Email address">
                    <input type="email" name="" id="" placeholder='Email address' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='mb-5'>
                  <label htmlFor="Postal address">
                    <input type="text" name="" id="" placeholder='Postal address' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div>
                  <label htmlFor="first-name" >
                  <select name="" id="" className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4'>
                    <option value="" disabled>Country of domicile</option>
                    <option value="">Nigeria</option>
                    <option value="">Argentina</option>
                    <option value="">Spain</option>
                    <option value="">England</option>
                    <option value="">France</option>
                  </select>
                  </label>
                </div>
                </div>
              </form>
            </div>
          </div>
          <div className='pt-6'>
            <p className='py-2 font-semibold'>Academic Information</p>
            <div className='w-full'>
              <form>
                <div className='my-5'>
                <div className=''>
                  <label htmlFor="Degree">
                    <input type="text" name="" id="" placeholder='Academic qualification (Doctoral degree, Masters degree, Bachelor’s degree)' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='my-5'>
                  <label htmlFor="Area of specialization">
                    <input type="text" name="" id="" placeholder='Area of specialization' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                <div className='mb-5'>
                  <label htmlFor="first-name">
                    <input type="text" name="" id="" placeholder='Last name' className='border-2 border-[cacac9] rounded-lg w-full outline-[#0B142F] outline-[0.2px] py-3 px-4' />
                  </label>
                </div>
                </div>
              </form>
            </div>
          </div>
          <div className='py-3 font-[500]'>
            <p>Click &apos;Become a member&apos;, it means that you have read and agreed to IAIIEA’s <span className='text-[#203A87] font-[600]'>Privacy policy</span></p>
          </div>
        </div>
        <div className='flex items-center justify-center pb-20'>
          <button className='bg-[#203A87] px-10 py-3 rounded-3xl text-[#fff] btn font-[500]'>Become a member</button>
        </div>
    </div>
  )
}

export default page