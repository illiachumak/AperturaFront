import { useEffect, useState } from 'react';
import DoubleSlider from './DoubleSlider';
import './style.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrDown from '../../assets/shop/ardown.svg';

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
  for (const category of categories) {
    if (category.id == categoryId) {
      return true;
    }
  }

  return false;
}

const Sidebar = ({ categories, category, minPrice, maxPrice }) => {
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubcategory, setActiveSubcategory] = useState('');
  const [openCategories, setOpenCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (categories && category) {
      if (isMainCategory(categories, category)) {
        setActiveCategory(category);
        setOpenCategories([category]);
      } else {
        setActiveSubcategory(category);
        const mainCategoryInfo = findCategoryForSubcategory(categories, category);
        const parentCat = mainCategoryInfo && findCategoryForSubcategory(categories, mainCategoryInfo.id)
        const subcategoryIds = parentCat ? [parentCat?.id, mainCategoryInfo?.id, category] : 
        mainCategoryInfo && [ mainCategoryInfo?.id, category];
        console.log(subcategoryIds)
        setActiveCategory(subcategoryIds && subcategoryIds[0] || []);
        setOpenCategories(subcategoryIds && [...subcategoryIds] || []);
      }
    }
  }, [categories, category]);

  const handleCategoryClick = (categoryId) => {
    router.push(`/shop/${categoryId}`);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    router.push(`/shop/${subcategoryId}`);
  };

const renderSubcategories = (subcategories, depth = 1) => (
    <ul>
      {subcategories.map((subcategory) => (
        <li key={subcategory.id}>
          <button
            className={`relative text-left pl-8 w-full py-3 ${
              (subcategory?.subcategories && subcategory.subcategories.length > 0) ? 'rounded-b-xs' : ''
            } ${
              openCategories.includes(subcategory.id) || category === subcategory.id ? 'bg-active-subcategory-prim1' : ''
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
          {openCategories.includes(subcategory.id) && renderSubcategories(subcategory.subcategories, depth += 1 )}
        </li>
      ))}
    </ul>
  );


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
                    ${(openCategories.includes(categoryItem.id)) && 'rotate-180'}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCategories((prevOpenCategories) => {
                        if (prevOpenCategories.includes(categoryItem.id)) {
                          return prevOpenCategories.filter((id) => id !== categoryItem.id);
                        } else {
                          return [...prevOpenCategories, categoryItem.id];
                        }
                      });
                    }}
                  />
                ) : ('')}
              </button>
              {openCategories.includes(categoryItem.id) && renderSubcategories(categoryItem.subcategories)}
            </div>
          ))}
      </div>
      <DoubleSlider minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
};

export default Sidebar;
