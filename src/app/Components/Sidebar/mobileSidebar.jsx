"use client"
import {useLayoutEffect, useState } from 'react';
import './style.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrDown from '../../assets/shop/ardown.svg';
import { useEffect } from 'react';
function findCategoryForSubcategory(categories, subcategoryId) {
  for (const category of categories) {
    const foundSubcategory = category.subcategories.find(
      (sub) => sub.id == subcategoryId
    );

    if (foundSubcategory) {
      return category;
    }
  }

  return null;
}

function isMainCategory(categories, categoryId) {
  for (const category of categories) {
    if (category.id == categoryId) {
      return true;
    }
  }

  return false;
}

const Sidebar = ({category, categories}) => {

  const [activeCategory, setActiveCategory] = useState('')
  const [activeSubcategory, setActiveSubcategory] = useState('')
  const [openCategories, setOpenCategories] = useState('')

  useEffect(() => {
    if (categories && category) {
      if (isMainCategory(categories, category)) {
        setActiveCategory(category);
        setOpenCategories(category);
      } else {
        setActiveSubcategory(category);
        const mainCategory = findCategoryForSubcategory(categories, category);
        setActiveCategory(mainCategory ? mainCategory.id : '');
        setOpenCategories(mainCategory ? mainCategory.id : ''); 
      }
    }
  }, [categories, category]);

  const router = useRouter()


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
                className={`relative text-left pl-4 w-full py-4 fz-14 cursor-default rounded-[3px] ${activeCategory == category.id ? 'bg-active-prim1' : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <p className='inline-block cursor-pointer'>{category.name}</p> {category.subcategories.length ? (
                  <Image
                    src={arrDown}
                    alt=''
                    width={28}
                    className={`absolute top-[15%] right-4 cursor-pointer transition-transform 
                    ${(openCategories == category.id) && 'rotate-180'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCategories(
                        openCategories === category.id ? '' : category.id
                      )
                    }}
                  />
                ): ('') }
              </button>
              {(openCategories == category.id) && (
                <ul>
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        className={`text-left pl-8 w-full py-3 rounded-[3px] ${
                          activeSubcategory == subcategory.id ? 'bg-active-subcategory-prim1' : ''
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
