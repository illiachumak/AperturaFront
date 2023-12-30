'use client';
import Image from 'next/image';
import productImg from '../../assets/product/door.png';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { addToCart, openCart } from '../../redux/slices/cartSlice';
import { baseURL } from '../../services/base';
import { Skeleton } from '@mui/material';
import axios from 'axios';
import { blurDataURL } from '../../services/base';
import Loading from '../../Components/Loading';
import { setLoading } from '../../redux/slices/flagSlice';

export default function Shop({ params }) {
  const router = useRouter()
  const dispatch = useDispatch()
  const [optionsToSend, setOptionsToSend] = useState([]);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    const fetchData = async (id) => {

    const getProductById = async (id) => {
      const url = `${baseURL}product/${id}/`;
      const response = await axios.get(url);
      console.log('url',url)
      console.log('data', response.data)
      if (!response.ok) {
        if (response.status === 401) {
        }
      }
      return response.data;
    };
    const data = await getProductById(id)
    setData(data)
  }

  fetchData(params.id)
  },[])

  const handleOptionChange = (item, selectedValue) => {
    console.log('Selected Value:', selectedValue);
  
  
    const existingOptionIndex = optionsToSend.findIndex(option => option.name === item.name);
  
    if (existingOptionIndex !== -1) {
      // Якщо айтем існує, замінюємо його значення
      const newOptionsToSend = optionsToSend.map((option, index) => {
        if (index === existingOptionIndex) {
          return {
            name: item.name,
            value: selectedValue,
            price: item.options.find(option => option.name === selectedValue)?.price || 0,
          };
        }
        return option;
      });
  
      setOptionsToSend(newOptionsToSend);
    } else {
      // Якщо айтем не існує, додаємо новий об'єкт до масиву
      setOptionsToSend(prevOptions => [
        ...prevOptions,
        {
          name: item.name,
          value: selectedValue,
          price: item.options.find(option => option.name === selectedValue)?.price || 0,
        },
      ]);
    }
  
    console.log(optionsToSend);
  };

  const handleOrderButtonClick = () => {
    const areAllOptionsSelected = data.modifications.every((item) => {
      return optionsToSend.some((option) => option.name === item.name);
    });
    

    if (areAllOptionsSelected) {
      dispatch(addToCart({...data, modifications: optionsToSend, quantity: 1, 
        price: optionsToSend.reduce((total, option) => total + Number(option.price), 0) + Number(data?.price)}))
      dispatch(openCart())
    } else {
      // Display an alert if not all options are selected
      alert('Please select all options before placing the order.');
    }
  };


  return (
    <>
    <Loading/>
    <div className="my-12 responsive-container">
      <div className="min-640px-hidden">
        <p className="mb-8 text-[24px] uppercase font-bold">{data?.title}</p>
      </div>
      <div className="flex justify-between gap-[2%] max-[640px]:flex-col max-[640px]:items-center image-options-block">
        <div className='relative image-container h-[500px] rounded-[5px] max-[640px]:basis-[50%]'>
          <Image
            src={data?.image_preview}
            alt=""
            width={300}
            height={500}
            onLoadingComplete={() => {
              setTimeout(()=>{dispatch(setLoading(false))}, 1000) 
              setLoaded(true)}}
            className={`image-container object-cover h-[500px] rounded-[5px] max-[640px]:basis-[50%] ${loaded ? "opacity-1" : "opacity-0"} `}
          />
          {!loaded && (
            <Skeleton
              sx={{ bgcolor: 'grey.100' }}
              variant="rectangular"
              width="100%"
              height="100%"
              className='absolute top-0 left-0 rounded-xs '
            />
          )}
        </div>
        <div className="options-block max-h-[500px] basis-[70%] min-[900px]:!basis-[45%] flex flex-col overflow-scroll max-[640px]:hidden">
          <p className="mb-4 text-[22px] uppercase font-bold">{data?.title}</p>
          <div className="flex justify-between flex-wrap overflow-scroll">
            {data && data?.modifications && data.modifications.map((item, i) => {
              const selectedOption = optionsToSend.find(option => option.name === item.name)?.value || '';
              return (
                <label className="form-control w-full flex-shrink" key={item.name + i}>
                  <div className="label">
                    <span className="">{item.name}</span>
                  </div>
                  <select
                    className="rounded-lg py-2 px-2 text-black"
                    value={selectedOption}
                    onChange={(e) => handleOptionChange(item, e.target.value)}
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
              <p className="text-[14px] font-bold mb-4">Ціна дверного полотна {data?.price} ₴</p>
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
                <p className='text-[14px]'>
                  {(
                    optionsToSend.reduce((total, option) => total + Number(option.price), 0) +
                    Number(data?.price)
                  ).toFixed(2)}
                  ₴
                </p>
              </div>
              <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded" onClick={() => handleOrderButtonClick()}>Замовити</button>
            </div>
          </div>
        </div>

        <div className="basis-[300px] flex flex-col !justify-between flex-shrink-0 h-[500px] bg-color-prim1 rounded-[5px] max-[900px]:hidden p-8 price-summary-block">
          <div>
            <p className="text-[18px] font-bold mb-4">Ціна дверного полотна<br/>{Number(data?.price)} ₴</p>
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
              <p className='text-[16px]'>
                {(
                  optionsToSend.reduce((total, option) => total + Number(option.price), 0) +
                  Number(data?.price)
                ).toFixed(2)} ₴
              </p>
            </div>
            <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded" onClick={() => handleOrderButtonClick()}>Замовити</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap overflow-scroll min-640px-hidden">
        {data && data?.modifications && data.modifications.map((item, i) => {
          const selectedOption = optionsToSend.find(option => option.name === item.name)?.value || '';
          return (
            <label className="form-control w-full flex-shrink" key={item.name + i + item.id}>
              <div className="label">
                <span className="">{item.name}</span>
              </div>
              <select
                className="rounded-lg py-2 px-2 text-black"
                value={selectedOption}
                onChange={(e) => handleOptionChange(item, e.target.value)}
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

      <div className="mt-5 w-full flex-shrink-0 h-[160px] bg-color-prim1 rounded-[5px] min-[640px]:hidden p-4 py-5 flex items-center justify-between gap-[10px]">
        <div className='h-full overflow-hidden'>
          <p className="min-[450px]:text-[14px] font-bold mb-4">Ціна дверного полотна <br/>{data?.price} ₴</p>
          <hr className="border-t border-gray-300 my-4 w-3/4" />
          <div className="flex flex-col h-[40%] overflow-x-scroll max-w-full">
            {optionsToSend.map((option, i) => {
              if (i === 1) return (
                <div key={option.name + i} className="flex-shrink-0 flex justify-between px-2">
                  <p>...</p>
                </div>
              );
              if (i >= 1) return
              return (
                <div key={option.name + i} className="flex-shrink-0 flex px-2">
                  <p>+{option.price}₴ - {option.value} </p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='flex h-full flex-col justify-between'>
          <div className="flex gap-4 font-bold">
            <p className='min-[450px]:text-[14px]'>Загальна ціна</p>
            <p className='min-[450px]:text-[14px]'>
              {(
                optionsToSend.reduce((total, option) => total + Number(option.price), 0) +
                Number(data?.price)
              ).toFixed(2)}
               ₴
            </p>
          </div>
          <button className="main_button-white w-full text-white py-2 px-4 mt-4 rounded" onClick={() => handleOrderButtonClick()}>Замовити</button>
        </div>
      </div>

      <div className="w-2/3 max-[900px]:w-full description-block">
        <h2 className="font-bold text-[24px] max-[900px]:text-[20px] mb-2 mt-8">Опис товару</h2>
        <p className="text-[16px] max-[900px]:text-[12px] max-[640px]">
          {data?.description}
        </p>
      </div>
    </div>
    </>
  );
}
  