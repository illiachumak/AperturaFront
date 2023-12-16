'use client'
import React from 'react';
import Image from 'next/image';
import Xbtn from '../../assets/modal/x.svg'

const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? ' z-[21] fixed inset-0 flex items-center justify-center' : 'hidden';
  const overlayClasses = isOpen ? 'z-[20] fixed inset-0 bg-overlay' : '';
  const modalContentClasses = isOpen ? 'z-[21] bg-[#3A2911] w-[60%] max-[900px]:w-[75%] max-[500px]:w-[95%] p-4 relative' : '';

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    // Зупиняємо подальше поширення події кліка
    e.stopPropagation();
  };

  return (
    <div className={overlayClasses} onClick={handleOverlayClick}>
        <div className={modalClasses}>
            <div className={modalContentClasses} onClick={handleModalClick}>
                <Image src={Xbtn} alt='' className='absolute top-8 right-8 cursor-pointer' onClick={onClose}/>
                {children}
            </div>
        </div>
    </div>
  );
};

export default Modal;
