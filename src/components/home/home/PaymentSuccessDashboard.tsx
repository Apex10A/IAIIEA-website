import React from 'react'
import Image from 'next/image'
import '../../../app/index.css'

const PaymentSuccessDashboard = () => {
  return (
    <div>
        <div>
            <h1 className='text-[28px] text-[#0B142F] font-[500] pb-5'>Welcome Faith</h1>
            <div className='border px-4 py-3 rounded-2xl'>
            <p className='pb-4 font-[600] text-[#0B142F]'>Membership subscription</p>
            <p>Your subscription will be due in 10days remember to renew before subscription</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccessDashboard