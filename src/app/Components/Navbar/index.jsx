'use client'
import Image from "next/image"
import NextLink from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import './style.css'
import BurgerMenu from '../BurgerMenu'
import { openCart } from "../../redux/slices/cartSlice"
import { useDispatch } from "react-redux"
import { usePathname } from "next/navigation"
/*
    * Responsible for rendering navbar
    * Responsible for routing
*/

export default function Navbar() {
  const dispatch = useDispatch()

  const pathname = usePathname()
  const isAdminPage = pathname.includes('admin-page');

  // Do not render if it's an admin page
  if (isAdminPage) {
    return null;
  }
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
                    href={`${typeof window !== 'undefined' && window.location.pathname === '/' || '' ? `/#section-to-scroll` : '/#section-to-scroll'}`}
                    className="pl-4 hover:text-yellow-500 mx-3 !active:text-yellow-500 text-[13px]"
                  >
                    Зворотній зв&apos;язок
                  </NextLink></li>
              <li><p className="pl-4 hover:text-yellow-500 mx-3 text-[13px] cursor-pointer" onClick={() => {
                navigator.clipboard.writeText('+3800974154321')
                alert("Номер скопійовано!")
                }}>+380974154321</p></li>
              <li><div className="pl-4 hover:text-yellow-500 mx-3 text-[13px] cursor-pointer"
              onClick={()=> dispatch(openCart())}>Корзина</div></li>
            </ul>
            <BurgerMenu/>
          </div>
          </div>
        </nav>
        <div className="bg-[#3A2911] w-full max-[720px]:hidden">
            <div className="responsive-container">
              <div className="w-full">
              <ul className="py-5 px-8 text-white font flex justify-between items-center pt-6 w-full h-[32px] ">
                <NextLink href='/shop/1'><li className=" hover:text-yellow-500">Двері</li></NextLink>
                <NextLink href='/shop/2'><li className="hover:text-yellow-500">Стінові панелі</li></NextLink>
                <NextLink href='/shop/3'><li className="hover:text-yellow-500">Профіль</li></NextLink>
                <NextLink href='/shop/4'><li className="hover:text-yellow-500">Фурнітура</li></NextLink>
              </ul>
              </div>
            </div>
            </div>
          </div>
      )
    }
    