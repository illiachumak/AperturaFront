import { useState, useEffect} from 'react';
import Image from 'next/image';
import v2 from '../../../assets/v2.svg';
import SidebarMobile from '../mobileSidebar';

export default function CategoriesMobile({ category, categories }) {
  
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if(open){
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    }
   
    
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
  }, [open])
  
  return (
    <>
      <div className="rounded-xs br-color-prim2 h-[34px] px-[10px] flex justify-between items-center gap-3 min-[840px]:hidden" onClick={() => setOpen(true)}>
        <p>Категорії</p> <Image src={v2} alt="" />
      </div>
      <div className={`absolute z-[55] top-[81.19px] left-0 h-[200%] ${open ? '' : 'hidden'}`}>
        <div className="bg-black opacity-50  w-screen h-full max-[400px]:w-[400px]  z-10" onClick={() => setOpen(false)}></div>
        <div className="absolute top-0 left-0 bg-[#130E04] w-[70%] h-full pr-8">
          <div className="pl-[30px] pt-[30px]" onClick={(e) => e.stopPropagation()}>
            <SidebarMobile category={category} categories={categories} />
          </div>
        </div>
      </div>
    </>
  );
}
