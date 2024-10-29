"use client"
import React, { useState } from 'react';
import Modal from '../../app/(auth)/MemberLogin/Modal';

const PaymentFailedModal: React.FC = () => {
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
        Simulate Payment failure
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-4">Your payment failed</h1>
          <p>Your payment could not be completed</p>
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

export default PaymentFailedModal;
