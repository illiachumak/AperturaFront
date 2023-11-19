import Link from "next/link"
import './globals.css'
import Carousel from "./Components/Carrousel"
import Image from "next/image"
import category from './assets/shop/categories.png'
import about from './assets/shop/about.png'

export default function Home() {

/*
  * Resposible for routing and rendering pages 
*/
  return (
    <main className="min-h-screen flex flex-col justify-between items-center">
      <Carousel/>

      <div className="flex flex-col shop-wrapper mb-24">
        <h2 className="font-bold text-xl my-6 underline decoration-yellow-600 underline-offset-4  ">МАГАЗИН</h2>
        <div className="flex flex-row justify-between">
          <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer">
            <Image src={category} alt=""/>
            <div className="absolute bg-black border-2 border-yellow-600 border-solid w-full h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-80 flex flex-col justify-center items-center">
                <h2 className=" font-bold text-xl capitalize my-6">Стінові панелі</h2>
                <Link href='shop/' className=" w-2/3"><button className="main_button">Перейти</button></Link>
            </div>
          </div>
          <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer">
            <Image src={category} alt=""/>
            <div className="absolute bg-black border-2 border-yellow-600 border-solid w-full h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-80 flex flex-col justify-center items-center">
                <h2 className=" font-bold text-xl capitalize my-6">Стінові панелі</h2>
                <Link href='shop/' className=" w-2/3"><button className="main_button hover:opacity-100">Перейти</button></Link>
            </div>
          </div>
          <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer">
            <Image src={category} alt=""/>
            <div className="absolute bg-black border-2 border-yellow-600 border-solid w-full h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-80 flex flex-col justify-center items-center">
                <h2 className=" font-bold text-xl capitalize my-6">Стінові панелі</h2>
                <Link href='shop/' className=" w-2/3"><button className="main_button">Перейти</button></Link>
            </div>
          </div>
          <div className="group flex justify-center text-center relative overflow-hidden cursor-pointer">
            <Image src={category} alt=""/>
            <div className="absolute bg-black border-2 border-yellow-600 border-solid w-full h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-80 flex flex-col justify-center items-center">
                <h2 className=" font-bold text-xl capitalize my-6">Стінові панелі</h2>
                <Link href='shop/' className=" w-2/3"><button className="main_button">Перейти</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-wrapper mb-24 flex flex-row justify-between">
        <Image className="w-48p object-cover" src={about}/>
        <div className="w-48p flex flex-col justify-between text-white">
          <h1 className=" font-black text-4xl">ПРО НАС</h1>
          <p className=" font-normal text-3xl font-mono leading-10">Ми - професійні виробники дверей та фурнітури з багаторічним 
          досвідом у цій галузі. Наша місія полягає в тому, щоб надавати клієнтам 
          високоякісні вироби, які поєднують у собі естетику, надійність та функціональність.
          Наші двері – це відображення вашого стилю та смаку. Ми пропонуємо широкий вибір 
          дверей для будь-якого інтер'єру, починаючи від класичних і закінчуючи сучасними 
          дизайнами. Кожна двері виготовляється з використанням високоякісних матеріалів і 
          технологій, щоб забезпечити максимальну тривалість служби та зберегти свою привабливість з роками.</p>

          <div className="flex justify-around">
            <button className=" text-2xl py-2 border-solid border-2 border-yellow-600 w-1/3 hover:bg-yellow-600 duration-500 transition-colors hover:text-[#3A2911]">Магазин</button>
            <button className=" text-2xl py-2 border-solid border-2 border-yellow-600 w-1/3 hover:bg-yellow-600 duration-500 transition-colors hover:text-[#3A2911]">Зворотній звʼязок</button>
          </div>
        </div>
      </div>


      <div className="w-full bg-[#130E04]">
      <div className="shop-wrapper mt-20 flex flex-row justify-between">
        <div className="w-48p flex flex-col justify-between">
          <div>
            <label for="name" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Імʼя</label>
            <input type="name" id="name" className=" text-2xl rounded-md w-full p-2.5 border-2 border-solid border-yellow-600 bg-transparent" required/>
          </div>
          <div className="my-10">
            <label for="phone" className="block mb-2 text-3xl font-medium text-gray-900 dark:text-white">Телефон</label>
            <input type="tel" id="phone" className=" text-2xl rounded-md w-full p-2.5 border-2 border-solid border-yellow-600 bg-transparent " placeholder="(097)-743-23-56" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required/>
          </div>
          <button className="text-2xl py-3 mt-10 mb-20 border-solid border-2 border-yellow-600 w-2/3 hover:bg-yellow-600 duration-500 transition-colors hover:text-[#3A2911] rounded-xl">Замовити дзвінок</button>
        </div>
        <div className="w-48p flex flex-col ">
          <h1 className=" font-black text-4xl my-10">ЗВОРОТНІЙ ЗВ`ЯЗОК</h1>
            <p className=" font-normal text-3xl font-mono leading-10 my-6">У нашій компанії кожен клієнт – це особливий гість, і ми прагнемо забезпечити вам найвищий рівень задоволення від кожного замовлення.</p>
        </div>
      </div>
      </div>
    </main>
  )
}
