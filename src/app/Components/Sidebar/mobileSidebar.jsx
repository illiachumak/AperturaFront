"use client"
import {useLayoutEffect, useState } from 'react';
import './style.css'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrDown from '../../assets/shop/ardown.svg';
import { useEffect } from 'react';


export const findCategoryForSubcategory = (categories, subcategoryId) =>  {
  function findRecursive(category, targetId) {
    const foundSubcategory = category.subcategories && category.subcategories.find((sub) => sub.id == targetId);

    if (foundSubcategory) {
      return category;
    }

    if (Array.isArray(category.subcategories)) {
      for (const subcategory of category.subcategories) {
        const result = findRecursive(subcategory, targetId);
        if (result) {
          return result;
        }
      }
    }
    

    return null;
  }

  for (const category of categories) {
    const result = findRecursive(category, subcategoryId);

    if (result) {
      return result;
    }
  }

  return null;
}
function isMainCategory(categories, categoryId) {
  console.log(categories, categoryId)
  if(categories && categoryId) { return categories.find((category) => category.id == categoryId)}
}

const Sidebar = ({category, categories}) => {

  const [activeCategory, setActiveCategory] = useState('')
  const [activeSubcategory, setActiveSubcategory] = useState('')
  const [openCategories, setOpenCategories] = useState([])

  const renderSubcategories = (subcategories, depth = 1) => (
    <ul>
      {subcategories.map((subcategory) => (
        <li key={subcategory.id}>
          <button
            className={`relative text-left pl-8 w-full py-3 ${
              (subcategory?.subcategories && subcategory.subcategories.length > 0) ? 'rounded-b-xs' : ''
            } ${
              openCategories.includes(subcategory.id) || category == subcategory.id ? 'bg-active-subcategory-prim1' : ''
            }`}
            
            onClick={() => handleSubcategoryClick(subcategory.id)}
          >
            {subcategory.name}
            {subcategory.subcategories && subcategory.subcategories.length > 0 && (
                <Image
                  src={arrDown}
                  alt=''
                  width={28}
                  className={`absolute top-[7%] right-[14px] cursor-pointer transition-transform 
                    ${(openCategories.includes(subcategory.id)) && 'rotate-180'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCategories((prevOpenCategories) => {
                        if (prevOpenCategories.includes(subcategory.id)) {
                          return prevOpenCategories.filter((id) => id !== subcategory.id);
                        } else {
                          return [...prevOpenCategories, subcategory.id];
                        }
                      });
                    }}
                />
          )}
          </button>
          {Array.isArray(openCategories) && openCategories.includes(subcategory.id) && renderSubcategories(subcategory.subcategories, depth += 1 )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    if (categories && categories.length > 0 && category) {
      if (isMainCategory(categories, category)) {
        setActiveCategory(category);
        setOpenCategories([category]);
      } else {
        setActiveSubcategory(category);
        const mainCategoryInfo = findCategoryForSubcategory(categories, category);
        const parentCat = mainCategoryInfo && findCategoryForSubcategory(categories, mainCategoryInfo.id)
        const subcategoryIds = parentCat ? [parentCat?.id, mainCategoryInfo?.id, category] : 
        mainCategoryInfo && [mainCategoryInfo?.id, category];
        console.log(subcategoryIds)
        setActiveCategory(subcategoryIds ? subcategoryIds[0] : []);
        setOpenCategories(subcategoryIds ? [...subcategoryIds] : []);
      }
    }
  }, [categories, category]);

  const router = useRouter()


  const handleCategoryClick = (categoryId) => {
    router.push(`/shop/${categoryId}`);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    router.push(`/shop/${subcategoryId}`);
  };

  return (
      <div className='flex flex-col w-full'>
      <div className="bg-color-prim1 mb-8 rounded-xs text-white">
      {categories && categories.map((category) => {
            return(
            <div key={category.id}>
              <button
                className={`relative rounded-t-xs text-left pl-4 w-full py-4 fz-14 cursor-default ${
                  activeCategory == category.id ? 'bg-active-prim1' : ''
                }`}
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
                      setOpenCategories((prevOpenCategories) => {
                        if (prevOpenCategories.includes(category.id)) {
                          return prevOpenCategories.filter((id) => id !== category.id);
                        } else {
                          return [...prevOpenCategories, category.id];
                        }
                      });
                    }}
                  />
                ): ('') }
              </button>
              {openCategories.length && openCategories.includes(category.id) && renderSubcategories(category.subcategories)}
            </div>
          )})}
      </div>
  </div>
  );
};

export default Sidebar;
