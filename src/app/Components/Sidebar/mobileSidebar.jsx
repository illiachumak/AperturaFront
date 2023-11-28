"use client"
import {useLayoutEffect, useState } from 'react';
import './style.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrDown from '../../assets/shop/ardown.svg';
/*
    *Responsible for rendering sidebar components
    *Responsible for categories routing
*/

const Sidebar = ({category}) => {

  const [activeCategory, setActiveCategory] = useState('')
  const [activeSubcategory, setActiveSubcategory] = useState('')
  const [openCategories, setOpenCategories] = useState('')

  useLayoutEffect(()=>{
    setActiveCategory(category[0])
    setOpenCategories(category[0])
    if(category[1]){
      setActiveSubcategory(category)
    } 
  },[])

  const router = useRouter()
  const categories = [
    {
      id: '1',
      name: 'Category 1',
      subcategories: [
        { id: '11', name: 'Subcategory 1.1' },
        { id: '12', name: 'Subcategory 1.2' },
        { id: '13', name: 'Subcategory 1.1' },
        { id: '14', name: 'Subcategory 1.2' },
        { id: '15', name: 'Subcategory 1.1' },
        { id: '16', name: 'Subcategory 1.2' },
      ],
    },
    {
      id: '2',
      name: 'Category 2',
      subcategories: [
        { id: '21', name: 'Subcategory 2.1' },
        { id: '22', name: 'Subcategory 2.2' },
      ],
    },   {
        id: '3',
        name: 'Category 3',
        subcategories: [
          { id: '31', name: 'Subcategory 3.1' },
          { id: '32', name: 'Subcategory 3.2' },
        ],
      },
      {
        id: '4',
        name: 'Category 4',
        subcategories: [
            { id: '41', name: 'Subcategory 1.1' },
            { id: '42', name: 'Subcategory 1.2' },
            { id: '43', name: 'Subcategory 1.1' },
            { id: '44', name: 'Subcategory 1.2' },
            { id: '45', name: 'Subcategory 1.1' },
            { id: '46', name: 'Subcategory 1.2' },
        ],
      },
 
 
  ];

  const handleCategoryClick = (category) => {
    router.push(`/shop/${category}`);
  };

  return (
      <div className='flex flex-col w-full'>
      <div className="bg-color-prim1 mb-8 rounded-xs text-white">
      {categories.map((category) => {
            return(
            <div key={category.id}>
              <button
                className={`relative text-left pl-4 w-full py-4 fz-14 cursor-default rounded-[3px] ${activeCategory === category.id ? 'bg-active-prim1' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <p className='inline-block cursor-pointer'>{category.name}</p> {category.subcategories && <Image src={arrDown} alt='' width={28} 
                className={`absolute top-[15%] right-4 cursor-pointer transition-transform 
                ${(openCategories === category.id) && 'rotate-180'}`} 
                onClick={(e) => {
                e.stopPropagation()
                setOpenCategories(openCategories === category.id ? '' : category.id)
                console.log(openCategories)}
                }/>}
              </button>
              {(openCategories === category.id) && (
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        className={`text-left pl-8 w-full py-3 rounded-[3px] ${
                          activeSubcategory === subcategory.id ? 'bg-active-subcategory-prim1' : ''
                        }`}
                        onClick={() => handleCategoryClick(subcategory.id)}
                      >
                        {subcategory.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )})}
      </div>
  </div>
  );
};

export default Sidebar;
