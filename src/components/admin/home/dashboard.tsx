import React, { useState } from 'react';
import { FiChevronRight, FiEdit, FiTrash } from 'react-icons/fi';
import UploadMeals from './uploadMeals/page';
import DailyConference from './DailyConference';
import Link from 'next/link';
// Import your AnnualCalendar component if it's separate
// import AnnualCalendar from './AnnualCalendar';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [conferenceData, setConferenceData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateConference = (newConference) => {
    setConferenceData([...conferenceData, newConference]);
    toggleModal(); // Close modal after creating
  };

  const [conferences, setConferences] = useState([
    {
      id: 1,
      title: 'Conference 1',
      startDate: '2024-10-10',
      endDate: '2024-10-12',
      activities: 'Activity 1',
      venue: 'Venue 1',
      facilitator: 'Facilitator 1',
    },
    {
      id: 2,
      title: 'Conference 2',
      startDate: '2024-10-15',
      endDate: '2024-10-17',
      activities: 'Activity 2',
      venue: 'Venue 2',
      facilitator: 'Facilitator 2',
    },
  ]);

  const handleClick = (component) => {
    setSelectedComponent(component);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDelete = (id) => {
    const updatedConferences = conferences.filter(conference => conference.id !== id);
    setConferences(updatedConferences);
  };

  return (
    <div className='mx-10 py-10'>
      {selectedComponent === '' ? (
        <div>
          <div className='pb-10'>
            <p className='text-[18px]'>
              <Link href='/' className='cursor-pointer'>Home</Link> {'>'} <span className='font-[600]'>Admin Dashboard</span>
            </p>
          </div>
          <div>
          <h1 className='text-[28px] text-[#0B142F] font-[500] pb-1'>Main Activities</h1>
            </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Upload annual calendar main web</p>
              <FiChevronRight />
            </div>
          </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Change page setting</p>
              <FiChevronRight />
            </div>
          </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Post news on main web</p>
              <FiChevronRight />
            </div>
          </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Upload/Update daily meals</p>
              <FiChevronRight />
            </div>
          </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Create Events</p>
              <FiChevronRight />
            </div>
          </div>
          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('annualcalendar')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Edit Annual calendar</p>
              <FiChevronRight />
            </div>
          </div>

          <div
            className='border border-[#CACAC9] w-full py-5 px-6 rounded-[30px] my-5 max-w-[70%]'
            onClick={() => handleClick('conferenceSchedule')}
          >
            <div className='flex items-center justify-between cursor-pointer'>
              <p>Edit Daily conference schedule</p>
              <FiChevronRight />
            </div>
          </div>

        </div>
      ) : (
        <div>
          {selectedComponent === 'annualcalendar' && (
            <div className='py-10'>
              <h1 className='text-[#BAC2DA] text-[28px] font-[500]'>
                <span onClick={() => setSelectedComponent('')}>
                  Home{' '}
                </span>{'>>'}{' '}
                <span className='text-[#203a87] font-[600]'>
                  Annual Calendar
                </span>
              </h1>
              {/* Render the content or component for Annual Calendar */}
              <div className='mt-6'>
                {/* Placeholder for the annual calendar */}
                <p>This is where the annual calendar content or component will go.</p>
              </div>
            </div>
          )}

          {selectedComponent === 'conferenceSchedule' && (
            <div className='py-10'>
              <div className='flex items-center justify-between'>
                <h1 className='text-[#BAC2DA] text-[28px] font-[500]'>
                  <span onClick={() => setSelectedComponent('')}>
                    Home{' '}
                  </span>{'>>'}{' '}
                  <span className='text-[#203a87] font-[600]'>
                    Daily Conference schedule
                  </span>
                </h1>
                <button
                  className='bg-[#203a87] font-semibold text-white px-10 py-3 rounded-[30px] text-[17px] max-w-[30%]'
                  onClick={toggleModal}
                >
                  Create
                </button>
              </div>

              {/* Display list of conferences */}
              <div className='mt-6'>
                {conferences.map((conference) => (
                  <div key={conference.id} className='border p-4 rounded-lg mb-4'>
                    <div className='flex items-center justify-between mb-4'>
                      <div>
                        <h3 className='text-[20px] font-[500]'>Day 2: Tuesday 5th November, 2024</h3>
                      </div>
                      <div className='flex space-x-4 mt-4'>
                        <button className='text-blue-500 hover:text-blue-700 flex items-center'>
                          <FiEdit />
                        </button>
                        <button
                          className='text-red-500 hover:text-red-700 flex items-center'
                          onClick={() => handleDelete(conference.id)}
                        >
                          <FiTrash />
                        </button>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <p>Activities: Registration and pre-conference</p>
                      <p>Posted: 4:00pm</p>
                    </div>
                  </div>
                ))}
              </div>

              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-[28px] font-semibold mb-4 text-[#0B142F] text-center">
                      Create New Conference
                    </h2>
                    <form>
                      <div>
                        <p className='text-[20px] font-[500] pb-2'>Day</p>
                        <input 
                          type="text" 
                          placeholder='Write the title for the day' 
                          className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" 
                        />
                      </div>
                      <div className='flex'>
                        <div className="flex-1 mr-4">
                          <p className='text-[20px] font-[500] pb-2'>Start Date</p>
                          <input 
                            type="date" 
                            placeholder='Select' 
                            className="border bg-white px-4 py-3 rounded-[30px] w-full" 
                          />
                        </div>
                        <div className="flex-1">
                          <p className='text-[20px] font-[500] pb-2'>End Date</p>
                          <input 
                            type="date" 
                            placeholder='Select' 
                            className="border bg-white px-4 py-3 rounded-[30px] w-full" 
                          />
                        </div>
                      </div>
                      <div className='mt-4'>
                        <p className='text-[20px] font-[500] pb-2'>Activities</p>
                        <input 
                          type="text" 
                          placeholder='Where activities' 
                          className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" 
                        />
                      </div>
                      <div className='mt-4'>
                        <p className='text-[20px] font-[500] pb-2'>Venue</p>
                        <input 
                          type="text" 
                          placeholder='Venue' 
                          className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" 
                        />
                      </div>
                      <div className='mt-4'>
                        <p className='text-[20px] font-[500] pb-2'>Facilitator</p>
                        <input 
                          type="text" 
                          placeholder='Facilitator' 
                          className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" 
                        />
                      </div>
                      <button
                        className="bg-[#203a87] text-white px-6 py-2 rounded-[30px] mt-4"
                        type="submit"
                        onClick={() => handleCreateConference(/*pass your data here*/)}
                      >
                        Create
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
