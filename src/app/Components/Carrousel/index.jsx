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
      <div className="carousel border-2 border-solid border-yellow-700 shop-wrapper">
        <div id="item1" className="carousel-item w-full flex align-middle justify-center"> 
          <Image src={carousel} className=" w-full object-cover h-484" alt='carousel-image'/>
          <div className='flex absolute flex-col self-center z-0 text-center'>
            <h2 className='main_text'>Ласкаво просимо до Apertura - де дизайн зустрічається з майстерністю.</h2>
            <Link href='/shop'><button className='main_button border-yellow-600'>Магазин</button></Link>
          </div>
        </div> 
        <div id="item2" className="carousel-item w-full">
          <Image src={carousel} className="w-full object-cover h-484" height={480} alt='carousel-image'/>
        </div> 
      </div> 
    </>
  )
}
