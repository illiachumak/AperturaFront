'use client'
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '@/app/Components/Sidebar';
import dummycardphoto from '../../assets/shop/cardDummy.jpg'
import ShopCardButton from '@/app/Components/Buttons/shopCardButton';
import SortOption from '@/app/Components/Sort';
import CategoriesMobile from '@/app/Components/Sidebar/CategoriesMobile';

/*
    * Responsible for rendering component
    * Responsible for fetching shop data
*/

 export function fetchShop(category) {
  let dummyData = [
    { id: 1, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 2, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 3, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
    { id: 4, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 5, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 6, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
  ];
  console.log('fetched')
  setTimeout(()=>{
  },500)
    //const data= await fetch(`base_url/api/${category}`)
    return dummyData
 }

export default function Shop({params}) {
  const {category} = params
  const dummyData = fetchShop(category)

  return (
    <>
     <div className="responsive-container">
      <div className="flex flex-row flex-start p-4r w-full">
        {/* Навігація */}
        <h2 className="block text-xl font-bold fz-16 min-[783px]:hidden my-4">{params.category}</h2>
        <div className="flex my-4 max-[783px]:hidden">
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
      </div>
       
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="block text-xl font-bold fz-16 max-[783px]:hidden">{params.category}</h2>
          <CategoriesMobile category={category}/>
          <SortOption category={category}/>
        </div>

      {/**************************/}
          <div className="flex w-full">
        <Sidebar category={params.category}/>
        <div className="ml-14 flex flex-row flex-wrap gap-12 justify-between max-[1124px]:justify-around max-[785px]:justify-center max-[785px]:ml-0 ">
        {dummyData.map((product) => (
          <div key={product.id} className="mb-16 basis-[240px] max-[900px]:basis-[190px] max-[785px]:basis-[240px]">
            <div className=" h-400">
              <div className='relative mb-6'>
                
                <Link href={`/product/${product.id}`}><Image src={dummycardphoto} alt={product.text} className="w-full h-345 object-cover mb-2 rounded-xs" /></Link>
                <p style={{ position: 'absolute', bottom: 10, left: 12, width: '100%',}} className="text-lg text-white font-bold">
                  {product.text}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-white fz-12">{`Від: ${product.price.toFixed(2)} грн`}</p>
                <Link href={`/product/${product.id}`}><ShopCardButton /></Link>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
      </>
  );
}
    