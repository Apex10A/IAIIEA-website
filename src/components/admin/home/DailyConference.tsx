import React from 'react'
import { FiInbox } from 'react-icons/fi' // Example icon from react-icons

const DailyConference = () => {
  return (
    <div className='flex items-center justify-center h-full pt-32'>
      <div className='text-center flex flex-col items-center justify-center'>
        <div className='text-[50px] text-gray-400'>
          <FiInbox />
        </div>
        <p className='opacity-[0.3] text-[25px]'>
          Your Conference list is empty at the moment...
        </p>
      </div>
    </div>
  )
}

export default DailyConference
