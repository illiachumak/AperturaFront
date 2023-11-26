'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import brg from '../../assets/burg.svg'
import X from '../../assets/shop/x.png'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const handleOnClose = () => {
      setOpen(false)
    }
      return (
        <>
        <div onClick={() => {
            setOpen(true)
           
        }}>
        <Image src={brg} alt="" className="min-[720px]:hidden mr-3" />
        </div>  
          <div className={`absolute z-[55] top-[0] right-0 ${open ? '' : 'hidden'}`}>
            <div className="bg-[#130E04] opacity-50  w-screen h-screen z-9" onClick={handleOnClose}></div>
            <div className="absolute top-0 right-0 w-[50%] h-screen bg-[#130E04]">
            <Image src={X} alt="" width={25} className="absolute right-[10%] top-[5%]" onClick={handleOnClose} />
            <ul className="menu menu-horizontal self-center flex flex-col items-end gap-8 text-[30px] font-bold pt-[44%]">
              <li onClick={handleOnClose}><Link href='/shop' className="hover:text-[#EBAF5A] active:text-[#EBAF5A] mx-3">Магазин</Link></li>
              <li onClick={handleOnClose}><Link href='/' className="hover:text-[#EBAF5A] mx-3">Зворотній зв'язок</Link></li>
              <li onClick={handleOnClose}><Link href='/' className="hover:text-[#EBAF5A] mx-3">0665763845</Link></li>
              <li onClick={handleOnClose}><Link href='/' className="hover:text-[#EBAF5A] mx-3">Корзина</Link></li>
            </ul>
            </div>
          </div>
        </>
      )
    }
    