
import Link from "next/link"
import Image from "next/image"
import category from '../../assets/shop/categories.png'

export default function MobileCategoryItem() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <div className="group flex justify-between text-center relative overflow-hidden cursor-pointer ">
            <Image src={category} alt="" className="w-[400px] h-[400px] max-[1100px]:w-[200px] max-[1100px]:h-[400px]
            max-[935px]:w-[300px] max-[935px]:h-[300px] max-[690px]:w-[230px] max-[570px]:w-[199px] max-[570px]:h-[250px] 
            max-[490px]:w-[180px]  max-[490px]:h-[235px] max-[450px]:w-[150px] max-[450px]:h-[200px] max-[390px]:w-[135px]
            max-[360px]:w-[115px]"/>
            <div className="group absolute bg-black  w-full h-full transition-opacity duration-500 opacity-80 flex flex-col justify-center items-center px-4">
                <h2 className="font-bold text-[18px] capitalize my-8 max-[450px]:text-[16px]">Стінові панелі</h2>
                <Link href='shop/' className=" w-2/3"><button className="main_button w-full  h-[28px]">Магазин</button></Link>
            </div>
          </div>
  )
}
