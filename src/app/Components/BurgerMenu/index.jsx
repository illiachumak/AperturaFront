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
            <div className="absolute top-0 right-0 w-[80%] h-screen bg-[#130E04]">
            <Image src={X} alt="" width={25} className="absolute right-[18%] top-[28px]" onClick={handleOnClose} />
            <ul className="menu menu-horizontal self-center flex flex-col items-end gap-8 text-[30px] mr-[9%] font-bold pt-[100px]">
              <li onClick={handleOnClose}><Link href='/shop' className="hover:text-[#EBAF5A] active:text-[#EBAF5A] mx-3">Магазин</Link></li>
              <li onClick={handleOnClose}><Link
                href={`${typeof window !== 'undefined' && window.location.pathname === '/' ? '#section-to-scroll' : '/#section-to-scroll'}`}
                className="pl-4 hover:text-yellow-500 mx-3 !active:text-yellow-500 text-[13px]"
              >
                Зворотній зв&apos;язок
              </Link></li>
              <li><p className="pl-4 hover:text-yellow-500 mx-3 text-[13px] cursor-pointer" onClick={() => {
                navigator.clipboard.writeText('+380665763845');
                alert("Номер скопійовано!");
              }}>+380665763845</p></li>
              <li onClick={handleOnClose}><Link href='/' className="hover:text-[#EBAF5A] mx-3">Корзина</Link></li>
            </ul>
            </div>
          </div>
        </>
      )
    }
    