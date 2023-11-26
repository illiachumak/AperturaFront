import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import './style.css'
import BurgerMenu from '../BurgerMenu'
/*
    * Responsible for rendering navbar
    * Responsible for routing
*/

export default function Navbar() {

      return (<div className = 'bg-[#130E04] sticky top-0 z-10'>
        
        <nav className=" bg-[#130E04]font-sans shop-wrapper py-5x">
         <div className="w-full flex justify-between items-center">
          <div className="px-2">
            <Link href='/'><Image src={Logo} width={60} height={60} alt=""/></Link>
          </div>
          <div className="flex px-0">
            <ul className=" divide-x divide-gray-600 self-center flex items-center gap-8 max-[720px]:hidden">
              <li><Link href='/shop' className="pl-4 hover:text-yellow-500 !active:text-yellow-500 mx-3 text-[13px]">Магазин</Link></li>
              <li><Link href='/' className="pl-4 hover:text-yellow-500 mx-3 !active:text-yellow-500 text-[13px]">Зворотній зв'язок</Link></li>
              <li><Link href='/' className="pl-4 hover:text-yellow-500 mx-3 text-[13px]">0665763845</Link></li>
              <li><Link href='/' className="pl-4 hover:text-yellow-500 mx-3 text-[13px]">Корзина</Link></li>
            </ul>
            <BurgerMenu/>
          </div>
          </div>
        </nav>
        <div className="bg-[#3A2911] w-full max-[720px]:hidden">
            <div className="shop-wrapper">
              <div className="w-full">
              <ul className="py-5 px-8 text-white font flex justify-between items-center pt-6 w-full h-[32px] ">
                <Link href='/'><li className=" hover:text-yellow-500">Двері</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Стінові панелі</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Профіль</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Фурнітура</li></Link>
              </ul>
              </div>
            </div>
            </div>
          </div>
      )
    }
    