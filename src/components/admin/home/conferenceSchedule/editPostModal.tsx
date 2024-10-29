import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div>
            <h1 className='text-[48px] font-[500] text-center'>Edit Info</h1>
          </div>
          <div>
            <label htmlFor="Day">
                <span>Day</span>
            <input type="text" placeholder='write the title for the day' className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" />
            </label>
          </div>
          <div>
            <label htmlFor="Day">
                <span>Activities</span>
            <input type="text" placeholder='write activies' className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" />
            </label>
          </div>
          <div>
            <label htmlFor="Day">
                <span>Day</span>
            <input type="text" placeholder='write the title for the day' className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" />
            </label>
          </div>
          <div>
            <label htmlFor="Day">
                <span>Day</span>
            <input type="text" placeholder='write the title for the day' className="border bg-white px-4 py-3 rounded-[30px] w-[450px]" />
            </label>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
