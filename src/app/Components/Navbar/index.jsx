import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import './style.css'
/*
    * Responsible for rendering navbar
    * Responsible for routing
*/

export default function Navbar() {

      return (<>
        <nav className="flex min-w-fit w-full  bg-[#130E04] py-5 justify-around text-white font-sans">
          <div className="px-5">
            <Link href='/'><Image src={Logo} width={60} height={60}/></Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-5 divide-x divide-slate-600">
              <li><Link href='/' className=" hover:bg-tranhover:text-yellow-500sparent mx-3">Магазин</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">Зворотній зв'язок</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">0665763845</Link></li>
              <li><Link href='/' className="hover:text-yellow-500 hover:bg-transparent mx-3">Корзина</Link></li>
            </ul>
          </div>
        </nav>
        <div className="dropdown dropdown-hover w-full">
          <ul className="py-2 menu menu-horizontal flex justify-around min-w-fit px-52 bg-[#3A2911] text-white font">
            <Link href='/'><li tabIndex={0} className="onH hover:text-yellow-500">Двері</li></Link>
            <Link href='/'><li className="hover:text-yellow-500"> Стінові панелі</li></Link>
            <Link href='/'><li className="hover:text-yellow-500">Фурнітура</li></Link>
            <Link href='/'><li className="hover:text-yellow-500"> Профіль</li></Link>
          </ul>
          <ul tabIndex={0} className="dropdown-content z-[1] menu-horizontal p-2 shadow bg-[#3A2911] w-full min-w-fit px-48 flex justify-around text-white leading-7">
            <ul>
              <li><Link href='/' className="">Вхідні двері</Link></li>
              <li><Link href='/'>Приховані двері</Link></li>
              <li><Link href='/'>Розсувні двері</Link></li>
              <li><Link href='/'>Маятникові двері</Link></li>
              <li><Link href='/'>Рото-двері</Link></li>
              <li><Link href='/'>Compack двері</Link></li>
            </ul>
            <ul>
            </ul>
            <ul>
            </ul>
            <ul>
              <li><Link href='/'>Ручки</Link></li>
              <li><Link href='/'>Замки</Link></li>
              <li><Link href='/'>Петлі</Link></li>
              <li><Link href='/'>Стопор</Link></li>
              <li><Link href='/'>Поріг</Link></li>
              <li><Link href='/'>Системи</Link></li>
            </ul>
          </ul>
        </div>
        </>
      )
    }
    