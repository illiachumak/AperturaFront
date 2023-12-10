import Image from 'next/image'
import Link from 'next/link'

import carousel from '../../assets/shop/carousel.jpg'

import './style.css'
/*
    * Responsible for rendering Carrousel Section
*/


export default function Carousel() {

  return (
    <>
      
        <div className="w-full flex align-middle justify-center max-[750px]:hidden"> 
          <Image src={carousel} className=" object-cover w-full h-[484]" alt='carousel-image'/>
          <div className='flex justify-center absolute flex-col self-center z-0 text-center'>
            <h2 className='main_text text-[24px] w-[500px] 
            max-[1000px]:w-[350px] max-[1000px]:text-[18px] 
            max-[700px]:text-[14px] max-[550px]:text-[12px]
            max-[410px]:text-[10px] max-[410px]:w-[300px]'>Ласкаво просимо до Apertura - де дизайн зустрічається з майстерністю.</h2>
            <Link href='/shop'><button className='main_button w-[280px] max-[800px]:w-[240px] max-[700px]:w-[220px] max-[700px]:h-[25px]  max-[550px]:w-[150px]'>Магазин</button></Link>
          </div>
        </div> 
    
     </>
  )
}
