"use client"
import React, { useState } from 'react';
import Modal from '../../app/(auth)/MemberLogin/Modal';

const PaymentSuccessModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentSuccess = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={handlePaymentSuccess}>
        Simulate Payment Success
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-4">Your payment have been made successfully</h1>
          <p>Proceed to get your receipt</p>
          <div className='flex items-center justify-between pt-5'>
            <button className='px-3 py-3 border border-[#203A87] text-[#203A87]'>Download Receipt</button>
            <button>Receive by Mail</button>
          </div>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default PaymentSuccessModal;
