import React, {useState} from 'react';
import ButtonProp from '../../dashboard/notification/button';
import PaymentHistory from './PaymentHistory'

const Payment = () => {
    const [selectedSection, setSelectedSection] = useState<'Dues settings' | 'Payment History'>('Dues settings');
  
    return (
        <div>
            <div className='py-10'>
                <p className='text-[18px]'> Home {'>'} <span className='font-[600]'>Payment</span></p>
            </div>
            <div>
                <ButtonProp options={['Dues settings', 'Payment History']} selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
                {selectedSection === 'Dues settings' ? (
                    <>
                    <div className='mx-10 my-10'>
                    <div className=''>
          <h1 className='text-[28px] text-[#0B142F] font-[500] pb-1'>Dues Settings</h1>
        </div>
        <div className=''>
            <div className='pt-5'>
                <p className="text-[18px] font-[500] pb-2">Dues type</p>
                <input 
                type="text" 
                placeholder="Select dues type" 
                className="input-field border px-5 py-3 rounded-[30px] w-full  mb-4"
              />
            </div>
            <div className='flex justify-between'>
                <div className='py-10'>
                <div>
                    <h1 className='text-[24px] text-[#0B142F] font-[500] pb-1'>Fees in Naira</h1>
                </div>
                <div className='pt-5 '>
                <p className="text-[18px] font-[500] pb-2">Annual dues</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Vetting fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Publication fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Individual Membership fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Institution Membership fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
                </div>
                <div className='py-10'>
                <div>
                    <h1 className='text-[24px] text-[#0B142F] font-[500] pb-1'>Fees in Dollars</h1>
                </div>
                <div className='pt-5'>
                <p className="text-[18px] font-[500] pb-2">Annual dues</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Vetting fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Publication fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Individual Membership fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
            <div className='pt-2'>
                <p className="text-[18px] font-[500] pb-2">Institution Membership fee</p>
                <input 
                type="text"  
                className="input-field border px-5 py-3 rounded-[30px] w-full mb-4"
              />
            </div>
                </div>
            </div>
        </div>
        <div>
                <button className="bg-[#203a87] text-white px-6 py-3 rounded-3xl font-semibold">Create</button>
            </div>
                    </div>
                    </>
                ) : (
                    <div className='py-10'>
                        <PaymentHistory/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Payment;
