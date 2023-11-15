"use client"
import {useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/Components/Sidebar';
import dummycardphoto from '../../assets/shop/cardDummy.jpg'
import '../style.css'
import ShopCardButton from '@/app/Components/Buttons/shopCardButton';
/*
    * Responsible for rendering component
    * Responsible for fetching shop data
*/
export default function Shop({params}) {
  const [selectedCategory, setSelectedCategory] = useState('Shop');
  const [sortOption, setSortOption] = useState('price');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyApiCall = async () => {
      const dummyData = [
        { id: 1, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
        { id: 2, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
        { id: 3, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
        { id: 4, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
        { id: 5, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
        { id: 6, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
      ];

      setProducts(dummyData);
    };

    dummyApiCall();
  }, []);

  return (
    <div className="flex flex-col flex-start p-4 shop-wrapper">
      {/* Навігація */}
      <div className="flex my-4">
        <Link
          href="/"
          className={`mr-4 ${selectedCategory === 'All' ? 'font-bold' : ''}`}
        >
          Головна
        </Link>
        <Link
          href="/shop/id"
          className={`mr-4 ${selectedCategory === 'Shop' ? 'font-bold' : ''}`}
        >
          Магазин
        </Link>
      </div>

      {/* Заголовок і сортування */}
      <div className="flex items-center justify-between w-full mb-8">
        <h2 className="text-xl font-bold fz-16">{params.category}</h2>
        <div className="flex items-center">
          <p className="mr-4">Сортувати за: 
          </p>
          <label className="inline-flex items-center h-27">
          <select className="select-custom rounded-xs br-color-prim2 w-full max-w-xs">
          <option className='text-black'>ціною вв</option>
          <option className='text-black'>ціною вн</option>
        </select>
          </label>
        </div>
      </div>

      {/* Контентна частина */}
      <div className="flex w-full">
        {/* Сайдбар */}
        <Sidebar/>

        {/* Список продуктів */}
        <div className="flex flex-wrap justify-between w-3/4">
          {products.map((product) => (
            <div key={product.id} className="w-1/3 w-250 px-2 mb-20">
              {/* Карточка продукту */}
              <div className="w-250 h-400">
              <div className='relative mb-6'>
                <Image src={dummycardphoto} alt={product.text} className="w-full h-345 object-cover mb-2 rounded-xs" />
                <p style={{ position: 'absolute', bottom: 10, left: 12, width: '100%',}} className="text-lg text-white font-bold">
                  {product.text}
                </p>
              </div>
                <div className="flex flex-row justify-between items-center">
                <p className="text-white fz-14">{`Від: ${product.price.toFixed(2)} грн`}</p>
                <ShopCardButton/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
    