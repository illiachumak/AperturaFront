
import Link from "next/link"
import Image from "next/image"
import category from '../../assets/shop/categories.png'

export default function CategoryItem() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <div className="group flex justify-between text-center relative overflow-hidden cursor-pointer ">
            <Image src={category} alt="" className="w-[250px] h-[550px]"/>
            <div className="group absolute bg-black  w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80 flex flex-col justify-center items-center">
                <h2 className=" font-bold text-2xl capitalize my-8">Стінові панелі</h2>
                <Link href='shop/' className=""><button className="main_button w-[180px] h-[28px] ">Магазин</button></Link>
            </div>
          </div>
  )
}
