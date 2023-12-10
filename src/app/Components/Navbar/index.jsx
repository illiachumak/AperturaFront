'use client'
import Image from "next/image"
import NextLink from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import './style.css'
import BurgerMenu from '../BurgerMenu'
/*
    * Responsible for rendering navbar
    * Responsible for routing
*/

export default function Navbar() {
      return (
      <div className="bg-[#130E04] sticky top-0 z-10"
    >
        <nav className=" bg-[#130E04] font-sans  py-5x responsive-container">
         <div className="w-full flex justify-between items-center">
          <div className="px-2">
            <NextLink href='/'><Image src={Logo} width={60} height={60} alt=""/></NextLink>
          </div>
          <div className="flex px-0">
            <ul className=" divide-x divide-gray-600 self-center flex items-center gap-8 max-[720px]:hidden">
              <li><NextLink href='/shop' className="pl-4 hover:text-yellow-500 !active:text-yellow-500 mx-3 text-[13px]">Магазин</NextLink></li>
              <li><NextLink
                    href={`${typeof window !== 'undefined' && window.location.pathname === '/' ? '#section-to-scroll' : '/#section-to-scroll'}`}
                    className="pl-4 hover:text-yellow-500 mx-3 !active:text-yellow-500 text-[13px]"
                  >
                    Зворотній зв&apos;язок
                  </NextLink></li>
              <li><p className="pl-4 hover:text-yellow-500 mx-3 text-[13px] cursor-pointer" onClick={() => {
                navigator.clipboard.writeText('+380665763845')
                alert("Номер скопійовано!")
                }}>+380665763845</p></li>
              <li><NextLink href='/' className="pl-4 hover:text-yellow-500 mx-3 text-[13px]">Корзина</NextLink></li>
            </ul>
            <BurgerMenu/>
          </div>
          </div>
        </nav>
        <div className="bg-[#3A2911] w-full max-[720px]:hidden">
            <div className="responsive-container">
              <div className="w-full">
              <ul className="py-5 px-8 text-white font flex justify-between items-center pt-6 w-full h-[32px] ">
                <NextLink href='/shop/dveri'><li className=" hover:text-yellow-500">Двері</li></NextLink>
                <NextLink href='/shop/stinovi-paneli'><li className="hover:text-yellow-500">Стінові панелі</li></NextLink>
                <NextLink href='/shop/profile'><li className="hover:text-yellow-500">Профіль</li></NextLink>
                <NextLink href='/shop/furnitura'><li className="hover:text-yellow-500">Фурнітура</li></NextLink>
              </ul>
              </div>
            </div>
            </div>
          </div>
      )
    }
    