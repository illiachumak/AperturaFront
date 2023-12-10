'use client';
import Image from 'next/image';
import productImg from '../../assets/product/door.png';
import { useEffect, useState } from 'react';

let dummyData = {
  uid: '2jghj23434F461',
  name: 'Міжкімнатні двері',
  category: 'doors',
  description: 'Lorem ipsum...',
  price: 2000,
  img: 'imgUrl',
  optionals: [
    {
      name: 'Ручки',
      options: [
        {
          name: 'ручка 2322',
          price: 2000,
        },
        {
          name: 'ручка 2323',
          price: 2000,
        },
        {
          name: 'ручка 2324',
          price: 2000,
        },
        {
          name: 'ручка 2325',
          price: 2000,
        },
        {
          name: 'ручка 2326',
          price: 2000,
        },
        {
          name: 'ручка 2327',
          price: 2000,
        },
        {
          name: 'ручка 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ше шось',
      options: [
        {
          name: 'Ше шось 2322',
          price: 2000,
        },
        {
          name: 'Ше шось 2323',
          price: 2000,
        },
        {
          name: 'Ше шось 2324',
          price: 2000,
        },
        {
          name: 'Ше шось 2325',
          price: 2000,
        },
        {
          name: 'Ше шось 2326',
          price: 2000,
        },
        {
          name: 'Ше шось 2327',
          price: 2000,
        },
        {
          name: 'Ше шось 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ручки',
      options: [
        {
          name: 'ручка 2322',
          price: 2000,
        },
        {
          name: 'ручка 2323',
          price: 2000,
        },
        {
          name: 'ручка 2324',
          price: 2000,
        },
        {
          name: 'ручка 2325',
          price: 2000,
        },
        {
          name: 'ручка 2326',
          price: 2000,
        },
        {
          name: 'ручка 2327',
          price: 2000,
        },
        {
          name: 'ручка 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ше шось',
      options: [
        {
          name: 'Ше шось 2322',
          price: 2000,
        },
        {
          name: 'Ше шось 2323',
          price: 2000,
        },
        {
          name: 'Ше шось 2324',
          price: 2000,
        },
        {
          name: 'Ше шось 2325',
          price: 2000,
        },
        {
          name: 'Ше шось 2326',
          price: 2000,
        },
        {
          name: 'Ше шось 2327',
          price: 2000,
        },
        {
          name: 'Ше шось 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ручки',
      options: [
        {
          name: 'ручка 2322',
          price: 2000,
        },
        {
          name: 'ручка 2323',
          price: 2000,
        },
        {
          name: 'ручка 2324',
          price: 2000,
        },
        {
          name: 'ручка 2325',
          price: 2000,
        },
        {
          name: 'ручка 2326',
          price: 2000,
        },
        {
          name: 'ручка 2327',
          price: 2000,
        },
        {
          name: 'ручка 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ше шось',
      options: [
        {
          name: 'Ше шось 2322',
          price: 2000,
        },
        {
          name: 'Ше шось 2323',
          price: 2000,
        },
        {
          name: 'Ше шось 2324',
          price: 2000,
        },
        {
          name: 'Ше шось 2325',
          price: 2000,
        },
        {
          name: 'Ше шось 2326',
          price: 2000,
        },
        {
          name: 'Ше шось 2327',
          price: 2000,
        },
        {
          name: 'Ше шось 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ручки',
      options: [
        {
          name: 'ручка 2322',
          price: 2000,
        },
        {
          name: 'ручка 2323',
          price: 2000,
        },
        {
          name: 'ручка 2324',
          price: 2000,
        },
        {
          name: 'ручка 2325',
          price: 2000,
        },
        {
          name: 'ручка 2326',
          price: 2000,
        },
        {
          name: 'ручка 2327',
          price: 2000,
        },
        {
          name: 'ручка 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ше шось',
      options: [
        {
          name: 'Ше шось 2322',
          price: 2000,
        },
        {
          name: 'Ше шось 2323',
          price: 2000,
        },
        {
          name: 'Ше шось 2324',
          price: 2000,
        },
        {
          name: 'Ше шось 2325',
          price: 2000,
        },
        {
          name: 'Ше шось 2326',
          price: 2000,
        },
        {
          name: 'Ше шось 2327',
          price: 2000,
        },
        {
          name: 'Ше шось 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ручки',
      options: [
        {
          name: 'ручка 2322',
          price: 2000,
        },
        {
          name: 'ручка 2323',
          price: 2000,
        },
        {
          name: 'ручка 2324',
          price: 2000,
        },
        {
          name: 'ручка 2325',
          price: 2000,
        },
        {
          name: 'ручка 2326',
          price: 2000,
        },
        {
          name: 'ручка 2327',
          price: 2000,
        },
        {
          name: 'ручка 2328',
          price: 2000,
        },
      ]
    },
    {
      name: 'Ше шось',
      options: [
        {
          name: 'Ше шось 2322',
          price: 2000,
        },
        {
          name: 'Ше шось 2323',
          price: 2000,
        },
        {
          name: 'Ше шось 2324',
          price: 2000,
        },
        {
          name: 'Ше шось 2325',
          price: 2000,
        },
        {
          name: 'Ше шось 2326',
          price: 2000,
        },
        {
          name: 'Ше шось 2327',
          price: 2000,
        },
        {
          name: 'Ше шось 2328',
          price: 2000,
        },
      ]
    },
  ]
};

export default function Shop({ params }) {

  const [optionsToSend, setOptionsToSend] = useState([]);

  const handleOrderButtonClick = () => {
    const areAllOptionsSelected = dummyData.optionals.every((item) => {
      return optionsToSend.some((option) => option.name === item.name);
    });

    if (areAllOptionsSelected) {
      // Perform the order logic here
      alert('Передано в корзину')
    } else {
      // Display an alert if not all options are selected
      alert('Please select all options before placing the order.');
    }
  };


  return (
    <div className="my-12 responsive-container">
      <div className="flex justify-between gap-[2%] max-[640px]:flex-col max-[640px]:items-center image-options-block">
        <Image src={productImg} alt="" className="image-container basis-[20%] h-[500px] rounded-[5px] max-[640px]:basis-[50%]" />
  
        <div className="options-block h-[500px] basis-[70%] min-[900px]:!basis-[45%] flex flex-col overflow-scroll max-[640px]:hidden">
          <p className="mb-4 text-[22px] uppercase font-bold">Приховані двері 33456</p>
          <div className="flex justify-between flex-wrap basis-full overflow-scroll">
            {dummyData.optionals.map((item, i) => {
              const [selectedOption, setSelectedOption] = useState('');
              const handleOptionChange = (e) => {
                const newOptionsToSend = [...optionsToSend];
                const existingOptionIndex = newOptionsToSend.findIndex((option) => option.name === item.name);
              
                if (existingOptionIndex !== -1) {
                  newOptionsToSend[existingOptionIndex] = {
                    name: item.name,
                    value: e.target.value,
                    price: item.options.find((option) => option.name === e.target.value)?.price || 0,
                  };
                } else {
                  newOptionsToSend.push({
                    name: item.name,
                    value: e.target.value,
                    price: item.options.find((option) => option.name === e.target.value)?.price || 0,
                  });
                }
              
                setSelectedOption(e.target.value);
                setOptionsToSend(newOptionsToSend);
              };
              
              return (
                <label className="form-control w-full flex-shrink" key={item.name + i}>
                  <div className="label">
                    <span className="">{item.name}</span>
                  </div>
                  <select
                    className="select select-bordered text-black"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option disabled value="">
                      Вибрати
                    </option>
                    {item.options.map((option, i) => (
                      <option value={option.name} key={option.name + i}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">
                    <span className=""></span>
                  </div>
                </label>
              );
            })}
          </div>
          <div className="mt-5 w-full flex-shrink-0 h-[120px] bg-color-prim1 rounded-[5px] min-[900px]:hidden p-4 py-5 flex items-center justify-between gap-[10px]">
            <div className='h-full overflow-hidden'>
              <p className="text-[14px] font-bold mb-4">Ціна дверного полотна 3450₴</p>
              <hr className="border-t border-gray-300 my-4 w-3/4" />
              <div className="flex flex-col h-[40%] overflow-x-scroll max-w-full">
                {optionsToSend.map((option, i) => (
                  <div key={option.name + i} className="flex-shrink-0 flex justify-between mb-2 px-2">
                    <p>+{option.price}₴ - {option.value} </p>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex h-full flex-col justify-between'> 
              <div className="flex gap-4 font-bold">
                <p className='text-[14px]'>Загальна ціна</p>
                <p className='text-[14px]'>{optionsToSend.reduce((total, option) => total + option.price, 0) + 3450}₴</p>
              </div>
              <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded" onClick={() => handleOrderButtonClick()}>Замовити</button>
            </div>
          </div>
        </div>
  
        <div className="basis-[300px] flex flex-col !justify-between flex-shrink-0 h-[500px] bg-color-prim1 rounded-[5px] max-[900px]:hidden p-8 price-summary-block">
          <div>
            <p className="text-[18px] font-bold mb-4">Ціна дверного полотна<br/>3450₴</p>
            <hr className="border-t border-gray-300 my-4 w-3/4" />
            {optionsToSend.map((option, i) => (
              <div key={option.name + i} className="flex justify-between mb-2">
                <p>+{option.price}₴ - {option.value} </p>
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-4 font-bold">
              <p className='text-[16px]'>Загальна ціна</p>
              <p className='text-[16px]'>{optionsToSend.reduce((total, option) => total + option.price, 0)+3450}₴</p>
            </div>
            <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded"  onClick={() => handleOrderButtonClick()}>Замовити</button>
          </div>
        </div>
      </div>
      
      {/*
          Mobile options
        */}
        <div className="flex justify-between flex-wrap overflow-scroll min-640px-hidden">
            {dummyData.optionals.map((item, i) => {
              const [selectedOption, setSelectedOption] = useState('');
              const handleOptionChange = (e) => {
                const newOptionsToSend = [...optionsToSend];
                const existingOptionIndex = newOptionsToSend.findIndex((option) => option.name === item.name);
              
                if (existingOptionIndex !== -1) {
                  // If option already exists, update it
                  newOptionsToSend[existingOptionIndex] = {
                    name: item.name,
                    value: e.target.value,
                    price: item.options.find((option) => option.name === e.target.value)?.price || 0,
                  };
                } else {
                  // If option doesn't exist, add it to the array
                  newOptionsToSend.push({
                    name: item.name,
                    value: e.target.value,
                    price: item.options.find((option) => option.name === e.target.value)?.price || 0,
                  });
                }
              
                setSelectedOption(e.target.value);
                setOptionsToSend(newOptionsToSend);
              };
              
              return (
                <label className="form-control w-full flex-shrink" key={item.name + i}>
                  <div className="label">
                    <span className="">{item.name}</span>
                  </div>
                  <select
                    className="select select-bordered text-black"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option disabled value="">
                      Вибрати
                    </option>
                    {item.options.map((option, i) => (
                      <option value={option.name} key={option.name + i}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="label">
                    <span className=""></span>
                  </div>
                </label>
              );
            })}
            </div>
        {/*
          Mobile options
        */}
        <div className="mt-5 w-full flex-shrink-0 h-[160px] bg-color-prim1 rounded-[5px] min-[640px]:hidden p-4 py-5 flex items-center justify-between gap-[10px]">
            <div className='h-full overflow-hidden'>
              <p className="min-[450px]:text-[14px] font-bold mb-4">Ціна дверного полотна 3450₴</p>
              <hr className="border-t border-gray-300 my-4 w-3/4" />
              <div className="flex flex-col h-[40%] overflow-x-scroll max-w-full">
                {optionsToSend.map((option, i) => {
                  if(i === 1) return (
                    <div key={option.name + i} className="flex-shrink-0 flex justify-between px-2">
                    <p>...</p>
                  </div>
                  );
                  if(i >= 1) return 
                  return (
                  
                  <div key={option.name + i} className="flex-shrink-0 flex px-2">
                    <p>+{option.price}₴ - {option.value} </p>
                  </div>
                )})}
              </div>
            </div>
            <div className='flex h-full flex-col justify-between'> 
              <div className="flex gap-4 font-bold">
                <p className='min-[450px]:text-[14px]'>Загальна ціна</p>
                <p className='min-[450px]:text-[14px]'>{optionsToSend.reduce((total, option) => total + option.price, 0) + 3450}₴</p>
              </div>
              <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded"  onClick={() => handleOrderButtonClick()}>Замовити</button>
            </div>
          </div>

      <div className="w-2/3 max-[900px]:w-full description-block">
        <h2 className="font-bold text-[24px] max-[900px]:text-[20px] mb-2 mt-8">Опис товару</h2>
        <p className="text-[16px] max-[900px]:text-[12px] max-[640px]">
          Двері прихованого монтажу - це стильний та сучасний варіант для вашого приміщення. Їх особливість
          полягає в тому, що вони монтується без видимих зовнішніх елементів кріплення, що створює ефект
          безперервного поверхневого покриття. Ці двері виглядають елегантно та надають інтер'єру сучасний вигляд,
          а також можуть бути виготовлені з різних матеріалів та варіантів декору, щоб відповідати вашому
          стилю та уподобанням.
        </p>
      </div>
    </div>
  );
}
  