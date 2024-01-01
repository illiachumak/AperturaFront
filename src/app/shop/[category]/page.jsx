'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../Components/Sidebar';
import dummycardphoto from '../../assets/shop/cardDummy.jpg';
import ShopCardButton from '../../Components/Buttons/shopCardButton';
import SortOption from '../../Components/Sort';
import CategoriesMobile from '../../Components/Sidebar/CategoriesMobile';
import { useRouter } from 'next/navigation';
import { baseURL, blurDataURL, categories } from '../../services/base';
import axios from 'axios';
import { usePathname, useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/slices/flagSlice';
import { Skeleton } from "@mui/material";
import Loading from '../../Components/Loading';
import { notFound } from 'next/navigation';

function Shop({ params }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const router = useRouter();

  const returnNotFound = () => {
    notFound();
  };

  const fetchCategories = async (categoryId) => {
    try {
      const response = await axios.get(`${baseURL}categories/`);
      setCategories(response.data);
    } catch (error) {
      setCategories('error');
    }
  };

  const fetchProducts = async (categoryId) => {
    
    const url = `${baseURL}categories/${categoryId}/?${searchParams || ''}`;
    try {
      const response = await axios.get(url);
      setCategoryData(response.data);
    } catch (error) {
      setCategoryData('error');
    }
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    fetchCategories();
    fetchProducts(params.category);
  }, [pathname, searchParams]);

  useEffect(() => {
    if (categoryData === 'error' || categories === 'error') {
      returnNotFound();
    }
  }, [categoryData, categories]);

  const selectedCategory = categories.find((category) => category.id == params.category);

  return (
    <>
    <Loading/>
      <div className="responsive-container body-container my-10">
        <div className="flex justify-between items-center w-full mb-8">
          <h2 className="block text-xl font-bold fz-16 max-[783px]:hidden">{selectedCategory?.name}</h2>
          <CategoriesMobile category={params.category} categories={categories}/>
          <SortOption category={params.category} />
        </div>

        <div className="flex w-full">
          <Sidebar category={params.category} categories={categories} minPrice={categoryData.min_price} maxPrice={categoryData.max_price} />
          <div className="ml-14 w-full flex flex-row flex-wrap gap-x-[79px] gap-y-[40px] max-[1280px]:justify-around max-[785px]:justify-center max-[785px]:ml-0 ">
            {categoryData?.products && categoryData?.products?.length && 
              categoryData?.products.map((product) => (
                <div key={product.id} className=" flex flex-col mb-16 w-[240px]">
                  <div className=" h-400">
                    <div className="relative mb-2">
                      <Link href={`/product/${product.id}`}>
                        <Image src={product.image_preview} width={200} height={345} alt="product" 
                        blurDataURL={blurDataURL} onLoadingComplete={()=>{
                           dispatch(setLoading(false))
                          setLoaded(true)}}
                         placeholder="blur" className={`w-full max-h-[345px] object-cover mb-2 rounded-xs ${!loaded && 'opacity-0'}`} />
                         {!loaded && (
                        <Skeleton
                            sx={{ bgcolor: 'grey.100' }}
                            variant="rectangular"
                            width="100%"
                            height="345px"
                            className='absolute top-0 left-0 rounded-xs '
                        />
                    )}
                      </Link>
                      <p
                        className="text-lg text-white font-bold mt-4"
                      >
                        {product.title}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-center break-words gap-4">
                      <p className="text-white fz-12">{`Від: ${product.price} грн`}</p>
                    </div>
                  </div>
                      <Link href={`/product/${product.id}`} className='self-end mt-4'>
                        <ShopCardButton />
                      </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
