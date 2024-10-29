import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1); // Controls current step (1 or 2)
  const [selectedSection, setSelectedSection] = useState<'Seminar' | 'CreateEvent'>('CreateEvent'); // Default to Create Event

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1); // Max steps set to 2
  };

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // Handler to go back to the seminar section
  const handleBackToSeminar = () => {
    setSelectedSection('Seminar');
    setCurrentStep(1); // Reset the form steps when switching back
  };

  // Handler for changing the section to multi-step event creation
  const handleCreateEventClick = () => {
    setSelectedSection('CreateEvent');
  };

  // Progress bar component
  const renderProgressBar = () => {
    return (
      <div className="flex w-[30%] gap-5 mb-6">
        <div className={`w-[45%] rounded-2xl h-1 ${currentStep >= 1 ? 'bg-[#203A87]' : 'bg-gray-300'}`}></div>
        <div className={`w-[45%] rounded-2xl h-1 ${currentStep >= 2 ? 'bg-[#203A87]' : 'bg-gray-300'}`}></div>
      </div>
    );
  };

  // Render the step form based on the currentStep value
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className='max-w-[60%]'>
            <div>
              <p className="text-[18px] font-[500] pb-2">Photo</p>
              <input type="file" multiple className="border p-2 rounded w-full" />
            </div>
            <div className='pt-3 pb-5'>
              <p className="text-[18px] font-[500] pb-2">Year picture was taken</p>
              <input 
                type="text" 
                placeholder="Select event type" 
                className="input-field border px-5 py-3 rounded-[30px] w-full  mb-4"
              />
            </div>
            
            <div className='flex items-center justify-between'>
              <p className='font-[600] text-[17px] cursor-pointer pt-4 text-[#0B142F]' onClick={handleBackToSeminar}>Cancel</p>
              <p className='font-[600] text-[17px] cursor-pointer pt-4 text-[#0B142F]' onClick={handleNext}>Next</p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className='max-w-[70%]'>
            <div className='pt-10'>
              <div>
                <p className="text-[18px] font-[500] pb-2">Conference Title</p>
                <input type="text" placeholder="Conference Title" className="input-field border px-5 py-3 rounded-[30px] w-full mb-4" />
              </div>
              {/* Add the remaining form fields as required */}
            </div>
            <div className='flex items-center justify-between'>
              <p className='font-[600] text-[17px] cursor-pointer pt-4 text-[#0B142F]' onClick={handlePrevious}>Previous</p>
              <p className='font-[600] text-[17px] cursor-pointer pt-4 text-[#0B142F]'>Save</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className='pt-10 pb-7'>
        <h1 className='text-[28px] text-[#0B142F] font-[500] pb-1'>Upload gallery</h1>
      </div>

      {selectedSection === 'Seminar' ? (
        <>
          <div className='border p-4 rounded-lg mb-10 mt-4'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-[20px] font-[500]'>Start an instant virtual event</h3>
              </div>
              <div>
                <p className='font-[600] text-[#203a87] text-[20px]'>Start</p>
              </div>
            </div>
          </div>
          <div className='border p-4 rounded-lg my-10'>
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-[20px] font-[500]'>Schedule virtual events</h3>
              </div>
              <div>
                <p className='font-[600] text-[#203a87] text-[20px]'>Schedule</p>
              </div>
            </div>
          </div>
          <div 
            className='border p-4 rounded-lg my-10 cursor-pointer'
            onClick={handleCreateEventClick}
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-[20px] font-[500]'>Create Events</h3>
              </div>
              <div>
                <FiChevronRight />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Render progress bar */}
          {renderProgressBar()}

          {/* Render the current step form */}
          {renderStep()}
        </>
      )}
    </div>
  );
};

export default Page;
