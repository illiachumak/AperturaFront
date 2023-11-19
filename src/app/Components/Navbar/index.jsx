import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import './style.css'
/*
    * Responsible for rendering navbar
    * Responsible for routing
*/

export default function Navbar() {

      return (<div className = 'nav bg-[#130E04] flex flex-col align-middle'>
        <nav className="flex py-5 text-white font-sans justify-between shop-wrapper">
          <div className="px-2">
            <Link href='/'><Image src={Logo} width={60} height={60}/></Link>
          </div>
          <div className="flex px-0">
            <ul className="menu menu-horizontal divide-x divide-slate-600 self-center px-0">
              <li><Link href='/shop' className="hover:text-yellow-500 hover:bg-tranhover:text-yellow-500sparent mx-3">Магазин</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">Зворотній зв'язок</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">0665763845</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">Корзина</Link></li>
            </ul>
          </div>
        </nav>
        <div className="bg-[#3A2911] flex flex-col">
            <div className="dropdown dropdown-hover">
              <ul className="dropdown dropdown-hover py-5 menu menu-horizontal flex justify-between min-w-fit px-12 text-white shop-wrapper font">
                <Link href='/'><li className="peer hover:text-yellow-500">Двері</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Стінові панелі</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Профіль</li></Link>
                <Link href='/'><li className="hover:text-yellow-500">Фурнітура</li></Link>
              </ul>
            </div>
            </div>
          </div>
      )
    }
    