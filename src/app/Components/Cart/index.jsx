'use client'

// Import statements...
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeCart, selectIsCartOpen, initializeCartFromStorage, removeFromCart, changeQuantity } from '../../redux/slices/cartSlice';
import productImg from '../../assets/product/door.png';
import Image from 'next/image';
import {setLoading} from '../../redux/slices/flagSlice'

const Cart = () => {
  const isOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeCart());
  };
  const productArr = useSelector((state) => state.cart.items);

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

  return (
    <div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className='w-full h-full px-[4%] pt-[7%] pb-[4%] flex flex-col justify-between'>
          <div>
            <p className='text-[32px]'>Корзина</p>
            <hr className='w-[85%] border-[1.5px] mb-8 mt-3'/>
            <div className='max-h-[400px] overflow-scroll mb-8'>
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
                        <p className='text-[16px]' onClick={()=> handleLoading(true)}>Ціна: <b>{item.price*item.quantity}</b></p>
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
          <div className='flex justify-between'>
            <button
              className="main_button-white w-[40%] max-[500px]:w-[45%] text-white py-4 px-6 max-[1000px]:text-[10px] min-h-[36px] rounded"
              onClick={closeModal}
            >
              Продовжити покупки
            </button>
            <button
              className="main_button-white w-[40%] max-[500px]:w-[45%] text-white py-4 px-6 max-[1000px]:text-[10px] min-h-[36px] rounded"
            >
              Оформити замовлення
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
