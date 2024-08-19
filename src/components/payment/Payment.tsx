import React from 'react'

const Payment = () => {
  return (
    <div>
        <div>
            <div>
            <div className='flex items-center gap-3'>
            <button className='bg-[#bac2da] rounded-[40px] px-5 py-2'>Payment</button>
            <button className='border-2 border-[#CACAC9] rounded-[40px] px-5 py-2'>Payment history</button>
            </div>
            <div className='pt-5'>
            <p className='pb-4'>You currently have 1 pending payment to clear</p>
            </div>
            </div>

            <div className='border px-4 py-3 rounded-2xl'>
                <div className='mb-3'>
                <p className='text-[20px] text-[#0B142F] font-[600]'>Membership registration fee</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-[16px] text-[#0B142F] font-[400]'>You can access other membershp content after paying your fee.</p>
                    <p className='text-[16px] text-[#0B142F] font-[600]'>Posted: 4:00pm </p>
                </div>
                <div className='flex items-center justify-between pt-5'>
                    <p>NGN 20,000</p>
                    <button className="bg-[#203a87] text-white px-6 py-3 rounded-3xl font-semibold">Make payment</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment