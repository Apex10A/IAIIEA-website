import React from 'react'

const Page = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <h1 className='text-[48px] font-[500] text-[#BAC2DA]'>Home {'>>'} Daily Conference schedule</h1>
            <button className='bg-[#203a87] text-white px-5 py-3 font-semibold rounded-3xl transition-all duration-200 w-full mt-3'>create</button>
        </div>
        <div>
            <p>Your List is currently empty</p>
        </div>
    </div>
  )
}

export default Page