
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/Components/Sidebar';
import dummycardphoto from '../../assets/shop/cardDummy.jpg'
import '../style.css'
import ShopCardButton from '@/app/Components/Buttons/shopCardButton';
import SortOption from '@/app/Components/Sort';
/*
    * Responsible for rendering component
    * Responsible for fetching shop data
*/

 export async function fetchShop(category) {
  let dummyData = [
    { id: 1, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 2, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 3, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
    { id: 4, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 5, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 6, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
  ];

 
    //const data= await fetch(`base_url/api/${category}`)
    return dummyData
 }

export default async function Shop({params}) {
  const {category} = params
  const dummyData = await fetchShop(category)

  return (
    <div className="flex flex-col flex-start p-4 shop-wrapper">
      {/* Навігація */}
      <div className="flex my-4">
        <Link
          href="/"
          className={`mr-4 font-bold`}
        >
          Головна
        </Link>
        <Link
          href="/shop/id"
          className={`mr-4 font-bold`}
        >
          Магазин
        </Link>
      </div>

      {/* Заголовок і сортування */}
      <div className="flex items-center justify-between w-full mb-8">
        <h2 className="text-xl font-bold fz-16">{params.category}</h2>
        <SortOption/>
      </div>
      {/**************************/}

      {/* Контентна частина */}
      <div className="flex w-full">
        {/* Сайдбар */}
        <Sidebar category={params.category}/>
        {/**************************/}
        {/* Список продуктів */}
        <div className="flex flex-wrap justify-between w-3/4">
          {dummyData.map((product) => (
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
    