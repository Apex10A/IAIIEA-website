import React from 'react'
import Image from 'next/image'
import '../../../app/index.css'

const Home = () => {
  return (
    <div>
        <div>
            <h1 className='text-[28px] text-[#0B142F] font-[500] pb-5'>Welcome Faith</h1>
            <p className='pb-4'>As part of the registration process, you are required to complete your membership fee, to access exclusive content and membership advantages.</p>
            <p>Kindly <span className='font-[600] text-[#203A87] text-[20px] underline'>proceed to payment</span> <span>to complete your registration</span></p>
        </div>
    </div>
  )
}

export default Home