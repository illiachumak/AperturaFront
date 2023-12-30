"use client"
import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import { selectIsLoading } from "../../redux/slices/flagSlice"
import { useSelector } from "react-redux"
export default function Footer() {
    const isLoading = useSelector(selectIsLoading)
    if(isLoading) return
    return (
        <>
        <div className="h-10 bg-[#3A2911]"/>
            <footer className="bg-[#130E04] py-10">
                <div className="px-8 align-bottom shop-wrapper h-[100px]">
                    <div className="w-full flex justify-between">
                    <Link href='/' className="flex items-center"><Image src={Logo} alt="logo" width={80} height={80}/></Link>
                    <h2 className="items-end flex max-[550px]:hidden     ">All right reserved</h2>
                    <div className="w-230 text-sm content-center flex flex-col gap-2 text-right"> 
                        <p className="mb-2">Контакти:</p>
                        <p>+380123456789</p>
                        <p>apertura@gmail.com</p>
                        <p>м.Львів вул.Чорновола 44</p>
                        <p>Зворотній зв`язок</p>
                    </div>
                </div>
                </div>
            </footer>
        </>
    )
}