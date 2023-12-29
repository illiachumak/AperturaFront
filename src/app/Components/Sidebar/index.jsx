"use client"
import { useEffect, useState } from 'react';
import DoubleSlider from './DoubleSlider';
import './style.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrDown from '../../assets/shop/ardown.svg';

function findCategoryForSubcategory(categories, subcategoryId) {
  for (const category of categories) {
    const foundSubcategory = category.subcategories.find(
      (sub) => sub.id == subcategoryId
    );

    if (foundSubcategory) {
      return category;
    }
  }

  return null; // Змінено на null, оскільки не знайдено категорію
}

function isMainCategory(categories, categoryId) {
  for (const category of categories) {
    if (category.id == categoryId) {
      return true;
    }
  }

  return false;
}

const Sidebar = ({ categories, category, minPrice, maxPrice}) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const [openCategories, setOpenCategories] = useState('');
  const router = useRouter();

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

  const handleCategoryClick = (categoryId) => {
    router.push(`/shop/${categoryId}`);
  };

  return (
    <div className='flex flex-col max-w-full max-[840px]:hidden'>
      <div className="bg-color-prim1 mb-8 w-[280px] min-h-[160px]  rounded-xs text-white">
        {categories &&
          categories.map((categoryItem) => (
            <div key={categoryItem.id}>
              <button
                className={`relative rounded-t-xs text-left pl-4 w-full py-4 fz-14 cursor-default ${
                  activeCategory == categoryItem.id ? 'bg-active-prim1' : ''
                }`}
                onClick={() => handleCategoryClick(categoryItem.id)}
              >
                <p className='inline-block cursor-pointer'>{categoryItem.name}</p>{' '}
                {categoryItem.subcategories.length ? (
                  <Image
                    src={arrDown}
                    alt=''
                    width={28}
                    className={`absolute top-[15%] right-4 cursor-pointer transition-transform 
                    ${(openCategories == categoryItem.id) && 'rotate-180'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCategories(
                        openCategories === categoryItem.id ? '' : categoryItem.id
                      )
                    }}
                  />
                ): ('') }
              </button>
              {openCategories == categoryItem.id && (
                <ul>
                  {categoryItem.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        className={`text-left pl-8 w-full py-3 rounded-b-xs ${
                          activeSubcategory == subcategory.id
                            ? 'bg-active-subcategory-prim1'
                            : ''
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
      <DoubleSlider minPrice={minPrice} maxPrice={maxPrice}/>
    </div>
  );
};

export default Sidebar;
