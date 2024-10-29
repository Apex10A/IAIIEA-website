import React, { useState } from 'react';
import Image from 'next/image';
import UploadGallery from './uploadGallery'

const Page = () => {
  // State to store the selected year or null
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Define different sets of images for each year
  const yearImages: { [key: string]: { src: string; alt: string }[] } = {
    '2024': [
      { src: '/2024-image1.png', alt: '2024 Image 1' },
      { src: '/2024-image2.png', alt: '2024 Image 2' },
      { src: '/2024-image3.png', alt: '2024 Image 3' },
    ],
    '2023': [
      { src: '/2023Woman.png', alt: '2023 Image 1' },
      { src: '/2023Girl.png', alt: '2023 Image 2' },
      { src: '/2023faith.png', alt: '2023 Image 3' },
    ],
    '2022': [
      { src: '/2022-image1.png', alt: '2022 Image 1' },
      { src: '/2022-image2.png', alt: '2022 Image 2' },
      { src: '/2022-image3.png', alt: '2022 Image 3' },
    ],
    '2021': [
      { src: '/2021-image1.png', alt: '2021 Image 1' },
      { src: '/2021-image2.png', alt: '2021 Image 2' },
      { src: '/2021-image3.png', alt: '2021 Image 3' },
    ],
  };

  const handleImageClick = (year: string) => {
    setSelectedYear(year);
  };

  // Handle going back to the gallery view
  const handleBackClick = () => {
    setSelectedYear(null); 
  };

  return (
    <div className="mx-4 my-10">
      {/* Conditionally render either the main gallery or the selected year's images */}
      {selectedYear ? (
        // Render images for the selected year
       <div>
        <button
            onClick={handleBackClick}
            className="bg-[#203a87] text-white px-6 py-2 rounded-full mb-4"
          >
            Back to Gallery
          </button>
          <div className="flex flex-col my-5">
          <div className='flex items-center justify-between'>
          <h2 className="text-[28px] font-semibold">{selectedYear} Gallery</h2>
          <button
            onClick={handleBackClick}
            className="bg-[#203a87] text-white px-6 py-2 rounded-full"
          >
            Update gallery
          </button>
          </div>
          <div className="grid grid-cols-3 gap-6 my-10">
            {yearImages[selectedYear].map((image, index) => (
              <div key={index}>
                <Image src={image.src} alt={image.alt} width={300} height={300} />
              </div>
            ))}
          </div>
        </div>
       </div>
      ) : (
        // Render the main gallery
        <>
          <div className="flex items-center justify-between">
            <h1 className="text-[28px] text-[#0B142F] font-[500] pb-1">Gallery</h1>
            <button className="bg-[#203a87] font-semibold text-white px-10 py-3 rounded-[30px] text-[17px]">
              Upload gallery
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 my-10">
            {/* Main year images */}
            <div onClick={() => handleImageClick('2024')} className="cursor-pointer">
              <Image src="/2024.png" alt="2024" width={300} height={300} />
            </div>
            <div onClick={() => handleImageClick('2023')} className="cursor-pointer">
              <Image src="/2023.png" alt="2023" width={300} height={300} />
            </div>
            <div onClick={() => handleImageClick('2022')} className="cursor-pointer">
              <Image src="/2022.png" alt="2022" width={300} height={300} />
            </div>
            <div onClick={() => handleImageClick('2021')} className="cursor-pointer pt-6">
              <Image src="/2021.png" alt="2021" width={300} height={300} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
