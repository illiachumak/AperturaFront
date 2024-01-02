'use client'
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { orderFeedback, setIsOkFalse} from '../../redux/slices/orderSlice';
const FeedbackSection = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [nameIsValid, setNameIsValid] = useState(true)
  const phoneRegex = /^(\+38)?\d{10}$/;
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch(); 
  const {isOk} = useSelector(state=> state.order)
  const validatePhoneNumber = () => {
    setPhoneIsValid(phoneRegex.test(phoneNumber));
  };

  const handleOrderButtonClick = (e) => {
    e.preventDefault();
    setNameIsValid(true);
    setPhoneIsValid(true);
    validatePhoneNumber();
    // Check for name validity
    if (!name.trim()) {
      setNameIsValid(false);
    }
  
    if (name.trim() && phoneIsValid) {
      dispatch(orderFeedback({
        name: name,
        number: phoneNumber
      }))
    }
  };

  useEffect(()=>{
    if(isOk){
      setIsOpen(true)
    }
  },[isOk])
  useEffect(()=>{
    return()=>{
      setIsOpen(false);
      dispatch(setIsOkFalse())
    }
  },[])

  return (<>
  {isOpen && <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <div className='w-full h-full px-[8%] py-[40px]'>
      <b className='text-[18px] mb-2'>{name}, дякуємо за цікавість!</b>
      <p>Ми зателефонуємо вам протягом 1 робочого дня</p>
    </div>
    </Modal>}
    <div id="section-to-scroll" className="w-full pt-16 bg-[#130E04]">
      <div className="responsive-container flex flex-row max-[780px]:flex-col gap-12 justify-between">
        <div className="max-w-1/2 flex flex-col justify-center max-[780px]:order-2 max-[780px]:max-w-[100%]">
          <div>
            <label className="block mb-2 text-3xl font-medium ">Імʼя</label>
            <input
              type="name"
              className={`${
                nameIsValid ? 'border-main' : 'border-main-red'
              }  border-2 text-xl rounded-md w-[400px] p-2.5 bg-transparent 
            max-[1000px]:h-[40px] max-[875px]:w-[350px] max-[780px]:w-full`}
              placeholder="Ім`я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!nameIsValid && <label className="block mt-2 text-[#f53131] text-[12px] font-medium ">Введіть Імʼя!</label>}
          </div>
          <div className="my-10">
            <label className="block mb-2 text-3xl font-medium ">Телефон</label>
            <input
              type="tel"
              className={`${
                phoneIsValid ? 'border-main' : 'border-main-red'
              }  text-xl rounded-md w-full p-2.5 !border-2 bg-transparent 
                max-[1000px]:h-[40px] max-[875px]:w-[350px] max-[780px]:w-full`}
              placeholder="(097)-743-23-56"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {!phoneIsValid && <label className="block mt-2 text-[#f53131] text-[12px] font-medium ">Введіть правильний номер!</label>}
          </div>
          <button
            className="text-xl main_button  !py-4 mt-10 mb-20 w-2/3 
            !max-[900px]:text-[12px] max-[780px]:w-full"
            onClick={(e) => handleOrderButtonClick(e)}
          >
            Замовити дзвінок
          </button>
        </div>
        <div className="w-full flex flex-col max-[780px]:order-1 max-[780px]:max-w-[100%] ">
          <h1 className="font-black text-3xl my-10 max-[780px]:my-2">ЗВОРОТНІЙ ЗВ`ЯЗОК</h1>
          <p className="font-normal text-[24px] font-mono leading-10 my-6 
            max-[670px]:text-[20px] max-[568px]:text-[18px]">
            У нашій компанії кожен клієнт – це особливий гість, і ми прагнемо забезпечити вам найвищий рівень задоволення від кожного замовлення.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default FeedbackSection;
