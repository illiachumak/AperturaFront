
import Image from "next/image"
import Link from "next/link"
import Logo from '../../../../public/aperturaLogoWhite.png'
import { usePathname } from "next/navigation";
export default function Footer() {
    const pathname = usePathname()
    const isAdminPage = pathname.includes('admin-page');

    // Do not render if it's an admin page
    if (isAdminPage) {
      return null;
    }
    return (
        <div>
        <div className="h-10 bg-[#3A2911]"/>
            <footer className="bg-[#130E04] py-10">
                <div className="px-8 align-bottom shop-wrapper h-[100px]">
                    <div className="w-full flex justify-between">
                    <Link href='/' className="flex items-center"><Image src={Logo} alt="logo" width={80} height={80}/></Link>
                    <h2 className="items-end flex max-[550px]:hidden     ">All right reserved</h2>
                    <div className="w-230 text-sm content-center flex flex-col gap-2 text-right"> 
                        <p className="mb-2">Контакти:</p>
                        <p>+380735072831</p>
                        <a href = "mailto: apertura@gmail.com">aperturatrade@gmail.com</a>
                        <p>смт. Ворзель, вул. Яблунська 11а</p>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}