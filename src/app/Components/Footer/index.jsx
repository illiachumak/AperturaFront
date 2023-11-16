import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#130E04]">
                <div className="h-6 bg-[#3A2911]"/>
                <div className="flex justify-around p-3 align-bottom">
                    <Link href='/' className="m-3 flex items-center"><Image src={Logo} alt="logo" width={80} height={80}/></Link>
                    <h2 className="m-3 items-end flex ">All right reserved</h2>
                    <div className="m-3 w-1/12 flex flex-wrap text-sm"> Контакти: +380123456789 apertura@gmail.com м.&nbsp;Львів вул.&nbsp;Чорновола 44</div>
                </div>

            </footer>
        </>
    )
}