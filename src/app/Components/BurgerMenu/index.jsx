'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import brg from '../../assets/burg.svg'
import X from '../../assets/shop/x.png'
import { useDispatch } from "react-redux"
import { openCart } from "../../redux/slices/cartSlice"

export default function Navbar() {
  const dispatch = useDispatch()

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
          <div className={` w-full max-[400px]:w-[400px] absolute z-[55] top-[0] right-0 ${open ? '' : 'hidden'}`}>
            <div className="w-full max-[400px]:w-[400px] h-screen max-[400px]:h-[1000px] absolute z-[15] top-0 left-0 bg-black opacity-40" onClick={handleOnClose}></div>
            <div className="z-[16] absolute top-0 right-0 w-[75%] h-screen max-[400px]:w-[300px] max-[400px]:h-[1000px] bg-[#130E04]">
            <Image src={X} alt="" width={25} className="absolute right-[50px] top-[28px]" onClick={handleOnClose} />
            <ul className="menu menu-horizontal self-center flex flex-col items-end gap-8 text-[30px] mr-[25px] font-bold pt-[100px]">
              <li onClick={handleOnClose}><Link href='/shop' className="hover:text-[#EBAF5A] active:text-[#EBAF5A] mx-3">Магазин</Link></li>
              <li onClick={handleOnClose}><Link
                href={`${typeof window !== 'undefined' && window.location.pathname === '/' ? '/#section-to-scroll' : '/#section-to-scroll'}`}
                className="pl-4 hover:text-yellow-500 mx-3 !active:text-yellow-500 text-[13px]"
              >
                Зворотній зв&apos;язок
              </Link></li>
              <li><p className="pl-4 hover:text-yellow-500 mx-3 text-[13px] cursor-pointer" onClick={() => {
                navigator.clipboard.writeText('+380665763845');
                alert("Номер скопійовано!");
              }}>+380665763845</p></li>
              <li onClick={handleOnClose}><div onClick={()=> dispatch(openCart())} className="hover:text-[#EBAF5A] mx-3">Корзина</div></li>
            </ul>
            </div>
          </div>
        </>
      )
    }
    