import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white md:bg-black md:bg-opacity-50 z-50">
      <div className="bg-white md:px-10 md:py-14 flex md:block flex-col items-center justify-center min-h-screen md:min-h-0 md:rounded-3xl md:shadow-lg relative w-full max-w-md mx-auto">
        <button
          className="absolute top-5 right-5 text-3xl text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
