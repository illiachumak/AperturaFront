'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import brg from '../../assets/burg.svg'

export default function Navbar() {
    const [open, setOpen] = useState(false)
      return (
        <>
        <div onClick={() => {
            setOpen(true)
           
        }}>
        <Image src={brg} alt="" className="min-[720px]:hidden mr-3" />
        </div>  
          <div className={`absolute z-[55] top-[0] right-0 ${open ? '' : 'hidden'}`}>
            <div className="bg-black opacity-50  w-screen h-screen z-10" onClick={() => setOpen(false)}></div>
            <div className="absolute top-0 right-0 w-[70%] h-screen bg-black">
            <ul className="menu menu-horizontal self-center flex flex-col items-center gap-5 text-3xl pt-10">
              <li><Link href='/shop' className="hover:text-[#EBAF5A] active:text-[#EBAF5A] mx-3">Магазин</Link></li>
              <li><Link href='/' className="hover:text-[#EBAF5A] mx-3">Зворотній зв'язок</Link></li>
              <li><Link href='/' className="hover:text-[#EBAF5A] mx-3">0665763845</Link></li>
              <li><Link href='/' className="hover:text-[#EBAF5A] mx-3">Корзина</Link></li>
            </ul>
            </div>
          </div>
        </>
      )
    }
    