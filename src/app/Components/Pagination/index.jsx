import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
  const Pagination = (props) => {
    const params = useSearchParams()
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const maxPages = props.totalPages;
  
    useEffect(() => {
      const CurrentPage = params.get('page');
  
      if (CurrentPage && !isNaN(Number(CurrentPage))) {
        setCurrentPage(Number(CurrentPage));
      }
    }, [params]);
  
    const handlePrevClick = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        updateURL(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < maxPages) {
        setCurrentPage(currentPage + 1);
        updateURL(currentPage + 1);
      }
    };
  
    const handleJumpClick = (page) => {
      setCurrentPage(page);
      updateURL(page);
    };
  
    const updateURL = (newPage) => {
        console.log(newPage);
    
        const currentParams = new URLSearchParams(window.location.search);
        const currentPage = currentParams.get('page');
    
        const updatedParams = { ...params, page: newPage };
    
        // Видаляємо поточний параметр 'page' з URL, якщо він існує
        if (currentPage) {
            currentParams.delete('page');
        }
    
        // Додаємо новий параметр 'page' до URL
        currentParams.set('page', newPage);
    
        // Перетворюємо об'єкт URLSearchParams на рядок параметрів
        const queryString = currentParams.toString();
        router.push(`?${queryString}`);
    };
    const renderPageButtons = () => {
      const buttons = [];
      const totalPages = maxPages;
      const displayLimit = 5; // Number of buttons to display before and after ellipsis
    
      if (totalPages <= displayLimit) {
        // If total pages are less than or equal to the display limit, show all pages
        for (let i = 1; i <= totalPages; i++) {
          buttons.push(
            <button
              key={i}
              className={`pagination__button pagination__button--number ${
                i === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(i)}
            >
              {i}
            </button>
          );
        }
      } else {
        // Display the first three buttons centered around the current page
        const startPage = Math.max(1, currentPage - 1);
        const endPage = Math.min(totalPages, currentPage + 1);
    
        if (currentPage === 1) {
          // Display the first page button
          buttons.push(
            <button
              key={1}
              className={`pagination__button pagination__button--number ${
                1 === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(1)}
            >
              {1}
            </button>
          );
    
          buttons.push(
            <button
              key={2}
              className={`pagination__button pagination__button--number`}
              onClick={() => handleJumpClick(3)}
            >
              {2}
            </button>
          );
          buttons.push(
            <button
              key={3}
              className={`pagination__button pagination__button--number`}
              onClick={() => handleJumpClick(3)}
            >
              {3}
            </button>
          );
        }
        else if (currentPage >= totalPages-1) {
          buttons.push(
            <button
              key={1}
              className={`pagination__button pagination__button--number`}
              onClick={() => handleJumpClick(1)}
            >
              {1}
            </button>
          );
          buttons.push(
            <button
              key="ellipsis-end"
              className="pagination__button pagination__button--ellipsis"
              disabled
            >
              ...
            </button>
          );
          buttons.push(
            <button
              key={totalPages - 2}
              className={`pagination__button pagination__button--number ${
                totalPages - 2 === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(totalPages - 2)}
            >
              {totalPages - 2}
            </button>
          );
        
          // Display the previous page before the last page
          buttons.push(
            <button
              key={totalPages - 1}
              className={`pagination__button pagination__button--number ${
                totalPages - 1 === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(totalPages - 1)}
            >
              {totalPages - 1}
            </button>
          );
        
          // Display the last page button
          buttons.push(
            <button
              key={totalPages}
              className={`pagination__button pagination__button--number ${
                totalPages === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(totalPages)}
            >
              {totalPages}
            </button>
          );
        } else {
          
          if (currentPage > 2) {
            buttons.push(
              <button
                key={1}
                className={`pagination__button pagination__button--number`}
                onClick={() => handleJumpClick(1)}
              >
                {1}
              </button>
            ) 
            buttons.push(
              <button
                key="ellipsis-start"
                className="pagination__button pagination__button--ellipsis"
                disabled
              >
                ...
              </button>
            );
          }
          
          for (let i = startPage; i <= endPage; i++) {
            buttons.push(
              <button
                key={i}
                className={`pagination__button pagination__button--number ${
                  i === currentPage ? 'bg-color-maingreen text-white' : ''
                }`}
                onClick={() => handleJumpClick(i)}
              >
                {i}
              </button>
            );
          }
        }
    
        if (currentPage < totalPages - 2) {
          // Display ellipsis if there are pages between the last centered page and the last page
          buttons.push(
            <button
              key="ellipsis-end"
              className="pagination__button pagination__button--ellipsis"
              disabled
            >
              ...
            </button>
          );
        }
    
        // Only display the last page button if it's not already included
        if (endPage < totalPages) {
          buttons.push(
            <button
              key={totalPages}
              className={`pagination__button pagination__button--number ${
                totalPages === currentPage ? 'bg-color-maingreen text-white' : ''
              }`}
              onClick={() => handleJumpClick(totalPages)}
            >
              {totalPages}
            </button>
          );
        }
      }
    
      return buttons;
    };
    
    
  
   if(maxPages > 1) return (
      <div className={maxPages > 4 ? 'pagination' : `pagination-${maxPages}`}>
        <div className="pagination__container">
          <div className="pagination__button-container">
            <button
              className="pagination__button pagination__button--arrow pagination__button--prev"
              onClick={handlePrevClick}
            >
              <span>❮</span>
            </button>
            {renderPageButtons()}
            
            <button
              className="pagination__button pagination__button--arrow pagination__button--prev pagination__button--rotate-180"
              onClick={handleNextClick}
            >
                <span>❮</span>
            </button>
          </div>
        </div>
      </div>
    );
    else return
  };
  
  export default Pagination;
  