import React, { useState } from 'react';
import Link from 'next/link';
import ButtonProp from '../../dashboard/notification/button';
import Image from 'next/image';

const Page = () => {
    const [selectedSection, setSelectedSection] = useState<'Conference resources' | 'Seminar resources' | 'Members resources'>('Conference resources');
    
    return (
        <div>
            <div className='py-10'>
                <p className='text-[18px]'> Home {'>'} <span className='font-[600]'>IAIIEA Resources</span></p>
            </div>
            <div> 
                <div>
                    <div>
                        <ButtonProp 
                            options={['Conference resources', 'Seminar resources', 'Members resources']} 
                            selectedSection={selectedSection} 
                            setSelectedSection={setSelectedSection} 
                        />
                    </div>
                </div>
                {selectedSection === 'Conference resources' ? (
                    <div className='my-10 mx-10'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h1 className='text-[28px] text-[#0B142F] font-[500] pb-1'>Conference Resources</h1>
                            </div>
                            <div>
                                <button className='bg-[#203a87] font-semibold text-white px-10 py-3 rounded-[30px] text-[17px]'>Add</button>
                            </div>
                        </div>
                  
                        <div className='my-5 flex items-center gap-10'>
                            <div className='border rounded-t-[30px] max-w-[500px] pb-5 rounded-b-[30px]'>
                                <div className='w-full relative'>
                                    <div className='absolute top-5 right-0 bg-[#F2E9C3] px-5 py-2 rounded-l-[30px] z-30'>
                                        <p className='text-[#0B142F] font-[500]'>Video resources</p>
                                    </div>
                                    <div className='absolute bottom-5 right-5 rounded-[30px] bg-[#F2E9C3] px-4 py-1 z-30'>
                                        <p className='text-[#0B142F] font-[500]'>1:12:00</p>
                                    </div>
                                    <div className='w-full h-[230px] relative '>
                                        <Image 
                                            src='/meeting.png' 
                                            alt='Conference Image' 
                                            layout='fill' 
                                            objectFit='cover' 
                                            className='rounded-t-[30px]'
                                        />
                                    </div>
                                </div>
                                <div className='px-4'>
                                    <p className='pt-3 pb-5 text-[#0B142F] text-[20px]'>
                                        Strategic Thinking for Effective Spiritual and Secular Leadership. Talk Presented by Dr Mike Egbayelo, PhD, FCIS, FICBC, FIMC.
                                    </p>
                                    <a href='/' className='underline text-red-500 font-[600]'>Delete</a>
                                </div>
                            </div>
                            <div className='border rounded-t-[30px] max-w-[500px] pb-5 rounded-b-[30px]'>
                                <div className='w-full relative'>
                                    <div className='absolute top-5 right-0 bg-[#F2E9C3] px-5 py-2 rounded-l-[30px] z-30'>
                                        <p className='text-[#0B142F] font-[500]'>Video resources</p>
                                    </div>
                                    <div className='absolute bottom-5 right-5 rounded-[30px] bg-[#F2E9C3] px-4 py-1 z-30'>
                                        <p className='text-[#0B142F] font-[500]'>1:12:00</p>
                                    </div>
                                    <div className='w-full h-[230px] relative '>
                                        <Image 
                                            src='/meeting.png' 
                                            alt='Conference Image' 
                                            layout='fill' 
                                            objectFit='cover' 
                                            className='rounded-t-[30px]'
                                        />
                                    </div>
                                </div>
                                <div className='px-4'>
                                    <p className='pt-3 pb-5 text-[#0B142F] text-[20px]'>
                                        Strategic Thinking for Effective Spiritual and Secular Leadership. Talk Presented by Dr Mike Egbayelo, PhD, FCIS, FICBC, FIMC.
                                    </p>
                                    <a href='/' className='underline text-red-500 font-[600]'>Delete</a>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 max-w-[500px]'>
                            <div className='bg-[#E9EBF3]'>
                                icon
                            </div>
                            <div className=''>
                            <p>Use of Digital Item Bank Platform for Development of Paper and Online Assessments Dr. Mohamed Abdel-Latif</p>
                            <p>https://www.figma.com/design/hMA4mUVyZ3gOu3MKjTQfrI/IAIIEA?node-id=137-495&t=5dlAHdIGcLct3UnT-0</p>
                            </div>
                        </div>
                    </div>
                    
                ) : (
                    <div>
                        <h1>sjkjksk</h1>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
