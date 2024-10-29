import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Image from 'next/image';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#f5f4f3',
  boxShadow: 24,
  p: 5,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState<File[]>([]);
  const [error, setError] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    
    if (selectedFiles && selectedFiles.length > 0) {
      const newImages = Array.from(selectedFiles);

      // Check if adding the new images exceeds the limit of 3
      if (images.length + newImages.length > 3) {
        setError('Maximum number of images exceeded');
        return;
      }

      setImages((prevImages) => [...prevImages, ...newImages]);
      setError(''); // Clear the error if no issues
    }
  };

  const handleDeleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      <button onClick={handleOpen} className='bg-[#203a87] text-white px-5 py-3 font-semibold rounded-3xl'>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <h1 className='text-[48px] font-[500] text-center'>Daily Meal</h1>
            <div className='mt-4 flex flex-wrap gap-4'>
                {images.map((image, index) => (
                  <div key={index} className="relative w-[100px] h-[100px]">
                    <Image 
                      src={URL.createObjectURL(image)} 
                      width={250}
                      height={250}
                      alt="uploaded" 
                      className="w-full h-full object-cover rounded-lg" 
                    />
                    <button
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                      onClick={() => handleDeleteImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            <div className='py-10'>
              <p className='text-[20px] font-[500] pb-3'>Food</p>
              <div className='relative'>
                <input 
                  type="text" 
                  placeholder='Write the name of the available meal' 
                  className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" 
                />
                {/* Trigger File Input on Click */}
                <div 
                  className='absolute right-0 w-12 h-12 rounded-full bg-[#bac2da] top-0 cursor-pointer'
                  onClick={() => document.getElementById('imageUpload')?.click()}
                ></div>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  multiple
                  style={{ display: 'none' }} // Hide the input
                  onChange={handleFileChange}
                />
              </div>

              {error && <p className="text-red-500 mt-2">{error}</p>}

              {/* Display Selected Images */}
              

              {/* Upload Button */}
              <button className='bg-[#203a87] text-white px-5 py-3 font-semibold rounded-3xl transition-all duration-200 w-full mt-3'>
                Upload
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
