"use client"
import React, { useState } from 'react';
import Header from "@/components/layout/header/page";
import RegisterHomeBg from '@/components/home/registerHomeBg';
import Toast from '@/modules/ui/toast';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import '../../index.css';
import CountrySelect from './Country';
import { useRouter } from 'next/navigation'

const Page = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    m_name: '',
    l_name: '',
    type: '',
    profession: '',
    phone: '',
    email: '',
    postal_addr: '',
    country: '',
    qualifications: '',
    area_of_specialization: '',
    institution_name_addr: '',
  });

  const [step, setStep] = useState(0); // Start at step 0
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const [toastMessage, setToastMessage] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  const steps = ['Personal Information', 'Contact Information', 'Academic Information'];

  const validateStep = () => {
    if (step === 0) {
      if (!formData.f_name || !formData.m_name || !formData.l_name || !formData.type || !formData.profession) {
        setToastMessage({ message: 'Please fill out all personal info fields.', type: 'error' });
        return false;
      }
    } else if (step === 1) {
      if (!formData.phone || !formData.email || !formData.postal_addr || !formData.country) {
        setToastMessage({ message: 'Please fill out all contact info fields.', type: 'error' });
        return false;
      }
    } else if (step === 2) {
      if (!formData.qualifications || !formData.area_of_specialization || !formData.institution_name_addr) {
        setToastMessage({ message: 'Please fill out all academic info fields.', type: 'error' });
        return false;
      }
    }
    return true;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Proceed to next step if validation passes
  const handleNextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  // Go back to the previous step
  const handlePreviousStep = () => {
    setStep(prev => prev - 1);
  };

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.AUTH_SECRET}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        router.push('/')
        setFormData({
          f_name: '',
          m_name: '',
          l_name: '',
          type: '',
          profession: '',
          phone: '',
          email: '',
          postal_addr: '',
          country: '',
          qualifications: '',
          area_of_specialization: '',
          institution_name_addr: '',
        });
        setToastMessage({ message: 'Account created successfully!', type: 'success' });
      } else {
        setToastMessage({ message: result.message || 'Registration failed.', type: 'error' });
      }
    } catch (err) {
      setToastMessage({ message: 'An error occurred. Please try again later.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseToast = () => {
    setToastMessage(null);
  };

  return (
    <div>
      <Header/>
      <RegisterHomeBg
        title={'Become a member of IAIIEA'}
        subtitle={'Join the IAIIEA organization to access exclusive membership offers'}
      />
      <div className='md:py-24 md:px-14 max-w-[50%] mx-auto px-5 py-5 min-h-screen'>
        <Stepper activeStep={step} alternativeLabel
        sx={{
          '& .MuiStepIcon-root': {
            color: '#757575', // Custom purple color for the step icons
            '&.Mui-active': {
              color: '#0e1a3d', // Purple when active
            },
            '&.Mui-completed': {
              color: '#0e1a3d', // Green when completed
            },
          },
          '& .MuiStepLabel-label': {
            color: '#757575', // Gray label text
            fontFamily: 'poppins',
            '&.Mui-active': {
              color: '#0e1a3d', // Purple label when active
            },
          },
          '& .MuiStepConnector-root': {
            color: '#0e1a3d', // Custom connector color
          },
        }}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {step === 0 && (
            <>
              <h2 className='pt-14 pb-2 text-sm md:text-[28px] font-[600] opacity-[0.8]'>Personal Information</h2>
              <div className='my-5'>
                <input type="text" name="f_name" placeholder='First name' value={formData.f_name} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="m_name" placeholder='Middle name' value={formData.m_name} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="l_name" placeholder='Last name' value={formData.l_name} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="type" placeholder='Registration type (Individual, Institution)' value={formData.type} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <select name="profession" onChange={handleChange} value={formData.profession} className='border-2 rounded-lg w-full py-3 px-4'>
                  <option value="">Select Profession</option>
                  <option value="Lecturer I">Lecturer I</option>
                  <option value="Lecturer II">Lecturer II</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                  <option value="Professor">Professor</option>
                </select>
              </div>
              <Button onClick={handleNextStep} variant="contained" sx={{
    backgroundColor: '#0e1a3d', // custom green color
    '&:hover': {
      backgroundColor: '#D5B93C', // hover color
    },
    padding: '17px',
    fontWeight: 'bold'
  }} fullWidth>Next {'>'}</Button>
            </>
          )}

          {step === 1 && (
            <>
              <h2 className='pt-10 pb-2 text-sm md:text-[28px] font-[600] opacity-[0.8]'>Contact Information</h2>
              <div className='my-5'>
                <input type="text" name="phone" placeholder='Mobile number' value={formData.phone} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="email" name="email" placeholder='Email address' value={formData.email} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="postal_addr" placeholder='Postal address' value={formData.postal_addr} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <select name="country" onChange={handleChange} value={formData.country} className='border-2 rounded-lg w-full py-3 px-4'>
                  <option value="">Country of domicile</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Spain">Spain</option>
                  <option value="England">England</option>
                  <option value="France">France</option>
                </select>
              </div>
              <div>
                {/* <CountrySelect/> */}
              </div>
              <div className='flex justify-between gap-5'>
                <Button onClick={handlePreviousStep} variant="outlined" sx={{
    backgroundColor: '#0e1a3d',
    color: "#fff", // custom green color
    '&:hover': {
      backgroundColor: '#D5B93C', 
    },
    padding: '13px',
    fontWeight: 'bold'
  }} className=' border-[#0e1a3d] text-[#fff] font-poppins' fullWidth>{'<'} Back</Button>
                <Button onClick={handleNextStep} variant="contained" className='py-3 bg-[#0e1a3d]' fullWidth>Next {'>'}</Button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className='pt-10 pb-2 text-sm md:text-[28px] font-[600] opacity-[0.8]'>Academic Information</h2>
              <div className='my-5'>
                <input type="text" name="qualifications" placeholder='Qualifications' value={formData.qualifications} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="area_of_specialization" placeholder='Area of specialization' value={formData.area_of_specialization} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='my-5'>
                <input type="text" name="institution_name_addr" placeholder='Institution name & address' value={formData.institution_name_addr} onChange={handleChange} className='border-2 rounded-lg w-full py-3 px-4' />
              </div>
              <div className='flex justify-between gap-5'>
                <Button onClick={handlePreviousStep} variant="outlined" className='py-3 border-[#0e1a3d] text-[#0e1a3d] font-poppins' fullWidth>Back</Button>
                <Button type="submit" variant="contained" className='py-3 bg-[#0e1a3d]' fullWidth disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </Button>
              </div>
              
            </>
          )}
        </form>

        {toastMessage && <Toast message={toastMessage.message} type={toastMessage.type} onClose={handleCloseToast} />}
      </div>
    </div>
  );
};

export default Page;
