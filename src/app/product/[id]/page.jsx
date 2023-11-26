import Image from 'next/image';
import Sidebar from '@/app/Components/Sidebar';
import dummycardphoto from '../../assets/shop/cardDummy.jpg'
import ShopCardButton from '@/app/Components/Buttons/shopCardButton';
/*
    * Responsible for rendering component
    * Responsible for fetching product data
*/
export default async function Shop({params}) {
  let dummyData = [
    { id: 1, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 2, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 3, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
    { id: 4, photo: dummycardphoto, text: 'Product 1', price: 29.99 },
    { id: 5, photo: dummycardphoto, text: 'Product 2', price: 49.99 },
    { id: 6, photo: dummycardphoto, text: 'Product 3', price: 19.99 },
  ];

      return (
        <div className="shop-wrapper max-[900px]:px-[50px]">
          <div className="flex w-full">
        <Sidebar category={params.id}/>
        <div className="ml-14 flex flex-row flex-wrap gap-12 max-[785px]:justify-center max-[785px]:ml-0 ">
        {dummyData.map((product) => (
          <div key={product.id} className="mb-20 basis-[240px] max-[900px]:basis-[190px] max-[785px]:basis-[240px]">
            <div className=" h-400">
              <div className='relative mb-6'>
                <Image src={dummycardphoto} alt={product.text} className="w-full h-345 object-cover mb-2 rounded-xs" />
                <p style={{ position: 'absolute', bottom: 10, left: 12, width: '100%',}} className="text-lg text-white font-bold">
                  {product.text}
                </p>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="text-white fz-12">{`Від: ${product.price.toFixed(2)} грн`}</p>
                <ShopCardButton />
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
        </div>
      )
    }
    