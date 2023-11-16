"use client"
function SortOption() {
    return (
        <div className="flex items-center">
          <p className="mr-4">Сортувати за: 
          </p>
          <label className="inline-flex items-center h-27">
          <select className="select-custom rounded-xs br-color-prim2 w-full max-w-xs">
          <option className='text-black'>ціною вв</option>
          <option className='text-black'>ціною вн</option>
        </select>
          </label>
        </div>
    );
}

export default SortOption;