"use client"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

function SortOption() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Найдешевше");

  useEffect(() => {
    // Перевірка, чи є параметр sort у query
    const sortParam = window.location.search.sort;
    if (sortParam) {
      // Якщо є, встановлюємо значення selectedCategory відповідно
      setSelectedCategory(sortParam);
    }
  }, []);

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedCategory(selectedValue);

    const currentPath = window.location.pathname;
    const queryParams = new URLSearchParams(window.location.search);
    
    // Перевірка, чи вже є параметр sort у query
    if (queryParams.has("sort")) {
      // Якщо є, змінюємо його значення
      queryParams.set("sort", selectedValue);
    } else {
      // Якщо немає, додаємо новий параметр sort
      queryParams.append("sort", selectedValue);
    }

    // Перетворення URLSearchParams у рядок та виклик router.push
    router.push(`${currentPath}?${queryParams.toString()}`);
  };

  return (
    <div className="flex items-center">
      <p className="mr-4">Сортувати за:</p>
      <label className="inline-flex items-center h-27">
        <select
          className="select-custom rounded-xs br-color-prim2 w-full max-w-xs"
          value={selectedCategory}
          onChange={handleSortChange}
        >
          <option className="text-black" value="priceup">
            Найдешевше
          </option>
          <option className="text-black" value="pricedown">
            Найдорожче
          </option>
        </select>
      </label>
    </div>
  );
}

export default SortOption;
