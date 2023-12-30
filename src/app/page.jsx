import Link from "next/link"
import './globals.css'
import Carousel from "./Components/Carrousel"
import Image from "next/image"
import about from './assets/shop/about.png'
import CategoryItem from "./Components/CategoryItem"
import MobileCategoryItem from "./Components/CategoryItem/mobileItem"
import FeedbackSection from "./Components/FeedbackSection"
import { getCategories } from "./services/api"
import Loading from "./Components/Loading"


export default async function Home() {

  const categories  = await getCategories()
  return (
    <>
      <main className="!pt-12 max-[750px]:!pt-4 responsive-container body-container flex flex-col justify-between items-center">
        <Carousel />

        <div className="flex flex-col mb-6rem w-full">
          <h2 className="font-bold text-xl my-8 underline decoration-yellow-600 underline-offset-4  ">МАГАЗИН</h2>
          <div className="flex flex-row justify-between w-full gap-6 flex-wrap max-[1174px]:hidden">
          {categories.map((category, index) => (
            <CategoryItem key={category.id + index} bodyObj={category}/>
          ))}
        </div>
        <div className="flex flex-row justify-around w-full gap-6 flex-wrap min-[1174px]:hidden max-[750px]">
          {categories.map((category, index) => (
            <MobileCategoryItem key={category.id + index} bodyObj={category}/>
          ))}
        </div>

        </div>
      </main>

      <div className="about-bg max-[1000px]:hidden">
        <div className="responsive-container mb-6rem flex flex-row justify-between gap-16 !mt-24">
          <Image className="w-[500px] object-cover h-[550px] max-[1100px]:w-[400px]" src={about} alt="" />
          <div className="w-full flex flex-col justify-between text-white">
            <h1 className=" font-black text-3xl">ПРО НАС</h1>
            <p className=" font-normal font-mono leading-10 about-us-text">Ми - професійні виробники дверей та фурнітури з багаторічним
              досвідом у цій галузі. Наша місія полягає в тому, щоб надавати клієнтам
              високоякісні вироби, які поєднують у собі естетику, надійність та функціональність.<br /><br />
              Наші двері – це відображення вашого стилю та смаку. Ми пропонуємо широкий вибір
              дверей для будь-якого інтер&apos;єру, починаючи від класичних і закінчуючи сучасними
              дизайнами. Кожна двері виготовляється з використанням високоякісних матеріалів і
              технологій, щоб забезпечити максимальну тривалість служби та зберегти свою привабливість з роками.</p>

            <div className="flex justify-between">
              <Link href='/shop'><div className=" text-xl main_button w-[250px]">Магазин</div></Link>
              <Link href='/#section-to-scroll'><div className=" text-xl main_button w-[250px]">Зворотній звʼязок</div></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Use the FeedbackSection component here */}
      <FeedbackSection />
    </>
  );
}
