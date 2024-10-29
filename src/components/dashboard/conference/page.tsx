import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ToggleButton from "@/components/dashboard/payment/ToggleButton";
import BorderlessTable from './BorderlessTable';
import Conference from "@/modules/ui/conference";
import ButtonProp from '../../dashboard/notification/button'

const Page = () => {
    const [selectedSection, setSelectedSection] = useState<'Conference Portal' | 'Conference Directory'>('Conference Portal');
    
    return (
        <div>
            <div className='py-10'>
                <p className='text-[18px]'>Home {'>'} <span className='font-[600]'>Conference Portal</span></p>
            </div>
            <ButtonProp options={['Conference Portal', 'Conference Directory']} selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
            
            {selectedSection === 'Conference Portal' ? (
                <div>
                    {/* Conference Information */}
                    <div className='flex items-center justify-between my-10'>
                        <h1 className='text-[24px] text-[#0B142F] font-[500]'>2024 CONFERENCE</h1>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#0B142F] text-[20px]'>100+ people registered
                                <Link href='/' className='underline font-[500]'> access participant directory</Link>
                            </p>
                        </div>
                    </div>

                    {/* Conference Header */}
                    <div className='py-6'>
                        <h1 className='text-[35px] text-[#0B142F] font-[600]'>Transforming Learning and Assessment Through the Application of Big Data and Artificial Intelligence</h1>
                    </div>

                    <hr />

                    {/* Conference Date and Location */}
                    <div className='py-6'>
                        <div className='flex items-center gap-2'>
                            <Image src='/Calendar (1).svg' alt='' width={25} height={25} />
                            <p className='text-[18px] text-[#0B142F] font-[400] opacity-[0.8]'>Mon, Nov 2 -  Fri, Nov 8 2024</p>
                        </div>
                        <div className='flex items-start gap-2 pt-2'>
                            <Image src='/MapPin.svg' alt='' width={25} height={25} />
                            <p className='text-[18px] text-[#0B142F] font-[400] max-w-2xl opacity-[0.8]'>
                                UBEC Digital Resource Centre, Opposite Next Gen (Cash and Carry) Supermarket, Mabushi, Jahi District, Abuja. Nigeria. West Africa.
                            </p>
                        </div>
                    </div>

                    <hr />

                    {/* Conference Resources */}
                    <div className='pt-6'>
                        <h1 className='text-[35px] text-[#0B142F] font-[700] opacity-[0.8] pb-2'>Resources</h1>
                        <div className='flex items-center gap-3'>
                            <p className='text-[#0B142F] text-[20px]'>View
                                <Link href='/' className='underline font-[600]'> conference preceding</Link>
                            </p>
                        </div>
                    </div>

                    {/* Get Conference Resources */}
                    <div className='pb-6 flex items-center justify-between'>
                        <p className='text-[20px] text-[#0B142F] font-[700] opacity-[0.8]'>Get the conference resources by each speaker here</p>
                        <button>Resources</button>
                    </div>

                    <hr />

                    {/* Daily Conference Schedule */}
                    <div className='py-6'>
                        <div>
                            <h1 className='text-[35px] text-[#0B142F] font-[700] opacity-[0.8] pb-1'>Daily conference schedule</h1>
                            <h1 className='text-[18px] text-[#0B142F] font-[400] opacity-[0.8]'>Day 1: Monday 4th November 2024</h1>
                        </div>
                        <BorderlessTable />
                    </div>

                    <hr />

                    {/* Meal Ticketing */}
                    <div className='py-6'>
                        <h1 className='text-[35px] text-[#0B142F] font-[700] opacity-[0.8] pb-1'>Meal ticketing</h1>
                        <p>This is the list of food currently available for the day. Select any food of your choice</p>
                    </div>

                    {/* Food Options */}
                    <div className='flex items-center gap-10'>
                        <div className='border'>
                            <Image src='/Jollof.png' alt='' width={350} height={250} />
                            <div className='flex flex-col items-center pb-3'>
                                <p className='text-[25px] text-[#0B142F] font-[500] py-2 text-center'>Nigerian Jollof</p>
                                <button className='border px-5 py-3 font-[600]'>Select</button>
                            </div>
                        </div>
                        <div className='border'>
                            <Image src='/Egusi.png' alt='' width={350} height={250} />
                            <div className='flex flex-col items-center pb-3'>
                                <p className='text-[25px] text-[#0B142F] font-[500] py-2 text-center'>Egusi Soup</p>
                                <button className='border px-5 py-3 font-[600]'>Select</button>
                            </div>
                        </div>
                    </div>

                    {/* Virtual Event Access */}
                    <div className='py-6'>
                        <h1 className='text-[35px] text-[#0B142F] font-[700] opacity-[0.8] pb-1'>Join event for virtual attendees</h1>
                        <div className='flex items-center gap-6'>
                            <p>You can access the live event from here</p>
                            <button className='bg-[#203a87] font-semibold text-white px-8 py-3 rounded-[30px] text-[17px] max-w-[30%]'>Join in</button>
                        </div>
                    </div>

                    {/* Certification */}
                    <div className='py-6'>
                        <h1 className='text-[35px] text-[#0B142F] font-[700] opacity-[0.8] pb-1'>Certification</h1>
                        <div className='flex items-center gap-3'>
                            <p>Complete the conference evaluation to</p>
                            <Link href='/dashboard/conference-evaluation'>access certificate</Link>
                        </div>
                    </div>

                    {/* Conference Component */}
                    <div>
                        <Conference />
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className='text-[42px] opacity-[0.2] font-semibold py-5 px-5'>Coming soon!!!</h1>
                </div>
            )}
        </div>
    );
};

export default Page;
