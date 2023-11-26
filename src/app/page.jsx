import Link from "next/link"
import './globals.css'
import Carousel from "./Components/Carrousel"
import Image from "next/image"
import about from './assets/shop/about.png'
import CategoryItem from "./Components/CategoryItem"
import MobileCategoryItem from "./Components/CategoryItem/mobileItem"

export default function Home() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <>
    <main className="!pt-12 max-[750px]:!pt-4 shop-wrapper flex flex-col justify-between items-center">
      <Carousel/>

      <div className="flex flex-col mb-6rem w-full">
        <h2 className="font-bold text-xl my-8 underline decoration-yellow-600 underline-offset-4  ">МАГАЗИН</h2>
        <div className="flex flex-row justify-between w-full gap-8 flex-wrap max-[1174px]:hidden">
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </div>
        <div className="flex flex-row justify-around w-full gap-8 flex-wrap min-[1174px]:hidden max-[750px]">
        <MobileCategoryItem/>
        <MobileCategoryItem/>
        <MobileCategoryItem/>
        <MobileCategoryItem/>
        </div>
      </div>
      </main>

      <div className="about-bg max-[1000px]:hidden">
        <div className=" shop-wrapper mb-6rem flex flex-row justify-between gap-12 !mt-24">
          <Image className="w-[500px] object-cover h-[550px] max-[1100px]:w-[400px]" src={about} alt=""/>
          <div className="w-full flex flex-col justify-between text-white">
            <h1 className=" font-black text-3xl">ПРО НАС</h1>
            <p className=" font-normal font-mono leading-10 about-us-text">Ми - професійні виробники дверей та фурнітури з багаторічним 
            досвідом у цій галузі. Наша місія полягає в тому, щоб надавати клієнтам 
            високоякісні вироби, які поєднують у собі естетику, надійність та функціональність.<br/><br/>
            Наші двері – це відображення вашого стилю та смаку. Ми пропонуємо широкий вибір 
            дверей для будь-якого інтер'єру, починаючи від класичних і закінчуючи сучасними 
            дизайнами. Кожна двері виготовляється з використанням високоякісних матеріалів і 
            технологій, щоб забезпечити максимальну тривалість служби та зберегти свою привабливість з роками.</p>

            <div className="flex justify-between">
              <div className=" text-xl main_button w-[250px]">Магазин</div>
              <div className=" text-xl main_button w-[250px]">Зворотній звʼязок</div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#130E04]">
      <div className="shop-wrapper !mt-20 flex flex-row max-[780px]:flex-col gap-12 justify-between">
        <div className="max-w-1/2 flex flex-col justify-between max-[780px]:order-2 max-[780px]:max-w-[100%]">
          <div>
            <label className="block mb-2 text-3xl font-medium ">Імʼя</label>
            <input type="name" className="border-main h-[45px] text-xl rounded-md w-[400px] p-2.5 bg-transparent 
            max-[1000px]:h-[40px] max-[875px]:w-[350px] max-[780px]:w-[90%]" placeholder="Ім`я"/>
          </div>
          <div className="my-10">
            <label className="block mb-2 text-3xl font-medium ">Телефон</label>
            <input type="tel" className="border-main h-[45px] text-xl rounded-md w-full p-2.5 border-2 bg-transparent 
            max-[1000px]:h-[40px] max-[875px]:w-[350px] max-[780px]:w-[90%]" placeholder="(097)-743-23-56" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required/>
          </div>
          <button className="text-xl main_button !py-4 mt-10 mb-20 w-2/3 
          !max-[900px]:text-[12px] max-[780px]:w-[90%]">Замовити дзвінок</button>
        </div>
        <div className="w-full flex flex-col max-[780px]:order-1 max-[780px]:max-w-[100%] ">
          <h1 className=" font-black text-3xl my-10 max-[780px]:my-2">ЗВОРОТНІЙ ЗВ`ЯЗОК</h1>
            <p className=" font-normal text-[24px] font-mono leading-10 my-6 
            max-[670px]:text-[20px] max-[568px]:text-[18px]">У нашій компанії кожен клієнт – це особливий гість, і ми прагнемо забезпечити вам найвищий рівень задоволення від кожного замовлення.</p>
        </div>
      </div> 
      </div>
    </>
  )
}
