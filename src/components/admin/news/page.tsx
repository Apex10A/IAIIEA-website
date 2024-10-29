import React from 'react'

const page = () => {
    const newsData = [
        { id: 1, title: 'The title of this news goes here', description: 'The description of this news goes. you can write as much as possible. Its already truncated.' }
    ]
  return (
    <div className='mx-10 my-10'>
       <div className='flex items-center justify-between'>
       <div>
        <h2 className="text-[28px] font-semibold">News</h2>
        </div>
        <div>
        <button
            className="bg-[#203a87] text-white px-6 py-2 rounded-full"
          >
            Add news
          </button>
        </div>
       </div>
       <div className='grid grid-cols-3 gap-10 py-10'>
        <div className='border px-5 py-10 rounded-[30px]'>
            <p className='font-semibold pb-2'>The title of this news goes here</p>
            <p className='opacity-[0.7]'>The description of this news goes. you can write as much as possible. Its already truncated.</p>
            <p className='pt-3 font-semibold underline'>Edit news {'>'}</p>
        </div>
        <div className='border px-5 py-10 rounded-[30px]'>
            <p className='font-semibold pb-2'>The title of this news goes here</p>
            <p className='opacity-[0.7]'>The description of this news goes. you can write as much as possible. Its already truncated.</p>
            <p className='pt-3 font-semibold underline'>Edit news {'>'}</p>
        </div>
        <div className='border px-5 py-10 rounded-[30px]'>
            <p className='font-semibold pb-2'>The title of this news goes here</p>
            <p className='opacity-[0.7]'>The description of this news goes. you can write as much as possible. Its already truncated.</p>
            <p className='pt-3 font-semibold underline'>Edit news {'>'}</p>
        </div>
        <div className='border px-5 py-10 rounded-[30px]'>
            <p className='font-semibold pb-2'>The title of this news goes here</p>
            <p className='opacity-[0.7]'>The description of this news goes. you can write as much as possible. Its already truncated.</p>
            <p className='pt-3 font-semibold underline'>Edit news {'>'}</p>
        </div>
       </div>
    </div>
  )
}

export default page