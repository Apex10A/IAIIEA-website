import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';


const conferences = [
  {
    title: 'Conference 2021',
    description: 'A conference about tech innovations and trends.',
    date: 'March 2021',
    imageUrl: '/Meeting.png',
  },
  {
    title: 'Conference 2022',
    description: 'Exploring the future of AI and machine learning.',
    date: 'April 2022',
    imageUrl: '/Meeting.png',
  },
  {
    title: 'Conference 2023',
    description: 'Blockchain and Web3 technologies for a better future.',
    date: 'May 2023',
    imageUrl: '/Meeting.png',
  },
  {
    title: 'Conference 2024',
    description: 'Revolutionizing cloud infrastructure and cybersecurity.',
    date: 'June 2024',
    imageUrl: '/Meeting.png',
  },
];

const ConferenceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % conferences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? conferences.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = (index: number) =>
    index === 0 ? conferences.length - 1 : index - 1;

  const getNextIndex = (index: number) => (index + 1) % conferences.length;

  return (
    <div className='pt-10 pb-20 bg-[#E9EBF3]'>
      <div className='pb-20 pt-10'>
        <h1 className='text-4xl font-bold text-center text-[#0B142F] '>Read about our previous conferences</h1>
      </div>
      <div className="flex items-center justify-center">
      <div className=" w-full">
        {/* Conference Boxes */}
        <div className="flex justify-between">
          {/* Non-active Conference Left */}
          <div
            className={`transform transition-all translate-x-[50%] duration-500 opacity-50 scale-75 bg-[#DEE1ED] rounded-[30px] shadow-lg border`}
          >
              <div className='relative'>
            <div className="absolute z-[20] bottom-5 left-5">
              <button className="bg-[#f2e9c3] px-3 py-2 rounded-md font-[600] text-[18px]">
                Completed
              </button>
            </div>
            <Image
              src={conferences[activeIndex].imageUrl}
              alt={conferences[activeIndex].title}
              width={600}
              height={400}
            />
            </div>
            <div className='px-4 py-3'>
            <h2 className="text-[#0B142F] text-[40px] font-[500]">
              {conferences[getPreviousIndex(activeIndex)].title}
            </h2>
            <p className="text-[#0B142F]">
              {conferences[getPreviousIndex(activeIndex)].description}
            </p>
            <p className="text-sm text-[#0B142F] mt-2">
              {conferences[getPreviousIndex(activeIndex)].date}
            </p>
            <button className="bg-[#203a87] py-3 px-8 text-[#fff] text-[18px] font-[600] tracking-widest mt-2 btn uppercase mx-auto rounded-md block lg:mx-0"
              >
                Read
              </button>
            </div>
          </div>

          {/* Active Conference */}
          <div className="w-[40%] relative z-20">
            <div className='relative'>
            <div className="absolute z-[20] bottom-5 left-5">
              <button className="bg-[#f2e9c3] px-3 py-2 rounded-md font-[600] text-[18px]">
                Completed
              </button>
            </div>
            <Image
              src={conferences[activeIndex].imageUrl}
              alt={conferences[activeIndex].title}
              width={600}
              height={400}
            />
            </div>
            <div className="bg-[#fff] border rounded-b-2xl px-7 pt-3 pb-8">
              <h1 className="text-[#0B142F] text-[40px] font-[500]">
                {conferences[activeIndex].title}
              </h1>
              <p className="text-[#0B142F] text-[19px] font-[500] max-w-xl">
                {conferences[activeIndex].description}
              </p>
              <p className="text-[#0B142F] text-[19px] font-[400] pt-2 pb-3">
                {conferences[activeIndex].date}
              </p>
              <button className="bg-[#203a87] py-3 px-8 text-[#fff] text-[18px] font-[600] tracking-widest mt-2 btn uppercase mx-auto rounded-md block lg:mx-0"
              >
                Read
              </button>
            </div>
          </div>

          {/* Non-active Conference Right */}
          <div
            className={`transform transition-all translate-x-[-50%] duration-500 opacity-50 scale-75 bg-[#DEE1ED] rounded-[30px] shadow-lg`}
          >
              <div className='relative'>
            <div className="absolute z-[20] bottom-5 left-5">
              <button className="bg-[#f2e9c3] px-3 py-2 rounded-md font-[600] text-[18px]">
                Completed
              </button>
            </div>
            <Image
              src={conferences[activeIndex].imageUrl}
              alt={conferences[activeIndex].title}
              width={600}
              height={400}
            />
            </div>
           <div className='px-4 py-3'>
           <h2 className="text-xl font-bold text-[#0B142F]">
              {conferences[getNextIndex(activeIndex)].title}
            </h2>
            <p className="text-[#0B142F]">
              {conferences[getNextIndex(activeIndex)].description}
            </p>
            <p className="text-sm text-[#0B142F] mt-2">
              {conferences[getNextIndex(activeIndex)].date}
            </p>
            <button className="bg-[#203a87] py-3 px-8 text-[#fff] text-[18px] font-[600] tracking-widest mt-2 btn uppercase mx-auto rounded-md block lg:mx-0"
              >
                Read
              </button>
           </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-5 gap-6">
          
          <button
            onClick={handlePrev}
            className="text-[#0B142F] hover:text-[#fbbf24] text-2xl"
          >
            <div className='border rounded-full border-[#0B142F] px-3 py-3'>
            <Image src='/icons/CaretUp.svg' alt='' width={30} height={30}/>
            </div>
          </button>
          <button
            onClick={handleNext}
            className="text-[#0B142F] hover:text-[#fbbf24] text-2xl"
          >
           <div className='border rounded-full border-[#0B142F] px-3 py-3'>
            <Image src='/icons/careti.svg' alt='' width={30} height={30}/>
            </div>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConferenceCarousel;
