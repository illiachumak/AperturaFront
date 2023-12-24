'use client'

// Import statements...
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, selectIsCartOpen, initializeCartFromStorage,
   removeFromCart, changeQuantity, selectIsSendModalOpen, openSendModal, closeSendModal } from '../../redux/slices/cartSlice';
import productImg from '../../assets/product/door.png';
import Image from 'next/image';
import {setLoading} from '../../redux/slices/flagSlice'

const Cart = () => {
  const isOpen = useSelector(selectIsCartOpen);
  const productArr = useSelector((state) => state.cart.items);
  const isSendModalOpen = useSelector(selectIsSendModalOpen)
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneIsValid, setPhoneIsValid] = useState(true);
  const [nameIsValid, setNameIsValid] = useState(true)
  const phoneRegex = /^(\+38)?\d{10}$/;
  const validatePhoneNumber = () => {
    setPhoneIsValid(phoneRegex.test(phone));
  };
  const validateEmail = () => {
    setEmailIsValid(emailRegex.test(email));
  };
  const validateName = () => {
    setNameIsValid(name.trim());
  }

  
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
      setIsOpen(true)
    }
  };



  const handleCloseModal = () => {
    dispatch(closeCart());
  };
  const handleCloseSendModal = () => {
    dispatch(closeSendModal());
  };
  const handleOpenSendModal = () => {
    dispatch(openSendModal())
  }

  const removeItem = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const increaseQuantity = (productId) => {
    dispatch(changeQuantity({ id: productId, quantity: 1 }));
  };

  const decreaseQuantity = (productId) => {
    dispatch(changeQuantity({ id: productId, quantity: -1 }));
  };
  const handleLoading = (bool) => {
    dispatch(setLoading(bool))
  }
  useEffect(() => {
    dispatch(initializeCartFromStorage());
  }, [isOpen]);

  const calculateTotalPrice = () => {
    const total = productArr.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return total;
  };
  
  useEffect(()=>{
    return ()=>{
      setEmailIsValid(true)
      setPhoneIsValid(true)
      setNameIsValid(true)
    }
  },[])

  return (
    <div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <div className='w-full px-[2%] pt-[5%] pb-[4%] flex flex-col justify-between'>
          <div>
            <p className='text-[32px] px-[2%] '>Корзина</p>
            <hr className='w-[88%] border-[1.5px] mb-8 mt-3 mx-[2%]'/>
            <div className='max-h-[50vh]  overflow-scroll mb-8 flex flex-col gap-6 px-[2%] py-[2%] rounded-[5px] bg-[#2b1f0e] custom-scroll'>
              {productArr.length ? (
                productArr.map((item, i) => {
                  return (
                    <div key={item?.uid + i} className='w-[85%] flex justify-between'>
                      <Image src={productImg} alt="door" className=' max-w-[180px] w-[30%] h-auto'/>
                      <div className='w-[65%] flex flex-col justify-between'>
                        <div>
                          <p className='text-[24px] mb-3'>{item.name}</p>
                          <div className='w-full flex flex-wrap justify-between basis-[65%] overflow-scroll'>
                            {item.optionals.map((option, i) => (
                              <div className='w-[45%]' key={i}>{option.name} - {option.value}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                        <p className='text-[16px]' onClick={()=> handleLoading(true)}>Ціна: <b>{item.price*item.quantity} грн</b></p>
                        <div className='w-full flex justify-between items-center'>
                          <div className='flex w-1/2 justify-between items-center'>
                            <p>
                              Кількість: <b>{item.quantity}</b>
                            </p>
                            <div className='flex flex-col gap-0'>
                              <b className='cursor-pointer text-[14px]'  onClick={() => increaseQuantity(item.uid)}>+</b>
                              <b className='cursor-pointer text-[14px]' onClick={() => decreaseQuantity(item.uid)}>-</b>
                            </div>
                          </div>
                          <button
                            className="main_button-white w-[40%] max-[500px]:w-[45%] text-white py-4 px-6 max-[1000px]:text-[10px] min-h-[36px] rounded"
                            onClick={() => removeItem(item.id)}
                          >
                            Видалити
                          </button>
                        </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className='w-full flex justify-center my-24'><p className='text-[2rem]'>Корзина пуста!</p></div>
              )}
            </div>
          </div>
          {productArr && <div className='w-full flex gap-4 items-center mb-4'>
            <p className='text-[20px]'>Загальна ціна:</p>
            <p className='text-[20px]'>{calculateTotalPrice()} грн</p>
          </div>}

          <div className='flex justify-between'>
            <button
              className="main_button-white w-[40%] max-[500px]:w-[45%] text-white py-4 px-6 max-[1000px]:text-[10px] min-h-[36px] rounded"
              onClick={handleCloseModal}
            >
              Продовжити покупки
            </button>
            <button
              className="main_button-white w-[40%] max-[500px]:w-[45%] text-white py-4 px-6 
              max-[1000px]:text-[10px] min-h-[36px] rounded"
              onClick={handleOpenSendModal}
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </Modal>

      {/*Send modal*/}

      <Modal isOpen={isSendModalOpen} onClose={handleCloseSendModal}>
        <div className='w-full h-full px-[2%] pt-[5%] pb-[4%] flex flex-col justify-between'>
        <p className='text-[32px] mb-4 '>Корзина</p>
        <div className="my-8 mb-8">
    <label className="block mb-2 text-3xl font-medium">Електронна пошта</label>
    <input
      type="email"
      className={`${
        emailIsValid ? '' : 'border-main-red'
      } h-[45px] text-xl rounded-md p-2.5 border-2 border-white bg-transparent w-full`}
      placeholder="apertura@gmail.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      onBlur={validateEmail}
    />
    {!emailIsValid && (
      <label className="block mt-2 text-[#f53131] text-[12px] font-medium">
        Введіть правильну електронну пошту!
      </label>
    )}
  </div>

        <div>
            <label className="block mb-2 text-3xl font-medium ">Імʼя</label>
            <input
              type="name"
              className={` ${
                nameIsValid ? '' : 'border-main-red'
              }h-[45px] border-2 text-xl  border-white
              rounded-md  p-2.5 bg-transparent w-full`}
              placeholder="Ім`я"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={validateName}
            />
            {!nameIsValid && <label className="block mt-2 text-[#f53131] text-[12px] font-medium ">Введіть Імʼя!</label>}
          </div>
          <div className="my-8 mb-12">
            <label className="block mb-2 text-3xl font-medium ">Телефон</label>
            <input
              type="tel"
              className={`${
                phoneIsValid ? '' : 'border-main-red'
              } h-[45px] text-xl rounded-md p-2.5 border-2 border-white bg-transparent w-full`}
              placeholder="(097)-743-23-56"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={validatePhoneNumber}
            />
            {!phoneIsValid && <label className="block mt-2 text-[#f53131] text-[12px] font-medium ">Введіть правильний номер!</label>}
          </div>
          <button
            className="text-xl main_button-white w-full h-[40px]"
            onClick={(e) => handleOrderButtonClick(e)}
          >
            Подзвонити мені
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
