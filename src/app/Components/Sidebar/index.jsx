"use client"
import { useEffect, useLayoutEffect, useState } from 'react';
import DoubleSlider from './DoubleSlider';
import './style.css'
import { useRouter } from 'next/navigation';
/*
    *Responsible for rendering sidebar components
    *Responsible for categories routing
*/

const Sidebar = ({category}) => {

  const [activeCategory, setActiveCategory] = useState('')
  const [activeSubcategory, setActiveSubcategory] = useState('')

  useLayoutEffect(()=>{
    setActiveCategory(category[0])
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
      <div className='flex flex-col w-300'>
      <div className=" bg-color-prim1 mb-8 rounded-xs text-white">
        {categories.map((category) => (
          <div key={category.id}>
            <button
              className={`rounded-t-xs text-left pl-4 w-full py-4 fz-14 ${activeCategory === category.id ? 'bg-active-prim1' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
            {activeCategory === category.id && (
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <button
                      className={`text-left pl-8 w-full py-3 rounded-b-xs ${
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
        ))}
      </div>
      <DoubleSlider/>
  </div>
  );
};

export default Sidebar;
