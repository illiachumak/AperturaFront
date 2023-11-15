"use client"
import React, { useState } from 'react';
import DoubleSlider from './DoubleSlider';
import './style.css'
/*
    *Responsible for rendering sidebar components
    *Responsible for managing categories in redux store
*/

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);


  const categories = [
    {
      id: 1,
      name: 'Category 1',
      subcategories: [
        { id: 11, name: 'Subcategory 1.1' },
        { id: 12, name: 'Subcategory 1.2' },
        { id: 13, name: 'Subcategory 1.1' },
        { id: 14, name: 'Subcategory 1.2' },
        { id: 15, name: 'Subcategory 1.1' },
        { id: 16, name: 'Subcategory 1.2' },
      ],
    },
    {
      id: 2,
      name: 'Category 2',
      subcategories: [
        { id: 21, name: 'Subcategory 2.1' },
        { id: 22, name: 'Subcategory 2.2' },
      ],
    },   {
        id: 3,
        name: 'Category 3',
        subcategories: [
          { id: 31, name: 'Subcategory 3.1' },
          { id: 32, name: 'Subcategory 3.2' },
        ],
      },
      {
        id: 4,
        name: 'Category 4',
        subcategories: [
            { id: 31, name: 'Subcategory 1.1' },
            { id: 132, name: 'Subcategory 1.2' },
            { id: 133, name: 'Subcategory 1.1' },
            { id: 134, name: 'Subcategory 1.2' },
            { id: 135, name: 'Subcategory 1.1' },
            { id: 136, name: 'Subcategory 1.2' },
        ],
      },
 
 
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
      setActiveSubcategory(subcategory === activeSubcategory ? null : subcategory);
  };

  return (
      <div className='flex flex-col w-1/4'>
      <div className="mr-8 bg-color-prim1 mb-8 rounded-xs text-white">
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
                      onClick={() => handleSubcategoryClick(subcategory.id)}
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
