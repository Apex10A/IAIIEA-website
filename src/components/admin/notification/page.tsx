import React, { useState } from 'react';
import ButtonProp from '@/components/dashboard/notification/button';
import PostButton from './PostButton';
import { FiChevronRight, FiEdit, FiTrash } from 'react-icons/fi';

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
    const [selectedSection, setSelectedSection] = useState<'Announcement' | 'Job Opportunity'>('Announcement');

    const handlePostClick = () => {
        setIsModalOpen(true); // Open the modal when the button is clicked
    };

    return (
        <div className='mx-10 my-10'>
            {/* Header Section */}
            <div className='flex items-center justify-between pb-10'>
                <h1 className='text-[32px] text-[#0B142F] font-[600] pb-1'>Announcement</h1>
                <PostButton onClick={handlePostClick} />
            </div>

            {/* ButtonProp Component */}
            <div>
                <ButtonProp
                    options={['Announcement', 'Job Opportunity']} 
                    selectedSection={selectedSection} 
                    setSelectedSection={setSelectedSection}
                />
            </div>

            {/* Content based on selected section */}
            {selectedSection === 'Announcement' ? (
                <div>
<div className='pt-8 relative'>
<div className='flex items-center justify-center gap-10'>
<div className='border-t border-[#CACAC9] w-[40%]'></div>
                    <div className='pb-2'>
                        <p className='pb-7 italic'>July 23, 2024</p>
                    </div>
                    <div className='border-t border-[#CACAC9] w-[40%]'></div>

</div>
           <div className='border p-4 rounded-lg mb-4'>
           <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='text-[20px] font-[500]'>Webinar has started</h3>
                      </div>
                      <div className='flex space-x-4 mt-4'>
                        <button className='text-blue-500 hover:text-blue-700 flex items-center'>
                          <FiEdit />
                        </button>
                        <button
                          className='text-red-500 hover:text-red-700 flex items-center'
                        
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </div>

                    <div>
                    <div className='flex items-center justify-between pb-2'>
                        <p>Conference 2024</p>
                        <p>Posted: 4:00pm</p>
                    </div>
                    <div>
                        <p>Transforming Learning and Assessment Through the Application of Big Data and Artificial Intelligence</p>
                    </div>
                    </div>
           </div>
           <div className='border p-4 rounded-lg mb-4'>
           <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='text-[20px] font-[500]'>Change of venue & time</h3>
                      </div>
                      <div className='flex space-x-4 mt-4'>
                        <button className='text-blue-500 hover:text-blue-700 flex items-center'>
                          <FiEdit />
                        </button>
                        <button
                          className='text-red-500 hover:text-red-700 flex items-center'
                        
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </div>

                    <div>
                    <div>
                        <p>We apologize for the inconveniences caused, the new venue can be found on the flyer below.</p>
                    </div>
                    </div>
           </div>
                </div>
                </div>
            ) : (
                <div>
                    <div className='border p-4 rounded-lg my-10'>
           <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='text-[20px] font-[500]'>Webinar has started</h3>
                      </div>
                      <div className='flex space-x-4 mt-4'>
                        <button className='text-blue-500 hover:text-blue-700 flex items-center'>
                          <FiEdit />
                        </button>
                        <button
                          className='text-red-500 hover:text-red-700 flex items-center'
                        
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </div>

                    <div>
                    <div className='flex items-center justify-between pb-2'>
                        <p>Conference 2024</p>
                        <p>Posted: 4:00pm</p>
                    </div>
                    <div>
                        <p>Transforming Learning and Assessment Through the Application of Big Data and Artificial Intelligence</p>
                    </div>
                    </div>
           </div>
           <div className='border p-4 rounded-lg my-10'>
           <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='text-[20px] font-[500]'>Grant opportunity</h3>
                      </div>
                      <div className='flex space-x-4 mt-4'>
                        <button className='text-blue-500 hover:text-blue-700 flex items-center'>
                          <FiEdit />
                        </button>
                        <button
                          className='text-red-500 hover:text-red-700 flex items-center'
                        
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </div>

                    <div>
                    <div className='flex items-center justify-between pb-2'>
                        <p>Conference 2024</p>
                        <p>Posted: 4:00pm</p>
                    </div>
                    <div>
                        <p>Transforming Learning and Assessment Through the Application of Big Data and Artificial Intelligence</p>
                    </div>
                    </div>
           </div>
                </div>
            )}
        </div>
    );
};

export default Page;
