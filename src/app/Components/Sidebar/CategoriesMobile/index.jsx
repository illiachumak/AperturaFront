'use client'
import { useState } from 'react';
import Image from 'next/image';
import v2 from '../../../assets/v2.svg'
import SidebarMobile from '../mobileSidebar'

export default function CategoriesMobile({category}) {

    const [open, setOpen] = useState(false)

    return (
        <>
        <div className="rounded-xs br-color-prim2 h-[34px] px-[10px] flex justify-between items-center gap-3 min-[840px]:hidden" onClick={() => setOpen(true)}><p>Категорії</p> <Image src={v2} alt=''/></div>  
          <div className={`absolute z-[55] top-[81.19px] left-0 ${open ? '' : 'hidden'}`}>
            <div className="bg-black opacity-50  w-screen h-screen z-10" onClick={() => setOpen(false)}></div>
            <div className="absolute top-0 left-0 bg-[#130E04] w-[70%] h-[100%] pr-8">
                <div className="pl-[30px] pt-[30px]" onClick={(e)=> e.stopPropagation()}>
                    <SidebarMobile category={category}/>
                </div>
            </div>
          </div>
        </>
    );
}
